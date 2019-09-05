import React, { useState, useEffect, useContext } from 'react';
import createAuth0Client from '@auth0/auth0-spa-js';

// executes when user successfully signs in to redirect back to home site
const DEFAULT_REDIRECT_CALLBACK = () => {
  window.history.replaceState({}, 
    document.title,
    window.location.pathname);
};

// context wraps your app, provides all children with same context
export const Auth0Context = React.createContext();

// hook useContext 
export const useAuth0 = () => useContext(Auth0Context);

export default function Auth0Provider({ 
  children, 
  onRedirectCallback = DEFAULT_REDIRECT_CALLBACK, 
  ...initOptions }) {

  // hooks to set state
  const [isAuthenticated, updateIsAuthenticated] = useState(false);
  const [user, setUser] = useState();
  const [auth0Client, setAuth0Client] = useState();
  const [loading, updateLoading] = useState(true);

  // useEffect is hook for componentDidMount + componentDidUpdate
  useEffect(() => {
    // make into a function in order to use async
    const initAuth0 = async() => {
      const auth0 = await createAuth0Client(initOptions);
      setAuth0Client(auth0);

      if(window.location.search.includes('code=')) {
        const { appState } = await auth0.handleRedirectCallback();
        onRedirectCallback(appState);
      }

      const isAuthenticated = await auth0.isAuthenticated();
      updateIsAuthenticated(isAuthenticated);

      if(isAuthenticated) {
        const user = await auth0.getUser();
        setUser(user);
      }

      updateLoading(false);
    };

    initAuth0();
  }, []);

  return (
    <Auth0Context.Provider
      value={{
        isAuthenticated,
        user,
        auth0Client,
        loading
      }}>
      {children}
    </Auth0Context.Provider>
  );
}
