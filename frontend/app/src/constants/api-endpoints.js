const BASE_URL = "http://localhost:3001/api/v1";

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: `${BASE_URL}/user/login`,
    SIGNUP: `${BASE_URL}/user/signup`,
  },
  USER: {
    PROFILE: `${BASE_URL}/user/profile`,
  },
};

export default API_ENDPOINTS;
