import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthPage from "./pages/AuthPage.tsx";
import Dashboard from "./components/dashboard/Dashboard.tsx";
import CreateJob from "./components/dashboard/job/CreateJob.tsx";

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

import App from "./App.tsx";
import UserContextProvider from "./context/userContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>
);
