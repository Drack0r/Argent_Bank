import API_ENDPOINTS from "../constants/api-endpoints";

/**
 * Authenticates a user with email and password
 * @param {string} email - User's email address
 * @param {string} password - User's password
 * @returns {Promise<Object>} User authentication data
 * @throws {Error} Authentication or network errors
 */
export async function loginUser(email, password) {
  try {
    const response = await fetch(API_ENDPOINTS.AUTH.LOGIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    // Handle authentication errors
    if (!response.ok) {
      if (response.status === 400 || response.status === 401) {
        throw new Error("Invalid email or password");
      }

      throw new Error(data.message || "Connection error");
    }

    return data.body;
  } catch (error) {
    throw new Error(error.message);
  }
}

/**
 * Fetches user profile data using authentication token
 * @param {string} token - JWT authentication token
 * @returns {Promise<Object>} User profile data
 * @throws {Error} Profile fetch or network errors
 */
export async function fetchUserProfile(token) {
  try {
    const response = await fetch(API_ENDPOINTS.USER.PROFILE, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Fetch user profile failed");
    }

    return data.body;
  } catch (error) {
    throw new Error(error.message);
  }
}

/**
 * Updates user profile information
 * @param {string} token - JWT authentication token
 * @param {Object} userData - User data to update
 * @returns {Promise<Object>} Updated user profile data
 * @throws {Error} Update or network errors
 */
export async function updateUserProfile(token, userData) {
  try {
    const response = await fetch(API_ENDPOINTS.USER.UPDATE_PROFILE, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Update profile failed");
    }

    return data.body;
  } catch (error) {
    throw new Error(error.message);
  }
}
