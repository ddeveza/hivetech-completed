import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import CartIcon from '../../assets/images/cart.png';
import { getCartSelector } from '../../features/cart/cartSelector';

export default function Cart(props) {
  const totalCart = useSelector(getCartSelector);

  return (
    <li>
      <Link className='menu__item' to='/cart'>
        <img className='cart-icon' src={CartIcon} alt='cart-icon' />
        <span className='cart-text'>Cart</span>
        {totalCart && totalCart.length > 0 ? (
          <div className='cart-number'>
            <span>{totalCart.length}</span>
          </div>
        ) : (
          ''
        )}
      </Link>
    </li>
  );
}
