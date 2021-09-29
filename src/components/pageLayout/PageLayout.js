import React from "react";
import Container from "@mui/material/Container";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import useStyles from "./PageLayoutStyles";

const PageLayout = (props) => {
  const { children, fullWidth } = props;
  const classes = useStyles();

  return (
    <div className={classes.root} dir={"ltr"}>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
};

export default PageLayout;
