import React from "react";
import { useStyles } from "../auth.styles";
import { Paper, useMediaQuery, useTheme } from "@mui/material";
import DbcTypography from "../../../components/dbc-typography";
import DbcTextField from "../../../components/dbc-text-field";
import DbcButton from "../../../components/dbc-button";
import DbcLink from "../../../components/dbc-link";
import { AuthProps } from "../index";

const Register: React.FC<AuthProps> = ({ toggleView }) => {
  const classes = useStyles();
  const theme = useTheme();

  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div className={classes.root}>
      <Paper elevation={isMediumScreen ? 3 : 0} className={classes.paperRoot}>
        <div className={classes.authContainer}>
          <DbcTypography variant="h4">Sign Up</DbcTypography>
          <DbcTextField placeholder="Username" />
          <DbcTextField placeholder="Email" />
          <DbcTextField placeholder="Password" type="password" />
          <DbcButton>Sign Up</DbcButton>
          {!isLargeScreen ? (
            <div className={classes.signUp}>
              <DbcTypography>Already have account?</DbcTypography>
              <DbcLink onClick={toggleView}>Sign In</DbcLink>
            </div>
          ) : null}
        </div>
        {isLargeScreen ? (
          <div className={classes.messageRoot}>
            <div className={classes.messageContainer}>
              <DbcTypography className={classes.message} variant="h4" light>
                Create Your Account
              </DbcTypography>
              <DbcTypography light>Already have account?</DbcTypography>
              <DbcLink light variant="body2" onClick={toggleView}>
                Sign In
              </DbcLink>
            </div>
          </div>
        ) : null}
      </Paper>
    </div>
  );
};

export default Register;
