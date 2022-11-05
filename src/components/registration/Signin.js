import { useState } from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import { Link as RLink, useLocation } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signin } from '../../redux-toolkit/actions/auth/Signin'
import isEmpty from '../../utils/isEmpty'
import { validateEmptyFields } from '../../utils/Validations'
import Input from '../../shared/form/Input'
import logo from '../../assets/images/logo.png'
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
  )
}

const theme = createTheme()

export default function Signin() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const location = useLocation()
  const dispatch = useDispatch()
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  })
  const errorMessages = {
    email: 'Email',
    password: 'Password',
  }
  const { email, password } = formValues

  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault()
    login()
  }

  const formOnChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const login = () => {
    let errors = {}
    errors = validateEmptyFields({ email: email }, errorMessages)
    if (password === '') {
      errors.password = 'Password is Required'
    }
    setError(errors)

    if (isEmpty(errors)) {
      dispatch(signin(formValues, navigate, setLoading))
    }
  }

  return (
    <>
      <section className='vh-100' style={{ backgroundColor: '#a9a9a9' }}>
        <div className='container-fluid h-100'>
          <div className='row d-flex justify-content-center align-items-center h-100'>
            <div className='col-md-5 col-lg-5 col-xl-5'>
              <p className='display-4 h1 fw-bold mb-5 text-center'>
                JOIN THE TECHVERSE COMMUNITY
              </p>
              <div className='signupIconContainer'>
                <i class='signupIcon fa-solid fa-circle-question'></i>
                <p className='fw-bold'>Need solution _ ask a quesion</p>
              </div>
              <div className='signupIconContainer'>
                <i class='signupIcon fa-solid fa-tags'></i>
                <p className='fw-bold'>Build profile _ join community</p>
              </div>
              <div className='signupIconContainer'>
                <i class='signupIcon fa-solid fa-people-arrows'></i>
                <p className='sloganExp fw-bold'>
                  {' '}
                  Find Best Expert _ explore now
                </p>
              </div>
              <div className='signupIconContainer'>
                <i class='signupIcon fa-solid fa-award'></i>
                <p className='slogan fw-bold'>
                  {' '}
                  Get remote work _ join techverse
                </p>
              </div>
            </div>
            <div
              style={{ marginTop: '80px' }}
              className='col-md-7 col-lg-7 col-xl-6'
            >
              <div
                className='card text-black border border-dark border-4'
                style={{ borderRadius: '20px', height: '800px' }}
              >
                <div
                  className='card-body p-md-10'
                  style={{ backgroundColor: '#CCC9C0', borderRadius: '20px' }}
                >
                  <div className='row d-flex justify-content-center align-items-center h-100'>
                    <div className='col-md-8 col-lg-8 col-xl-8 order-2 order-lg-1'>
                      <div className='d-flex justify-content-center'>
                        <img className='fw-bold mb-5 mx-1 mx-md-4 signInLogo' src={logo} />
                        {/* <p className='display-6 text-center h1 fw-bold mb-5 mx-1 mx-md-4'>
                        Login
                      </p> */}
                      </div>

                      <form onSubmit={handleSubmit} className='mx-1 mx-md-4'>

                        <div className='d-flex flex-row align-items-center mb-4'>
                          <i className='fas fa-lock fa-lg me-3 fa-fw'></i>
                          <div className='form-outline flex-fill mb-0'>
                            <Input
                              type='email'
                              name='email'
                              autoComplete='new-email'
                              placeholder='Email'
                              onChange={formOnChange}
                              error={error?.email}
                            />
                          </div>
                        </div>

                        <div className='d-flex flex-row align-items-center mb-4'>
                          <i className='fas fa-key fa-lg me-3 fa-fw'></i>
                          <div className='form-outline flex-fill mb-0'>
                            <Input

                              type='password'
                              name='password'
                              autoComplete='new-password'
                              placeholder='Password'
                              onChange={formOnChange}
                              error={error.password}
                            />
                            <Link
                              className='link'
                              style={{ color: '#042743' }}
                              variant='body2'
                            >
                              Forgot password?
                            </Link>
                          </div>
                        </div>

                        <div className='d-flex justify-content-center'>
                          <button
                            disabled={loading}
                            type='submit'
                            style={{ width: '10vw' }}
                            className='btn btn-primary btn-lg btn-block'

                          >
                            Login
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-1'></div>
          </div>
        </div>
      </section>
    </>
    // <div style={{ backgroundColor: 'gray', height: '100vh' }}>
    //   <ThemeProvider theme={theme}>
    //     <Container
    //       component='main'
    //       maxWidth='xs'
    //       style={{ paddingTop: '90px' }}
    //     >
    //       <CssBaseline />
    //       <Box
    //         sx={{
    //           marginTop: 8,
    //           display: 'flex',
    //           flexDirection: 'column',
    //           alignItems: 'center',
    //         }}
    //       >
    //         <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
    //         <Typography component='h1' variant='h5'>
    //           Sign in
    //         </Typography>
    //         <Box
    //           component='form'
    //           onSubmit={handleSubmit}
    //           noValidate
    //           sx={{ mt: 1 }}
    //         >
    //           <div className='mb-3'>
    //             <Input
    //               type='email'
    //               name='email'
    //               autoComplete='new-email'
    //               placeholder='Email'
    //               onChange={formOnChange}
    //               error={error?.email}
    //             />
    //           </div>
    //           <div div className='mb-3'>
    //             <Input
    //               type='password'
    //               name='password'
    //               autoComplete='new-password'
    //               placeholder='Password'
    //               onChange={formOnChange}
    //               error={error.password}
    //             />
    //           </div>
    //           <Button
    //             disabled={loading}
    //             type='submit'
    //             fullWidth
    //             variant='contained'
    //             sx={{ mt: 3, mb: 2 }}
    //           >
    //             Sign In
    //           </Button>
    //           <Grid>
    //             <Grid item xs>
    //               <Link
    //                 className='link'
    //                 style={{ color: '#042743' }}
    //                 variant='body2'
    //               >
    //                 Forgot password?
    //               </Link>
    //             </Grid>
    //             <Grid item>
    //               <div>
    //                 <RLink
    //                   style={{ color: '#042743' }}
    //                   to='/signup'
    //                   variant='body2'
    //                 >
    //                   {'Sign Up'}
    //                 </RLink>
    //               </div>
    //             </Grid>
    //           </Grid>
    //         </Box>
    //       </Box>
    //       <Copyright sx={{ mt: 8, mb: 4 }} />
    //     </Container>
    //   </ThemeProvider>
    // </div>
  )
}
