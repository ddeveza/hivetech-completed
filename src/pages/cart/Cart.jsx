import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCartSelector } from '../../features/cart/cartSelector';
import './Cart.css';
import CartCard from './components/CartCard';
const Cart = () => {
  const carts = useSelector(getCartSelector);
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
                  <p>$ {carts.totalPrice}</p>
                </div>
                <div className='total-item'>
                  <p>ITEM(S):</p>
                  <p>{carts.totalCart}</p>
                </div>
                <button className='proceed-checkout'>
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;
