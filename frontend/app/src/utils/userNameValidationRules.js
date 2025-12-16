const userNameValidationRules = {
  userName: [
    {
      validator: (value) => {
        if (!value || value.trim() === "") {
          return "Le nom d'utilisateur est requis";
        }
        return "";
      },
    },
    {
      validator: (value) => {
        if (value && value.length < 3) {
          return "Le nom d'utilisateur doit contenir au moins 3 caractères";
        }
        return "";
      },
    },
    {
      validator: (value) => {
        if (value && value.length > 20) {
          return "Le nom d'utilisateur ne peut pas dépasser 20 caractères";
        }
        return "";
      },
    },
    {
      validator: (value) => {
        if (value && !/^[a-zA-Z0-9_-]+$/.test(value)) {
          return "Le nom d'utilisateur ne peut contenir que des lettres, chiffres, tirets et underscores";
        }
        return "";
      },
    },
  ],
};

export default userNameValidationRules;
