import { Outlet } from "react-router-dom";
import UserContextProvider from "./context/userContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/header/Header";

const MainLayout = () => {
  return (
    <>
      <nav>
        <Header />
      </nav>
      <main>
        <UserContextProvider>
          <ToastContainer />
          <Outlet />
        </UserContextProvider>
      </main>
    </>
  );
};

export default MainLayout;
