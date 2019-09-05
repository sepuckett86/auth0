import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Auth0Provider from './Auth0Provider';

render(
  <Auth0Provider
    domain="dev-c8-ngsk7.auth0.com"
    client_id="gWIqch3T0n9HeCCqEy4clbnJCK0EHr4o"
    redirect_uri="http://localhost:7890">
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
