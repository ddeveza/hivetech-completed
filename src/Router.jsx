import { Route, Routes } from 'react-router-dom';
import { PageNotFound } from './component';
import PublicLayout from './layouts/PublicLayout';
import Cart from './pages/cart/Cart';
import Checkout from './pages/checkout/Checkout';
import Home from './pages/home/Home';
import LandingPage from './pages/landingpage/LandingPage';
import Signin from './pages/signin/Signin';
import Signup from './pages/signup/Signup';
import Thankyou from './pages/thankyou/Thankyou';
import PrivateRoute from './PrivateRoute';

export const Router = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path='/' element={<PublicLayout />}>
        <Route index element={<LandingPage />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
      </Route>

      {/* Private Routes */}
      <Route path='/' element={<PrivateRoute />}>
        <Route path='home' element={<Home />}>
          {/* 
                home/men
                home/women
                home
           */}
        </Route>
        <Route path='cart' element={<Cart />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='thankyou' element={<Thankyou />} />
      </Route>

      <Route path='*' element={<PageNotFound />} />
      {/*   <Route
        path='/home'
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path='/cart'
        element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        }
      />
      <Route
        path='/checkout'
        element={
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        }
      />
      <Route
        path='/thankyou'
        element={
          <PrivateRoute>
            <Thankyou />
          </PrivateRoute>
        }
      /> */}
    </Routes>
  );
};
