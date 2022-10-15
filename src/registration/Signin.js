import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import { Link as RLink } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signin } from '../redux-toolkit/actions/auth/Signin';
import isEmpty from '../utils/isEmpty';
import { validateEmptyFields } from '../utils/Validations';
import Input from '../shared/form/Input';
import { BtnLoading } from '../components/loader/BtnLoading';
function Copyright(props) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      <Link color='inherit' href='https://techverse-sol.netlify.app/'>
        Techverse
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Signin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });
  const errorMessages = {
    email: 'Email',
    password: 'Password',
  };
  const { email, password } = formValues;

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    login();
  };

  const formOnChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const login = () => {
    let errors = {};
    errors = validateEmptyFields({ email: email }, errorMessages);
    if (password === '') {
      errors.password = 'Password is Required';
    }
    setError(errors);

    if (isEmpty(errors)) {
      dispatch(signin(formValues, navigate, setLoading));
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <Box
            component='form'
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <div className='mb-3'>
              <Input
                type='email'
                name='email'
                autoComplete='new-email'
                placeholder='Email'
                onChange={formOnChange}
                error={error?.email}
              />
            </div>
            <div div className='mb-3'>
              <Input
                type='password'
                name='password'
                autoComplete='new-password'
                placeholder='Password'
                onChange={formOnChange}
                error={error.password}
              />
            </div>

            <Button
              disabled={loading}
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid>
              <Grid item xs>
                <Link href='#' variant='body2'>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <div>
                  <RLink to='/signup' variant='body2'>
                    {'Sign Up'}
                  </RLink>
                </div>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
