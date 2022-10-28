import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { checkoutCart } from '../../features/cart/asynThunk';
import {
  getCartSelector,
  totalCartItemsSelector,
} from '../../features/cart/cartSelector';
import './Checkout.css';
import OrderListCard from './components/OrderListCard';
const Checkout = () => {
  const { name } = JSON.parse(localStorage.getItem('users')) ?? { name: '' };

  const [isLoading, setIsLoading] = useState(false);
  const carts = useSelector(getCartSelector);
  const { totalPrice, totalCartItems } = useSelector(totalCartItemsSelector);
  const dispatch = useDispatch();
  const isEmpty = carts && carts.length > 0 ? false : true;
  const order_items = carts.map((cart) => {
    return {
      qty: cart.quantity,
      product: cart.product.id,
    };
  });
  const initialValues = {
    customer_name: name,
    customer_phone: '',
    address: '',
    pin_code: '',
    building_type: '',
    city: '',
    state: '',
  };

  const [values, setValues] = useState(initialValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const onSubmitCheckout = () => {
    setIsLoading(true);
    const cartData = {
      ...values,
      total_price: totalPrice,
      total_qty: totalCartItems,
      order_items,
    };

    dispatch(checkoutCart(cartData));
    Navigate();
    setIsLoading(false);
  };

  return (
    <section className='main-wrapper'>
      <div className='checkout'>
        <p className='title'>My Items Detail</p>
        {isEmpty ? (
          <>
            <p>
              Cart is empty. Please go to shopping in order to add product to
              cart.
            </p>
            <Link to={'/home'} className='custom-btn'>
              Go to Shopping
            </Link>
          </>
        ) : (
          <>
            <p>Please check your items and confirm it</p>
            <div className='order-detail'>
              {carts && carts.length > 0 ? (
                carts.map((cart) => (
                  <OrderListCard key={cart.id} orderItem={cart} />
                ))
              ) : (
                <h1>Empty</h1>
              )}
            </div>
            <hr className='checkout-line' />
            <div className='total-order'>
              <p>Total Price</p>
              <p>{totalCartItems}</p>
              <p>${totalPrice.toFixed(2)}</p>
            </div>
            <div className='checkout-form-container'>
              <label htmlFor='fullName'>Full Name</label>
              <span className='required-field'>*</span>
              <input
                onChange={handleInputChange}
                value={values.customer_name}
                name='customer_name'
                className='custom-input'
                type='text'
                placeholder="Enter Recipient's name"
              />

              <label htmlFor='email'>Phone Number</label>
              <span className='required-field'>*</span>
              <input
                onChange={handleInputChange}
                value={values.customer_phone}
                name='customer_phone'
                className='custom-input'
                type='text'
                placeholder='Enter Phone Number'
              />

              <label htmlFor='email'>Street address or P.O. Box</label>
              <span className='required-field'>*</span>
              <input
                onChange={handleInputChange}
                value={values.address}
                name='address'
                className='custom-input'
                type='text'
                placeholder='Enter Street address or P.O. Box'
              />
              <label htmlFor='email'>PIN Code</label>
              <span className='required-field'>*</span>
              <input
                onChange={handleInputChange}
                value={values.pin_code}
                name='pin_code'
                className='custom-input'
                type='text'
                placeholder='Enter PIN Code'
              />
              <label htmlFor='email'>
                Apt, suite, unit, building, floor, etc.
              </label>
              <input
                onChange={handleInputChange}
                value={values.building_type}
                name='building_type'
                className='custom-input'
                type='text'
                placeholder='Enter Apt, suite, unit, building, floor, etc.'
              />

              <label htmlFor='email'>City</label>
              <span className='required-field'>*</span>
              <input
                onChange={handleInputChange}
                value={values.city}
                name='city'
                className='custom-input'
                type='text'
                placeholder='Enter City'
              />
              <label htmlFor='email'>State</label>
              <span className='required-field'>*</span>
              <input
                onChange={handleInputChange}
                value={values.state}
                name='state'
                className='custom-input'
                type='text'
                placeholder='Enter State'
              />
              <button onClick={onSubmitCheckout} className='custom-btn'>
                {isLoading ? 'Submitting the order...' : 'Confirm and submit'}
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Checkout;
