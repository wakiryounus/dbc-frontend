import React, { InputHTMLAttributes } from "react";
import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import clsx from "clsx";

interface DbcTextFieldProps extends InputHTMLAttributes<HTMLInputElement> {}

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(1.5),
      borderRadius: theme.spacing(1),
      border: `1px solid ${theme.palette.primary.dark}`,
      transition: "border .2s",
      "&:focus": {
        border: `1px solid ${theme.palette.secondary.main}`,
        outline: 0,
      },
    },
  }),
);

const DbcTextField: React.FC<DbcTextFieldProps> = (props) => {
  const classes = useStyles();
  return <input {...props} className={clsx(classes.root, props.className)} />;
};

export default DbcTextField;
