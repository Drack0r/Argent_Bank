import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  loginAndFetchProfile,
  clearError,
  logout,
} from "../../../slices/authSlice";
import { Input, Checkbox, Button } from "../../ui";

function SignInForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, error, isAuthenticated, user } = useSelector(
    (state) => state.auth
  );

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Nettoyer l'erreur au montage du composant (rechargement de page)
  useEffect(() => {
    dispatch(clearError());
  }, []);

  /*
  // Auto-clear error après 5 secondes
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        dispatch(clearError());
      }, 5000);

      // Cleanup
      return () => clearTimeout(timer);
    }
  }, [error, dispatch]);
  */

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Nettoyer les erreur précédentes
    dispatch(clearError());

    // Dispatcher l'action de connexion
    const result = await dispatch(
      loginAndFetchProfile({
        email: formData.email,
        password: formData.password,
      })
    );

    // Vérifier le résultat
    if (loginAndFetchProfile.fulfilled.match(result)) {
      navigate("/user");
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        inputType={"email"}
        id={"username"}
        label={"Username"}
        className={"input-wrapper"}
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />

      <Input
        inputType={"password"}
        id={"password"}
        label={"Password"}
        className={"input-wrapper"}
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />

      <Checkbox
        id={"remember-me"}
        className={"input-remember"}
        label={"Remember me"}
      />

      <Button
        isButton={true}
        buttonType={"submit"}
        className={"sign-in-button"}
        // href={"/user"}
        // children={"Sign In"}
        disabled={isLoading}
      >
        {isLoading ? "Connexion..." : "Sign In"}
      </Button>

      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default SignInForm;
