import { PageNoAccess } from './component';
import PrivateLayout from './layouts/PrivateLayout';

const PrivateRoute = () => {
  const { token } = JSON.parse(localStorage.getItem('users')) ?? { token: '' };

  if (!token) {
    return <PageNoAccess />;
  }

  return <PrivateLayout />;
};

export default PrivateRoute;
