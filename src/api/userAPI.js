import api from './axios';
import { userRouteAPI } from './routeAPI';

class UsersAPI {
  signup = async (data) => {
    const response = await api.post(userRouteAPI.SIGNUP, data);
    return response;
  };
  signin = async (data) => {
    const response = await api.post(userRouteAPI.SIGNIN, data);
    return response;
  };
}

export default new UsersAPI();
