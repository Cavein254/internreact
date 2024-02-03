import { Outlet } from "react-router-dom";
import UserContextProvider from "./context/userContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = () => {
  return (
    <main>
      <UserContextProvider>
        <ToastContainer />
        <Outlet />
      </UserContextProvider>
    </main>
  );
};

export default MainLayout;
