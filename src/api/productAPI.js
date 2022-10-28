import api from './axios';

class ProductsAPI {
  getCategories = async () => {
    const response = await api.get('/categories/');
    return response;
  };
  getProducts = async (query = {}) => {
    const response = await api.get(`/products/`, {
      params: query,
      requireToken: true,
    });
    return response;
  };
  changePage = async (url) => {
    const response = await api.get(url, {
      requireToken: true,
    });
    return response;
  };

  /* Carts API */

  getCarts = async (query = {}) => {
    const response = await api.get(`/carts/`, {
      params: query,
      requireToken: true,
    });
    return response;
  };

  addCart = (addCartBody) => {
    return api.post('/carts/add/', addCartBody, { requireToken: true });
  };

  updateCart = (newQuantity, cartId) => {
    return api.put(
      `/carts/update/${cartId}/`,
      { quantity: newQuantity === 0 ? '0' : newQuantity },
      {
        requireToken: true,
      }
    );
  };

  checkoutOrder = (checkoutOrderBody) => {
    return api.post('/orders/add/', checkoutOrderBody, { requireToken: true });
  };
}

export default new ProductsAPI();
/*  */
