import { useLocation } from 'react-router-dom';
import Cart from '../component/Header/Cart';
import Search from '../component/Header/Search';
import SignIn from '../component/Header/SignIn';
import SignOutLink from '../component/Header/Signout';
import Signup from '../component/Header/Singup';

export const useComponentLink = () => {
  const { pathname } = useLocation();

  let component = (
    <>
      <SignIn />
      <Signup />
    </>
  );

  let homeComponent = (
    <>
      <Search />
      <Cart />
      <SignOutLink />
    </>
  );

  switch (pathname) {
    case '/signin':
      component = <Signup />;
      break;
    case '/signup':
      component = <SignIn />;
      break;
    case '/home':
      component = homeComponent;
      break;
    case '/cart':
      component = (
        <>
          <Cart />
          <SignOutLink />
        </>
      );
      break;
    default:
  }

  return component;
};
