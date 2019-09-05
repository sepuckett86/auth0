import React from 'react';
import { useAuth0 } from '../Auth0Provider';
import AllDogs from '../containers/AllDogs';

export default function App() {
  const { isAuthenticated, auth0Client } = useAuth0();
  const login = () => auth0Client.loginWithRedirect();
  const logout = () => auth0Client.logout();

  return (
  <>
    {!isAuthenticated && <button onClick={login}>Login</button>}
    {isAuthenticated && <button onClick={logout}>Logout</button>}
    <AllDogs/>
  </>);
}


