# Architecture du projet

## Architecture front-end

Vite + React + Sass

```bash
.
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── public
│   └── images
│       ├── argentBankLogo.png
│       ├── bank-tree.webp
│       ├── icon-chat.png
│       ├── icon-money.png
│       └── icon-security.png
├── README.md
├── src
│   ├── components
│   │   ├── layout
│   │   │   ├── Footer
│   │   │   │   └── Footer.jsx
│   │   │   ├── Header
│   │   │   │   └── Header.jsx
│   │   │   ├── index.js
│   │   │   ├── Layout
│   │   │   │   └── Layout.jsx
│   │   │   └── ProtectedRoute
│   │   │       └── ProtectedRoute.jsx
│   │   ├── sections
│   │   │   ├── Features
│   │   │   │   └── Features.jsx
│   │   │   ├── Hero
│   │   │   │   └── Hero.jsx
│   │   │   ├── index.js
│   │   │   └── SignInForm
│   │   │       └── SignInForm.jsx
│   │   └── ui
│   │       ├── AccountCard
│   │       │   └── AccountCard.jsx
│   │       ├── AuthButton
│   │       │   └── AuthButton.jsx
│   │       ├── Button
│   │       │   └── Button.jsx
│   │       ├── Checkbox
│   │       │   └── Checkbox.jsx
│   │       ├── FeatureItem
│   │       │   └── FeatureItem.jsx
│   │       ├── index.js
│   │       ├── Input
│   │       │   └── Input.jsx
│   │       └── Logo
│   │           └── Logo.jsx
│   ├── constants
│   │   └── api-endpoints.js
│   ├── hooks
│   │   ├── index.js
│   │   ├── useFormValidation.js
│   │   ├── usePageClass.js
│   │   └── usePageMeta.js
│   ├── main.jsx
│   ├── pages
│   │   ├── HomePage
│   │   │   └── HomePage.jsx
│   │   ├── index.js
│   │   ├── NotFoundPage
│   │   │   └── NotFound.jsx
│   │   ├── SignInPage
│   │   │   └── SignInPage.jsx
│   │   └── UserPage
│   │       └── UserPage.jsx
│   ├── Router.jsx
│   ├── services
│   │   └── api.js
│   ├── slices
│   │   └── authSlice.js
│   ├── store.js
│   ├── styles
│   │   ├── sass
│   │   │   ├── abstracts
│   │   │   │   ├── _mixins.scss
│   │   │   │   └── _variables.scss
│   │   │   ├── base
│   │   │   │   ├── _global.scss
│   │   │   │   ├── _reset.scss
│   │   │   │   └── _typography.scss
│   │   │   ├── components
│   │   │   │   ├── _account-card.scss
│   │   │   │   ├── _button.scss
│   │   │   │   ├── _features.scss
│   │   │   │   ├── _hero.scss
│   │   │   │   ├── _modal.scss
│   │   │   │   └── _sign-in-form.scss
│   │   │   ├── layout
│   │   │   │   ├── _footer.scss
│   │   │   │   └── _header.scss
│   │   │   ├── main.scss
│   │   │   ├── pages
│   │   │   │   └── _not-found-page.scss
│   │   │   ├── themes
│   │   │   └── vendors
│   │   └── style.css
│   └── utils
│       ├── getCurrentYear.js
│       ├── index.js
│       └── userNameValidationRules.js
└── vite.config.js
```

## Architecture back-end

### Runtime & Serveur

Node.js — environnement d'exécution
Express.js ^4.17.1 — framework web

### Base de données

MongoDB via Mongoose ^5.9.21 — ODM pour la base de données

### Authentification & Sécurité

JWT (jsonwebtoken) ^8.5.1 — gestion des tokens
bcrypt ^5.1.1 — hashage des mots de passe
cors ^2.8.5 — gestion des origines croisées

### Documentation API

Swagger UI Express ^4.1.4 — interface de documentation
YAML JS ^0.3.0 — parsing des fichiers YAML (Swagger)

### Outils de développement

nodemon ^2.0.4 — rechargement automatique en dev
dotenv ^8.2.0 — gestion des variables d'environnement
axios ^0.19.2 — client HTTP (utilisé pour les scripts)

```bash
.
├── package-lock.json
├── package.json
├── README.md
├── server
│   ├── controllers
│   │   └── userController.js
│   ├── database
│   │   ├── connection.js
│   │   └── models
│   │       └── userModel.js
│   ├── middleware
│   │   └── tokenValidation.js
│   ├── routes
│   │   └── userRoutes.js
│   ├── scripts
│   │   └── populateDatabase.js
│   ├── server.js
│   └── services
│       └── userService.js
└── swagger.yaml
```
