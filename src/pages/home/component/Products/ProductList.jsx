import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addCart,
  getCarts,
  updateCart,
} from '../../../../features/cart/asynThunk';
import { getCartSelector } from '../../../../features/cart/cartSelector';
import { removeCart } from '../../../../features/cart/cartSlice';
import ProductCard from './ProductCard';

export default function ProductList(props) {
  const { products, labelType } = props;
  const dispatch = useDispatch();
  const carts = useSelector(getCartSelector);

  useEffect(() => {
    dispatch(getCarts());
  }, [dispatch]);

  const clickAddCart = (id) => {
    dispatch(addCart({ quantity: 1, product: id }));
  };
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
    <div className='product-container'>
      {products.map((p) => {
        const { quantity, id } = carts?.find(
          (cart) => cart.product.id === p.id
        ) ?? { quantity: 0, id: '' };
        return (
          <ProductCard
            key={p.id}
            products={p}
            quantity={quantity}
            clickAddCart={() => clickAddCart(p.id)}
            increaseCart={() => increaseCart(id, quantity)}
            decreaseCart={() => decreaseCart(id, quantity)}
          />
        );
      })}
    </div>
  );
}
