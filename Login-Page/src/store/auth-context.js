import React, { useState, useEffect } from "react";

export const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogIn: (email, password) => {},
});

export const AuthContextProvider = function (props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logoutHandler = function () {
    localStorage.setItem("isLoggedIn", "0");
    setIsLoggedIn(false);
  };

  const loginHandler = function () {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };
  useEffect(function () {
    const loggedInInformation = localStorage.getItem("isLoggedIn");

    if (loggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{ isLoggedIn, onLogout: logoutHandler, onLogIn: loginHandler }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
