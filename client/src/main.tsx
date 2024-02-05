import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthPage from "./pages/AuthPage.tsx";
import Dashboard from "./components/dashboard/Dashboard.tsx";
import CreateJob from "./components/dashboard/job/CreateJob.tsx";
import App from "./App.tsx";
import MainLayout from "./Layout.tsx";
import JobItem from "./pages/jobs/JobItem.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
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
        path: "job/new",
        element: <CreateJob />,
      },
      {
        path: "job/:id",
        element: <JobItem />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
