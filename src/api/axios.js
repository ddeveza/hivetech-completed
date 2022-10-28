import axios from 'axios';

const apiConfig = axios.create({
  baseURL: 'https://hivetechwear-backend.herokuapp.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

apiConfig.interceptors.request.use(
  (config) => {
    if (config.requireToken) {
      const users = JSON.parse(localStorage.getItem('users')) ?? null;
      if (users) {
        config.headers.authorization = users.token;
      }
    }
    return config;
  },
  (err) => console.error(err)
);

export default apiConfig;
