import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/home";
import { Routes } from "./routes/Routes";
import AuthPage from "../pages/auth";

export const router = createBrowserRouter([
  { path: Routes.Home, element: <AuthPage /> },
  { path: Routes.Auth, element: <Homepage /> },
]);
