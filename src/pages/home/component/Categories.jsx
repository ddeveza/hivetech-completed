import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCategories,
  getProducts,
} from '../../../features/products/asyncThunks';
import {
  activeCategorySelector,
  categoriesSelector,
} from '../../../features/products/productSelector';
import {
  saveQuery,
  setActiveCategories,
} from '../../../features/products/productsSlice';

const Categories = () => {
  const categories = useSelector(categoriesSelector);
  const activeCategory = useSelector(activeCategorySelector);
  const dispatch = useDispatch();

  const isEmptyCategory = categories && categories.length > 0 ? false : true;
  const [type, setType] = useState('');

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(saveQuery({ type, category_id: activeCategory }));
    dispatch(getProducts({ type, category_id: activeCategory }));
    return;
  }, [dispatch, type, activeCategory]);

  return (
    <div className='homepage-content'>
      <select
        defaultValue={type}
        onChange={(e) => setType(e.target.value)}
        className='gender-select'
      >
        <option value=''>FILTER BY GENDER</option>
        <option value='male'>Men's</option>
        <option value='female'>Women's</option>
      </select>

      <div className='right-border'>
        <p className='homepage-category-text'>Category Lists</p>
        <div className='category-list'>
          <ul>
            <li
              className={!activeCategory ? 'active' : ''}
              onClick={() => dispatch(setActiveCategories(''))}
            >
              All
            </li>
            {!isEmptyCategory &&
              categories.map((c) => (
                <li
                  className={activeCategory === c.id ? 'active' : ''}
                  onClick={() => dispatch(setActiveCategories(c.id))}
                  key={c.id}
                  to='#'
                >
                  {c.name}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Categories;
