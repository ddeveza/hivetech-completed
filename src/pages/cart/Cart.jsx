import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  getCartSelector,
  totalCartItemsSelector,
} from '../../features/cart/cartSelector';
import './Cart.css';
import CartCard from './components/CartCard';
const Cart = () => {
  const carts = useSelector(getCartSelector);
  const { totalPrice, totalCartItems } = useSelector(totalCartItemsSelector);
  console.log(carts);
  const isEmpty = carts && carts.length > 0 ? false : true;
  return (
    <section className='main-wrapper'>
      <div className='cart'>
        <p className='title'>My Cart(s)</p>
        {isEmpty && (
          <>
            <p>
              Cart is empty. Please go to shopping in order to add product to
              cart.
            </p>
            <Link to={'/home'} className='custom-btn'>
              Go to Shopping
            </Link>
          </>
        )}
        <div className='cart-container'>
          {!isEmpty &&
            carts.map((cart) => <CartCard key={cart.id} cart={cart} />)}
        </div>
        {!isEmpty && (
          <>
            <hr className='cart-line' />
            <div className='total-cart'>
              <div>
                <div className='sub-total'>
                  <p>SUBTOTAL:</p>
                  <p>$ {totalPrice.toFixed(2)}</p>
                </div>
                <div className='total-item'>
                  <p>ITEM(S):</p>
                  <p>{totalCartItems}</p>
                </div>
                <Link to='/checkout' className='proceed-checkout'>
                  PROCEED TO CHECKOUT
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;
