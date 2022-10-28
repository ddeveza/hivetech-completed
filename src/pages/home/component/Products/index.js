import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../../features/products/asyncThunks';
import {
  productLoadingSelector,
  productsSelector,
} from '../../../../features/products/productSelector';
import Empty from '../Empty';
import ProductList from './ProductList';

export default function Products() {
  const products = useSelector(productsSelector);

  const isEmptyProduct = products && products.length > 0 ? false : true;
  const loading = useSelector(productLoadingSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (loading.loading) {
    return <h1>Products Loading.....</h1>;
  }

  return (
    <div className='homepage-content'>
      <div className='homepage-title'>Product List</div>
      {!isEmptyProduct ? (
        <ProductList products={products} carts={[]} />
      ) : (
        <Empty message='Products are unavailable.' />
      )}
    </div>
  );
}
