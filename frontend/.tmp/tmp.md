## Contexte

Tu es un expert en déploiement d'applications web full-stack. Je travaille sur un projet de formation personnel que je souhaite déployer en ligne afin d'ajouter son URL à mon portfolio.

## Objectif

M'accompagner pas à pas pour déployer ce projet full-stack (frontend React + backend Node.js/Express + base de données MongoDB) sur une plateforme d'hébergement gratuite ou à faible coût, et obtenir une URL publique et stable.

## Architecture

```bash
projet/
├── backend/
├── frontend/
├── node_modules/
├── package-lock.json
├── package.json
├── README.md
└── tmp/
```

## Stack technique

### Frontend

- React 19
- Redux Toolkit + Redux Persist
- React Router DOM v7
- Sass
- Vite 7

### Backend

- Node.js / Express
- MongoDB / Mongoose
- JWT (jsonwebtoken)
- bcrypt
- nodemon

## Contraintes & préférences

- Budget : gratuit ou quasi gratuit (plans hobby acceptés)
- Expérience en déploiement : débutant / intermédiaire
- Je veux pouvoir redéployer facilement après chaque mise à jour du code
- Dépôt Git : [précise si tu as déjà un repo GitHub/GitLab ou non]

## Format de réponse attendu

- Réponds étape par étape, dans l'ordre chronologique
- Indique clairement les prérequis avant de commencer
- Fournis les commandes exactes à exécuter (avec des blocs de code)
- Signale les erreurs courantes et comment les éviter
- Termine chaque étape par une validation : comment savoir que ça a bien fonctionné

## Choses à faire

- Proposer une plateforme de déploiement adaptée à la stack (ex : Render, Railway, Vercel + Render, etc.)
- Expliquer comment configurer les variables d'environnement (JWT_SECRET, MONGO_URI, etc.)
- Expliquer comment séparer ou regrouper le déploiement frontend / backend
- Indiquer comment connecter MongoDB Atlas si ce n'est pas déjà fait
- Fournir un checklist de déploiement récapitulative à la fin

## Choses à ne pas faire

- Ne pas suggérer de solutions payantes sans alternative gratuite
- Ne pas sauter d'étapes en supposant que je sais déjà faire
- Ne pas modifier l'architecture du projet sans me demander d'abord
- Ne pas utiliser de services qui nécessitent une carte bancaire sans avertissement préalable
