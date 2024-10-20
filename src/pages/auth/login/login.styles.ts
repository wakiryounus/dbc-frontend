import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.palette.primary.main,
    },
    paperRoot: {
      flex: 1,
      display: "flex",
      borderRadius: theme.spacing(1),
      [theme.breakpoints.up("sm")]: {
        flex: 0.5,
      },
      [theme.breakpoints.up("md")]: {
        flex: 0.8,
      },
      [theme.breakpoints.up("lg")]: {
        flex: 0.5,
      },
    },
    welcomeMessageContainer: {
      flex: 1,
      background: theme.palette.secondary.main,
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    welcomeMessage: {
      width: "90%",
    },
    message: {
      fontWeight: `${theme.typography.fontWeightBold} !important`,
      marginBottom: `${theme.spacing(2)} !important`,
    },
    loginContainer: {
      backgroundColor: theme.palette.primary.main,
      display: "flex",
      flexDirection: "column",
      rowGap: theme.spacing(2),
      padding: theme.spacing(3),
      flex: 1,
    },
    signUp: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  }),
);
