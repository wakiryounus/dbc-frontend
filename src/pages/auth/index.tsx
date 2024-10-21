import React, { useCallback, useState } from "react";
import Login from "./login";
import Register from "./register";

export interface AuthProps {
  toggleView: () => void;
}

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const toggleView = useCallback(() => {
    setIsLogin((prev) => !prev);
  }, []);

  return isLogin ? (
    <Login toggleView={toggleView} />
  ) : (
    <Register toggleView={toggleView} />
  );
};

export default AuthPage;
