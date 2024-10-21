import { RouterProvider } from "react-router-dom";
import { router, securedRouter } from "./routing";
import { CircularProgress, ThemeProvider } from "@mui/material";
import theme from "./theme";
import { useIsAuthenticated } from "./hooks/use-is-authenticated";

function App() {
  const { isAuthenticated, isLoading } = useIsAuthenticated();

  if (isLoading) return <CircularProgress size="40px" />;

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={isAuthenticated ? securedRouter : router} />
    </ThemeProvider>
  );
}

export default App;
