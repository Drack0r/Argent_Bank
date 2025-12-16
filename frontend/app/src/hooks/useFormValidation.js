import { useState, useEffect } from "react";

function useFormValidation(initialValues, validationRules) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isValid, setIsValid] = useState(false);

  // Fonction de validation
  const validate = (fieldName, value) => {
    const rules = validationRules[fieldName];
    if (!rules) return "";

    for (const rule of rules) {
      const error = rule.validator(value);
      if (error) return error;
    }
    return "";
  };

  // Valider tous les champs
  const validateAll = () => {
    const newErrors = {};
    let formIsValid = true;

    Object.keys(validationRules).forEach((fieldName) => {
      const error = validate(fieldName, values[fieldName]);
      newErrors[fieldName] = error;
      if (error) formIsValid = false;
    });

    setErrors(newErrors);
    setIsValid(formIsValid);
    return formIsValid;
  };

  // Mettre à jour une valeur
  const setValue = (fieldName, value) => {
    setValues((prev) => ({ ...prev, [fieldName]: value }));

    // Valider le champ en temps réel si déjà touché
    if (touched[fieldName]) {
      const error = validate(fieldName, value);
      setErrors((prev) => ({ ...prev, [fieldName]: error }));
    }
  };

  // Marquer un champ comme touché
  const setFieldTouched = (fieldName) => {
    setTouched((prev) => ({ ...prev, [fieldName]: true }));
  };

  // Effet pour vérifier la validité globale
  useEffect(() => {
    validateAll();
  }, [values]);

  return {
    values,
    errors,
    touched,
    isValid,
    setValue,
    setFieldTouched,
    validateAll,
    setValues,
  };
}

export default useFormValidation;
