import React from "react";
import { TypographyProps } from "@mui/material/Typography/Typography";
import { Typography, useTheme } from "@mui/material";

interface DbcTypographyProps extends TypographyProps {
  light?: boolean;
}

const DbcTypography: React.FC<DbcTypographyProps> = (props) => {
  const { light, children, ...rest } = props;
  const theme = useTheme();

  return (
    <Typography
      sx={{
        color: light
          ? theme.palette.primary.main
          : theme.palette.secondary.main,
      }}
      {...rest}
    >
      {children}
    </Typography>
  );
};

export default DbcTypography;
