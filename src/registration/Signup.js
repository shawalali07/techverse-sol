import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateEmptyFields } from '../utils/Validations';
import Input from '../shared/form/Input';
import { useDispatch } from 'react-redux';
import { signup } from '../redux-toolkit/actions/auth/Signup';
import isEmpty from '../utils/isEmpty';

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [isAgreedToTerms, setIsAgreedToTerms] = useState(false);

  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formValues;

  const errorMessages = {
    name: 'Name',
    email: 'Email',
    password: 'Password',
  };

  const formOnChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleAgreeTerms = (e) => {
    setIsAgreedToTerms(e.target.checked);
  };

  const register = async (e) => {
    e.preventDefault();
    let errors = {};
    errors = validateEmptyFields(formValues, errorMessages);
    setError(errors);
    if (!isAgreedToTerms) {
      errors['isAgreedToTerms'] = 'Please agree to terms and conditions';
    } else if (isAgreedToTerms && errors['isAgreedToTerms']) {
      delete errors['isAgreedToTerms'];
    }
    if (isEmpty(errors)) {
      dispatch(signup(formValues, navigate, setLoading));
    }
  };

  return (
    <>
      <section className='vh-100' style={{ backgroundColor: '#eee' }}>
        <div className='container h-100'>
          <div className='row d-flex justify-content-center align-items-center h-100'>
            <div className='col-lg-12 col-xl-11'>
              <div className='card text-black' style={{ borderRadius: '25px' }}>
                <div className='card-body p-md-5'>
                  <div className='row justify-content-center'>
                    <div className='col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1'>
                      <p className='text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4'>
                        Sign up
                      </p>

                      <form onSubmit={register} className='mx-1 mx-md-4'>
                        <div className='d-flex flex-row align-items-center mb-4'>
                          <i className='fas fa-lock fa-lg me-3 fa-fw'></i>
                          <div className='form-outline flex-fill mb-0'>
                            <Input
                              placeholder='Name'
                              onChange={formOnChange}
                              name='name'
                              type='text'
                              error={error?.name}
                            />
                          </div>
                        </div>
                        <div className='d-flex flex-row align-items-center mb-4'>
                          <i className='fas fa-lock fa-lg me-3 fa-fw'></i>
                          <div className='form-outline flex-fill mb-0'>
                            <Input
                              placeholder='Email'
                              onChange={formOnChange}
                              name='email'
                              type='email'
                              error={error.email}
                            />
                          </div>
                        </div>

                        <div className='d-flex flex-row align-items-center mb-4'>
                          <i className='fas fa-key fa-lg me-3 fa-fw'></i>
                          <div className='form-outline flex-fill mb-0'>
                            <Input
                              placeholder='Password'
                              onChange={formOnChange}
                              name='password'
                              type='password'
                              error={error.password}
                            />
                          </div>
                        </div>

                        <div className='form-check d-flex justify-content-center mb-5'>
                          <input
                            className='form-check-input me-2'
                            type='checkbox'
                            name='termsAndConditions'
                            onChange={handleAgreeTerms}
                          />
                          <label
                            className='form-check-label'
                            htmlFor='form2Example3'
                          >
                            I agree all statements in{' '}
                            <a href='#!'>Terms of service</a>
                          </label>
                        </div>
                        {error.isAgreedToTerms && (
                          <p style={{ color: 'red', padding: '0px' }}>
                            {error.isAgreedToTerms}
                          </p>
                        )}
                        <div className='d-flex justify-content-center mx-4 mb-3 mb-lg-4'>
                          <button
                            type='submit'
                            style={{ width: '10vw' }}
                            className='btn btn-primary btn-lg btn-block'
                            disabled={
                              !name |
                              !email |
                              password |
                              !isAgreedToTerms |
                              loading
                            }
                          >
                            Create Account
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className='col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2'>
                      <img
                        src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp'
                        className='img-fluid'
                        alt='Sample image'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
