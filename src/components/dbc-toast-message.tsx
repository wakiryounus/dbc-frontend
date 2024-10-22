import React from "react";
import { Alert, Snackbar, AlertColor } from "@mui/material";

interface DbcToastMessageProps {
  open: boolean;
  message: string;
  severity: AlertColor;
}
const DbcToastMessage: React.FC<DbcToastMessageProps> = ({
  open,
  message,
  severity,
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={2000}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default DbcToastMessage;
