import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage.tsx";
import AuthPage from "./pages/AuthPage.tsx";
import Dashboard from "./components/dashboard/Dashboard.tsx";
import CreateJob from "./components/dashboard/job/CreateJob.tsx";
import UserContextProvider from "./context/userContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "auth",
    element: <AuthPage />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    path: "job/create",
    element: <CreateJob />,
  },
]);

function App() {
  return (
    <div>
      {/* <UserContextProvider> */}
      <RouterProvider router={router} />
      <MainPage />
      {/* </UserContextProvider> */}
    </div>
  );
}

export default App;
