import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Signup from "./Screen/Signup.jsx";
import Signin from "./Screen/Signin.jsx";
import Home from "./Screen/Home.jsx";
import Dashboard from "./Screen/Dashboard.jsx";
import Profile from "./Screen/Profile.jsx";
import Userallblogs from "./Screen/Userallblogs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/all",
        element: <Userallblogs />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
