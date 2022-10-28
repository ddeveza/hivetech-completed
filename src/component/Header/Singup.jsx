import { Link } from 'react-router-dom';
import SignupLogo from '../../assets/images/sign-up.png';

const Signup = () => {
  return (
    <li>
      <Link className='menu__item' to='/signup'>
        <img className='sign-up-icon' src={SignupLogo} alt='' />
        Sign Up
      </Link>
    </li>
  );
};

export default Signup;
