import Categories from './component/Categories';
import Pagination from './component/Pagination';
import Products from './component/Products';
import './Home.css';
const Home = () => {
  return (
    <section className='main-wrapper'>
      <div className='homepage'>
        <div className='homepage-container'>
          <Categories />
          <Products />
        </div>
        <Pagination />
      </div>
    </section>
  );
};

export default Home;
