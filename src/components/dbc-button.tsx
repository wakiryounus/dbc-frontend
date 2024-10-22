import React from "react";
import { ButtonProps } from "@mui/material/Button/Button";
import { createStyles, makeStyles } from "@mui/styles";
import { Button, CircularProgress, Theme } from "@mui/material";
import clsx from "clsx";

interface DbcButtonProps extends ButtonProps {
  loading?: boolean;
}

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
  const { loading, onClick, children, ...rest } = props;
  const classes = useStyles();
  return (
    <Button
      {...rest}
      onClick={!loading ? onClick : undefined}
      disabled={loading}
      className={clsx(classes.root, props.className)}
    >
      {!loading ? children : <CircularProgress size="25px" />}
    </Button>
  );
};

export default DbcButton;
