const BASE_URL = "http://localhost:3001/api/v1";

/**
 * API endpoints configuration object containing all API routes used in the application.
 * @constant {Object} API_ENDPOINTS
 * @property {Object} AUTH - Authentication related endpoints
 * @property {string} AUTH.LOGIN - Endpoint for user login authentication
 * @property {string} AUTH.SIGNUP - Endpoint for user registration/signup
 * @property {Object} USER - User management related endpoints
 * @property {string} USER.PROFILE - Endpoint for retrieving user profile data (GET)
 * @property {string} USER.UPDATE_PROFILE - Endpoint for updating user profile information (PUT)
 */
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: `${BASE_URL}/user/login`,
    SIGNUP: `${BASE_URL}/user/signup`,
  },
  USER: {
    PROFILE: `${BASE_URL}/user/profile`, // GET expected
    UPDATE_PROFILE: `${BASE_URL}/user/profile`, // PUT expected
  },
};

export default API_ENDPOINTS;
