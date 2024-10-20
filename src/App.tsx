import { RouterProvider } from "react-router-dom";
import { router } from "./routing";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
