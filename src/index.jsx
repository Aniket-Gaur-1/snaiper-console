import React from "react";

import { Auth0Provider } from "@auth0/auth0-react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-dm6hbjbo0uxegwnz.us.auth0.com"
    clientId="dIBzxWuOWXw3yAf0tZUJVvc5xQWllGi5"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);
