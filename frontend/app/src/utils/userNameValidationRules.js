/**
 * Username validation rules configuration object.
 * Contains an array of validation rules that check various username requirements.
 * Each rule returns an empty string if validation passes, or an error message if it fails.
 *
 * @constant {Object} userNameValidationRules
 * @property {ValidationRule[]} userName - Array of validation rules for username field
 */
const userNameValidationRules = {
  userName: [
    {
      validator: (value) => {
        // Check if the username is not empty or only whitespace
        if (!value || value.trim() === "") {
          return "Username is required";
        }
        return "";
      },
    },
    {
      validator: (value) => {
        // Check minimum length requirement (at least 3 characters)
        if (value && value.length < 3) {
          return "Username must contain at least 3 characters";
        }
        return "";
      },
    },
    {
      validator: (value) => {
        // Check maximum length limit (no more than 20 characters)
        if (value && value.length > 20) {
          return "Username cannot exceed 20 characters";
        }
        return "";
      },
    },
    {
      validator: (value) => {
        // Check for valid characters (letters, numbers, hyphens, and underscores only)
        if (value && !/^[a-zA-Z0-9_-]+$/.test(value)) {
          return "Username can only contain letters, numbers, hyphens, and underscores";
        }
        return "";
      },
    },
  ],
};

export default userNameValidationRules;
