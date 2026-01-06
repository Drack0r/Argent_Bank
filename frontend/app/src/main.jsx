/**
 * Main entry point of the React application.
 *
 * This file sets up the root component with all necessary providers and wrappers:
 * - Redux store provider for state management
 * - Redux Persist gate for state persistence
 * - Browser router for client-side routing
 * - React Strict Mode for development checks
 *
 * The application is rendered into the DOM element with id "root".
 *
 * @requires react - For StrictMode and React functionality
 * @requires react-dom/client - For createRoot API
 * @requires react-redux - For Redux store integration
 * @requires redux-persist/integration/react - For state persistence
 * @requires react-router-dom - For client-side routing
 *
 * @see {@link ./Router.jsx} - Main router component
 * @see {@link ./store.js} - Redux store configuration
 * @see {@link ./styles/sass/main.scss} - Main stylesheet
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/sass/main.scss";
import Router from "./Router.jsx";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store.js";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
