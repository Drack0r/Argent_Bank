import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAndFetchProfile, clearError } from "../../../slices/authSlice";
import { Input, Checkbox, Button } from "../../ui";

/**
 * SignInForm component - handles user authentication with email and password
 * Manages form state, validation, and redirects to user page upon successful login
 * @returns {JSX.Element} A form with email/password inputs and submit functionality
 */
function SignInForm() {
  // Redux hooks for dispatching actions and accessing state
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Extract loading state and error from auth slice
  const { isLoading, error } = useSelector((state) => state.auth);

  // Local state for form inputs
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Clear any existing errors when component mounts
  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear any existing errors before attempting login
    dispatch(clearError());

    // Dispatch login action with form data
    const result = await dispatch(
      loginAndFetchProfile({
        email: formData.email,
        password: formData.password,
      })
    );

    // Navigate to user page if login is successful
    if (loginAndFetchProfile.fulfilled.match(result)) {
      navigate("/user");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Email input field */}
      <Input
        inputType={"email"}
        id={"email"}
        label={"Username"}
        className={"input-wrapper"}
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />

      {/* Password input field */}
      <Input
        inputType={"password"}
        id={"password"}
        label={"Password"}
        className={"input-wrapper"}
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />

      {/* Remember me checkbox */}
      <Checkbox
        id={"remember-me"}
        className={"input-remember"}
        label={"Remember me"}
      />

      {/* Submit button with loading state */}
      <Button
        isButton={true}
        buttonType={"submit"}
        className={"sign-in-button"}
        disabled={isLoading}
      >
        {isLoading ? "Connexion..." : "Sign In"}
      </Button>

      {/* Display error message if any */}
      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default SignInForm;
