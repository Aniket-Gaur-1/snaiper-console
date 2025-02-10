import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import i18n from "./i18n"; // Ensure this initializes i18n
import { I18nextProvider } from "react-i18next"; // Import the I18nextProvider

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-dm6hbjbo0uxegwnz.us.auth0.com"
    clientId="dIBzxWuOWXw3yAf0tZUJVvc5xQWllGi5"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    {/* Wrap your app with I18nextProvider to provide i18n functionality */}
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </Auth0Provider>
);
