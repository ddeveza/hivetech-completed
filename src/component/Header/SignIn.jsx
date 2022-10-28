import { Link } from 'react-router-dom';
import SigninLogo from '../../assets/images/sign-in.png';

const SignIn = () => {
  return (
    <li>
      <Link className='menu__item' to='/signin'>
        <img className='sign-in-icon' src={SigninLogo} alt='' />
        Sign In
      </Link>
    </li>
  );
};

export default SignIn;
