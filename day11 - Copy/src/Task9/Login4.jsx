import React, { useContext } from 'react';
import { AuthContext } from './Login2';

const Profile = () => {
  const { user } = useContext(AuthContext);
  return <h1>{user ? `Welcome, ${user.username}` : 'Not logged in'}</h1>;
};

const LoginButton = () => {
  const { login } = useContext(AuthContext);
  return <button onClick={() => login('Coder')}>Login</button>;
};

const LogoutButton = () => {
  const { logout } = useContext(AuthContext);
  return <button onClick={logout}>Logout</button>;
};

const Login4 = () => {
  return (
    <>
      <Profile />
      <LoginButton />
      <LogoutButton />
    </>
  );
};

export default Login4;
