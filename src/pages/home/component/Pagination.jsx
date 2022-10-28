import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import {
  changePage,
  getProducts,
} from '../../../features/products/asyncThunks';
import {
  currPageSelector,
  nextPageSelector,
  prevPageSelector,
  productLoadingSelector,
  querySelector,
  totalPageSelector,
} from '../../../features/products/productSelector';

const Pagination = () => {
  const totalPage = useSelector(totalPageSelector);
  const page = useSelector(currPageSelector);
  const { loading, success } = useSelector(productLoadingSelector);
  const nextPage = useSelector(nextPageSelector);
  const prevPage = useSelector(prevPageSelector);
  const query = useSelector(querySelector);
  const dispatch = useDispatch();

  if (loading) {
    return;
  }

  const onPageChange = ({ selected }) => {
    if (selected + 1 > page && selected + 1 === page + 1) {
      /* next */
      console.log('go to next page', selected + 1);
      dispatch(changePage(nextPage));
    } else if (selected + 1 < page && selected + 1 === page + 1) {
      /* prev */
      dispatch(changePage(prevPage));
      console.log('go to next page', selected + 1);
    } else {
      dispatch(getProducts({ ...query, page: selected + 1 }));
    }
  };

  return (
    <div className='product-pagination'>
      {page && (
        <ReactPaginate
          breakLabel='...'
          onPageChange={onPageChange}
          forcePage={page - 1}
          pageRangeDisplayed={3}
          pageCount={totalPage}
          renderOnZeroPageCount={null}
          containerClassName='pagination-container'
          pageClassName='page-item'
          breakClassName='page-item'
          pageLinkClassName='page-link'
          breakLinkClassName='page-link'
          previousClassName='d-none'
          nextClassName='d-none'
          activeClassName='page-active'
        />
      )}
    </div>
  );
};

export default Pagination;
