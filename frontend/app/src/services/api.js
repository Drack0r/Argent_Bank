import API_ENDPOINTS from "../constants/api-endpoints";

// Connexion utilisateur
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

    if (!response.ok) {
      if (response.status === 400 || response.status === 401) {
        throw new Error("Email ou mot de passe invalide");
      }

      throw new Error(data.message || "Erreur de connexion");
    }

    return data.body;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }

    throw new Error("Network error: " + error.message);
  }
}

// Récupérer les données utilisateur
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
    if (error instanceof Error) {
      throw error;
    }

    throw new Error("Network error: " + error.message);
  }
}
