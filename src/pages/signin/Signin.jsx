import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { usersLoadingSelector } from '../../features/users/usersSelector';
import { clearUsersError, signin } from '../../features/users/usersSlice';
import './Signin.css';

const Signin = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const [values, setValues] = useState(initialValues);
  const { loading, error, success } = useSelector(usersLoadingSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { value, name } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const onSignin = () => {
    dispatch(clearUsersError());
    dispatch(signin(values));
  };

  if (success) {
    navigate('/home');
  }

  return (
    <section className='main-wrapper'>
      <div className='sign-in'>
        <p className='title'>SIGN IN</p>
        <div className='form-container'>
          <label htmlFor='email'>Email Address</label>
          <input
            className='custom-input'
            type='email'
            name='email'
            placeholder='Enter Email'
            required
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
            required
            value={values.password}
            onChange={handleChange}
          />

          <button className='custom-btn' onClick={onSignin}>
            {loading ? 'Signing in.....' : 'SIGN IN'}
          </button>
          <p>
            New Customer ? <Link to={'/signup'}>Register</Link>
          </p>
          <p style={{ color: 'red', fontWeight: 'bold' }}>{error?.error}</p>
        </div>
      </div>
    </section>
  );
};

export default Signin;
