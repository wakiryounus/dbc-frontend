import React, { useState } from "react";
import { Paper, useMediaQuery, useTheme } from "@mui/material";
import { useStyles } from "../auth.styles";
import DbcButton from "../../../components/dbc-button";
import DbcTextField from "../../../components/dbc-text-field";
import DbcTypography from "../../../components/dbc-typography";
import DbcLink from "../../../components/dbc-link";
import { AuthProps } from "../index";
import { loginUser } from "../../../api-client/auth-request";
const Login: React.FC<AuthProps> = ({ toggleView }) => {
  const [data, setData] = useState({ username: "", password: "" });

  const classes = useStyles();
  const theme = useTheme();

  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.up("sm"));

  const handleSignIn = () => {
    console.log(data);
    loginUser(data)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <div className={classes.root}>
      <Paper elevation={isMediumScreen ? 3 : 0} className={classes.paperRoot}>
        <div className={classes.authContainer}>
          <DbcTypography variant="h4">Sign In</DbcTypography>
          <DbcTextField
            placeholder="Username"
            name="username"
            onChange={handleDataChange}
          />
          <DbcTextField
            placeholder="Password"
            name="password"
            onChange={handleDataChange}
          />
          <DbcButton onClick={handleSignIn}>Sign In</DbcButton>
          {!isLargeScreen ? (
            <div className={classes.signUp}>
              <DbcTypography>Don't have account?</DbcTypography>
              <DbcLink onClick={toggleView}>Sign Up</DbcLink>
            </div>
          ) : null}
        </div>
        {isLargeScreen ? (
          <div className={classes.messageRoot}>
            <div className={classes.messageContainer}>
              <DbcTypography className={classes.message} variant="h4" light>
                Welcome to login
              </DbcTypography>
              <DbcTypography light>Don't have account?</DbcTypography>
              <DbcLink light variant="body2" onClick={toggleView}>
                Sign Up
              </DbcLink>
            </div>
          </div>
        ) : null}
      </Paper>
    </div>
  );
};

export default Login;
