import React from "react";
import { Paper, useMediaQuery, useTheme } from "@mui/material";
import { useStyles } from "./login.styles";
import DbcButton from "../../../components/dbc-button";
import DbcTextField from "../../../components/dbc-text-field";
import DbcTypography from "../../../components/dbc-typography";

const Login = () => {
  const classes = useStyles();
  const theme = useTheme();

  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div className={classes.root}>
      <Paper elevation={isMediumScreen ? 3 : 0} className={classes.paperRoot}>
        <div className={classes.loginContainer}>
          <DbcTypography variant="h4">Sign In</DbcTypography>
          <DbcTextField placeholder="Username" />
          <DbcTextField placeholder="Password" />
          <DbcButton>Sign In</DbcButton>
          {!isLargeScreen ? (
            <div className={classes.signUp}>
              <DbcTypography>Don't have account?</DbcTypography>
              <DbcTypography>Sign Up</DbcTypography>
            </div>
          ) : null}
        </div>
        {isLargeScreen ? (
          <div className={classes.welcomeMessageContainer}>
            <div className={classes.welcomeMessage}>
              <DbcTypography className={classes.message} variant="h4" light>
                Welcome to login
              </DbcTypography>
              <DbcTypography light>Don't have account?</DbcTypography>
              <DbcTypography light>Sign Up</DbcTypography>
            </div>
          </div>
        ) : null}
      </Paper>
    </div>
  );
};

export default Login;
