import React from "react";
import { TypographyProps } from "@mui/material/Typography/Typography";
import { Theme, Typography } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import clsx from "clsx";

interface DbcTypographyProps extends TypographyProps {
  light?: boolean;
}
type StyleProps = {
  light?: boolean;
};

export const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) =>
  createStyles({
    root: {
      color: ({ light }) =>
        light ? theme.palette.primary.main : theme.palette.secondary.main,
    },
  }),
);

const DbcTypography: React.FC<DbcTypographyProps> = (props) => {
  const { light, className, children, ...rest } = props;
  const classes = useStyles({ light });

  return (
    <Typography {...rest} className={clsx(classes.root, className)}>
      {children}
    </Typography>
  );
};

export default DbcTypography;
