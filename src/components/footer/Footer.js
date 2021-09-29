import React from "react";
import Container from "@mui/material/Container";
import { IconButton, Grid, Typography, Divider } from "@mui/material";
import Link from "next/link";
import useStyles from "./FooterStyles";

const Footer = () => {
  const classes = useStyles();

  const socials = [
    { src: "Youtube", hoverColor: "#FF0000" },
    { src: "Twitter", hoverColor: "#00acee " },
    { src: "Instagram", hoverColor: "#8a3ab9" },
    { src: "Facebook", hoverColor: "#3b5998" },
  ];
  return (
    <footer className={classes.root}>
      <Container className={classes.container}>
        <Grid
          item
          container
          justify="space-between"
          alignItems="center"
          className={classes.links}
        >
          <div className={classes.leftSection}>
            {socials.map((item) => (
              <IconButton
                key={item.src}
                component="a"
                href="/"
                className={classes.iconButton}
              >
                <i src={`/${item.src}.svg`} size={30} />
              </IconButton>
            ))}
          </div>
        </Grid>
        <Grid item {...{ xs: 12 }}>
          <Divider />
        </Grid>
        <Grid item {...{ xs: 12 }} className={classes.copyRight}>
          <Typography color="grayText">
            © تمامی حقوق متعلق به ... می‌باشد.1400
          </Typography>
        </Grid>
      </Container>
    </footer>
  );
};
export default Footer;
