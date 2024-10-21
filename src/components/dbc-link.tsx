import React from "react";
import { LinkProps, Link, useTheme } from "@mui/material";

interface DbcLinkProps extends LinkProps {
  light?: boolean;
}

const DbcLink: React.FC<DbcLinkProps> = (props) => {
  const { light, children, ...rest } = props;
  const theme = useTheme();

  return (
    <Link
      sx={{
        color: light
          ? theme.palette.primary.main
          : theme.palette.secondary.main,
        cursor: "pointer",
      }}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default DbcLink;
