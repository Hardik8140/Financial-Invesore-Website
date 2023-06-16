import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const loginUsers = () => {
    setIsAuth(true);
  };
  const logoutUsers = () => {
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{ isAuth, loginUsers, logoutUsers }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
