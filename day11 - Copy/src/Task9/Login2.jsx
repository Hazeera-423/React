
import React, { createContext, useState } from 'react';
import Login4 from './Login4';

export const AuthContext = createContext();

const Auth = () => {
  const [user, setUser] = useState(null);

  const login = (username) => setUser({ username });
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <Login4 />
    </AuthContext.Provider>
  );
};

export default Auth;
