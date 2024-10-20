import React from "react";
import { ButtonProps } from "@mui/material/Button/Button";
import { createStyles, makeStyles } from "@mui/styles";
import { Button, Theme } from "@mui/material";
import clsx from "clsx";

interface DbcButtonProps extends ButtonProps {}

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: `${theme.palette.secondary.main} !important`,
      borderRadius: theme.spacing(1),
      color: theme.palette.primary.main,
      padding: `${theme.spacing(1)} !important`,
    },
  }),
);

const DbcButton: React.FC<DbcButtonProps> = (props) => {
  const classes = useStyles();
  return (
    <Button {...props} className={clsx(classes.root, props.className)}>
      {props.children}
    </Button>
  );
};

export default DbcButton;
