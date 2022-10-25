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
      <section className='vh-100' style={{ backgroundColor: '#a9a9a9' }}>
        <div className='container-fluid h-100'>
          <div className='row d-flex justify-content-center align-items-center h-100'>
            <div className='col-md-5 col-lg-5 col-xl-5'>
              <p className='display-4 h1 fw-bold mb-5'>
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
                      <p className='display-6 text-center h1 fw-bold mb-5 mx-1 mx-md-4'>
                        SIGN UP
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
                        <div className='d-flex justify-content-center'>
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
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-1'></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
