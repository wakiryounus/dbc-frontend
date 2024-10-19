import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/home";
import { Routes } from "./routes/Routes";
import AuthPage from "../pages/auth";

export const router = createBrowserRouter([
  { path: Routes.Home, element: <Homepage /> },
  { path: Routes.Auth, element: <AuthPage /> },
]);
