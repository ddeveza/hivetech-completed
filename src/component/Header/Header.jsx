import { Link } from 'react-router-dom';

import { useComponentLink } from '../../hooks/useComponentLink';
import './Header.css';

import HiveTechwearLogo from '../../assets/images/HIVETechwear.svg';

const Header = () => {
  let component = useComponentLink();

  return (
    <div className='header'>
      <div>
        <Link to='/'>
          <img className='logo' src={HiveTechwearLogo} alt='HIVETechwear' />
        </Link>

        <input id='menu__toggle' type='checkbox' />
        <label className='menu__btn' htmlFor='menu__toggle'>
          <span></span>
        </label>
      </div>
      <ul className='menu__box'>{component}</ul>
    </div>
  );
};

export default Header;
