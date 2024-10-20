import React from "react";
import { createStyles, makeStyles } from "@mui/styles";
import { TextField, Theme } from "@mui/material";
import { BaseTextFieldProps } from "@mui/material/TextField/TextField";
import clsx from "clsx";

interface DbcTextFieldProps extends BaseTextFieldProps {}

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: theme.spacing(1),
      "& input": {
        padding: theme.spacing(1.5),
      },
      "&:focus-within": {
        border: `1px solid ${theme.palette.secondary.main}`,
      },
    },
  }),
);

const DbcTextField: React.FC<DbcTextFieldProps> = (props) => {
  const classes = useStyles();
  return (
    <TextField {...props} className={clsx(classes.root, props.className)} />
  );
};

export default DbcTextField;
