import { useState } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateCart } from '../../../features/cart/asynThunk';
import { getCartByIdSelector } from '../../../features/cart/cartSelector';
import { removeCart } from '../../../features/cart/cartSlice';

export default function CartCard(props) {
  const { id, image, name, description, price } = props.cart.product;
  let quantity = props.cart.quantity;
  const cart = useSelector((state) => getCartByIdSelector(state, id));
  console.log({ cart });
  const dispatch = useDispatch();
  const [openModalRemoveCart, setOpenModalRemoveCart] = useState(false);

  const increaseCart = (cartId, quantity) => {
    ++quantity;
    dispatch(updateCart({ quantity, cartId }));
  };

  const decreaseCart = (cartId, quantity) => {
    --quantity;
    if (quantity <= 0) {
      dispatch(removeCart(cartId));
    }
    dispatch(updateCart({ quantity, cartId }));
  };
  return (
    <>
      <div className='cart-card'>
        <img
          className='cart-image'
          src={`https://res.cloudinary.com/techis/${cart.product.image}`}
          alt='cart-item'
        />
        <div className='cart-content'>
          <p className='cart-title'>{name}</p>
          <p className='cart-description'>{description}</p>
        </div>
        <div className='price-content'>
          <p className='cart-price'>${price}</p>
          <div className='added-cart'>
            <span onClick={() => decreaseCart(cart.id, cart.quantity)}>
              {' '}
              -{' '}
            </span>
            <span className='margin-top-4'> {quantity} </span>
            <span
              onClick={() => increaseCart(cart.id, cart.quantity)}
              className='margin-top-4'
            >
              +
            </span>
          </div>
        </div>
      </div>
      {openModalRemoveCart
        ? ReactDOM.createPortal(
            <div
              id='custom-modal'
              className={`custom-modal ${
                openModalRemoveCart ? '' : 'modal-hide'
              }`}
            >
              <div
                id='custom-modal-close'
                onClick={() => setOpenModalRemoveCart(false)}
                className='custom-modal--bg'
              ></div>
              <div className='custom-modal--container'>
                <div className='custom-modal--content'>
                  <div className='modal-content'>
                    <strong>
                      You are about to remove this item from your cart. Are you
                      sure ?
                    </strong>
                    <div>
                      <button
                        className='custom-btn mr-1 pl-6 pr-6'
                        onClick={(e) => {
                          //dispatch(removeCart(cartId));
                          setOpenModalRemoveCart(false);
                        }}
                      >
                        Yes
                      </button>
                      <button
                        className='custom-btn ml-1 pl-6 pr-6'
                        onClick={() => setOpenModalRemoveCart(false)}
                      >
                        No
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>,
            document.getElementById('portal-root')
          )
        : ''}
    </>
  );
}
