import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../../features/products/asyncThunks';
import {
  categoriesSelector,
  productLoadingSelector,
} from '../../../features/products/productSelector';

import '../landing.css';
import CategoryCard from './CategoryCard';
import Empty from './Empty';

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector(categoriesSelector);
  const { loading, error } = useSelector(productLoadingSelector);

  useEffect(() => {
    dispatch(getCategories()); //fetch categories
  }, [dispatch]);

  if (error) {
    return <h1>{error}</h1>;
  }

  if (loading) {
    return <h1>loading.....</h1>;
  }

  return (
    <div className='category'>
      {categories && categories.length > 0 ? (
        categories?.map((c, index) => <CategoryCard key={index} data={c} />)
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default Categories;
