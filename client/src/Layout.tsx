import { Outlet } from "react-router-dom";
import UserContextProvider from "./context/userContext";
const MainLayout = () => {
  return (
    <main>
      <UserContextProvider>
        <Outlet />
      </UserContextProvider>
    </main>
  );
};

export default MainLayout;
