import React from "react";
import UserContextProvider from "./context/userContext.tsx";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <UserContextProvider>
      <Outlet />
    </UserContextProvider>
  );
};

export default Layout;
