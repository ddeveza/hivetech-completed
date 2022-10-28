import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../component';
import './Layouts.css';

const PublicLayout = () => {
  return (
    <div className='public-layout'>
      <div>
        <Header />
      </div>
      <div className='public-main'>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default PublicLayout;
