import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { usersLoadingSelector } from '../../features/users/usersSelector';
import { clearUsersError, signup } from '../../features/users/usersSlice';
import './Signup.css';

const Signup = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  };
  const navigate = useNavigate();
  const [values, setValues] = useState(initialValues);
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector(usersLoadingSelector);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const onSignup = () => {
    dispatch(clearUsersError);
    if (values.password !== values.password_confirmation) {
      alert('password are not the same');
      return;
    }

    const { password_confirmation, ...data } = values;
    dispatch(signup(data));
  };

  if (success) {
    navigate('/home');
  }

  return (
    <section className='main-wrapper'>
      <div className='sign-up'>
        <p className='title'>SIGN UP</p>
        <div className='form-container'>
          <label htmlFor='email'>Name</label>
          <input
            className='custom-input'
            type='text'
            name='name'
            placeholder='Enter Name'
            value={values.name}
            onChange={handleChange}
          />
          <label htmlFor='email'>Email Address</label>
          <input
            className='custom-input'
            type='email'
            name='email'
            placeholder='Enter Email'
            value={values.email}
            onChange={handleChange}
          />

          <label className='mt-2' htmlFor='email'>
            Password
          </label>
          <input
            className='custom-input'
            type='password'
            name='password'
            placeholder='Enter Password'
            value={values.password}
            onChange={handleChange}
          />

          <label className='mt-2' htmlFor='email'>
            Confirm Password
          </label>
          <input
            className='custom-input'
            type='password'
            name='password_confirmation'
            placeholder='Enter Confirm Password'
            value={values.password_confirmation}
            onChange={handleChange}
          />

          <button className='custom-btn' onClick={onSignup}>
            {loading ? 'Signing up.....' : 'SIGN UP'}
          </button>
          <p>
            Have an account ? <Link to={'sigin'}>Sign In</Link>
          </p>
          <p style={{ color: 'red', fontWeight: 'bold' }}>{error?.email}</p>
        </div>
      </div>
    </section>
  );
};

export default Signup;
