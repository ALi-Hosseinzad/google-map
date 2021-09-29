import React from "react";
import Container from "@mui/material/Container";
import { AppBar, Toolbar, Typography } from "@mui/material";
import clsx from "clsx";
import Link from "next/link";
import useStyles from "./HeaderStyles";

export default function Header({ position }) {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar} id="header">
      <Toolbar
        variant="regular"
        className={clsx(
          classes.toolbar,
          position === "relative" && classes.positionRelative
        )}
      >
        <Container className={classes.container}>
          <Link href="/" className={classes.logoContainer}>
            <img className={classes.logo} src={"/index.png"} />
          </Link>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
