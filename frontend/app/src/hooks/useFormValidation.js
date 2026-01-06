import { useState, useEffect } from "react";

/**
 * Custom hook for form validation
 * @param {Object} initialValues - Initial form field values
 * @param {Object} validationRules - Validation rules for each field
 * @returns {Object} Form validation state and methods
 */
function useFormValidation(initialValues, validationRules) {
  // Form field values
  const [values, setValues] = useState(initialValues);
  // Validation errors for each field
  const [errors, setErrors] = useState({});
  // Track which fields have been interacted with
  const [touched, setTouched] = useState({});
  // Overall form validity status
  const [isValid, setIsValid] = useState(false);

  /**
   * Validates a single field against its rules
   * @param {string} fieldName - Name of the field to validate
   * @param {any} value - Value to validate
   * @returns {string} Error message or empty string if valid
   */
  const validate = (fieldName, value) => {
    const rules = validationRules[fieldName];
    if (!rules) return "";

    // Check each validation rule for the field
    for (const rule of rules) {
      const error = rule.validator(value);
      if (error) return error;
    }
    return "";
  };

  /**
   * Validates all form fields
   * @returns {boolean} True if all fields are valid
   */
  const validateAll = () => {
    const newErrors = {};
    let formIsValid = true;

    // Validate each field with defined rules
    Object.keys(validationRules).forEach((fieldName) => {
      const error = validate(fieldName, values[fieldName]);
      newErrors[fieldName] = error;
      if (error) formIsValid = false;
    });

    setErrors(newErrors);
    setIsValid(formIsValid);
    return formIsValid;
  };

  /**
   * Updates a field value and validates it if already touched
   * @param {string} fieldName - Name of the field to update
   * @param {any} value - New value for the field
   */
  const setValue = (fieldName, value) => {
    setValues((prev) => ({ ...prev, [fieldName]: value }));

    // Only validate if field has been touched (to avoid showing errors immediately)
    if (touched[fieldName]) {
      const error = validate(fieldName, value);
      setErrors((prev) => ({ ...prev, [fieldName]: error }));
    }
  };

  /**
   * Marks a field as touched (user has interacted with it)
   * @param {string} fieldName - Name of the field to mark as touched
   */
  const setFieldTouched = (fieldName) => {
    setTouched((prev) => ({ ...prev, [fieldName]: true }));
  };

  // Revalidate form whenever values change
  useEffect(() => {
    validateAll();
  }, [values]);
  // ? Requires memoization for optimal performance but I don't master this yet 😅 //

  return {
    values, // Current form values
    errors, // Validation errors
    touched, // Touched field status
    isValid, // Overall form validity
    setValue, // Update single field value
    setFieldTouched, // Mark field as touched
    validateAll, // Validate entire form
    setValues, // Update multiple values at once
  };
}

export default useFormValidation;
