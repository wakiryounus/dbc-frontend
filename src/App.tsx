import { RouterProvider } from "react-router-dom";
import { router, securedRouter } from "./routing";
import { Box, CircularProgress, ThemeProvider } from "@mui/material";
import theme from "./theme";
import { useIsAuthentication } from "./hooks/use-is-authentication";

function App() {
  const { isAuthenticated, isLoading } = useIsAuthentication();

  if (isLoading)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress size="40px" color="secondary" />
      </Box>
    );

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={isAuthenticated ? securedRouter : router} />
    </ThemeProvider>
  );
}

export default App;
