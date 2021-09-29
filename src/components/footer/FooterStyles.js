import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  root: {
    minHeight: "17rem",
    display: "flex",
    zIndex: "1299",
    position: "relative",
    backgroundColor: theme.palette.background.tint10,
    padding: "11.2rem",
    paddingTop: "4rem",
    paddingBottom: "2.4rem",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  upArrow: {
    backgroundColor: theme.palette.secondary.main,
    width: "7.6rem",
    height: "7.6rem",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "-3.8rem",
    right: "6.4rem",
    cursor: "pointer",
    "& .iconStyle": {
      cursor: "pointer !important",
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
  },

  links: {
    marginBottom: "4rem",
    [theme.breakpoints.down("lg")]: {
      marginBottom: "3rem",
      display: "flex",
      flexDirection: "column",
      "& div:first-child": {
        marginBottom: "3rem",
      },
    },
  },
  rightSection: {
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      marginTop: "3rem",
    },
    "& a": {
      textDecoration: "none",
      color: theme.palette.text.main,
      marginLeft: "3rem",
      marginBottom: "1rem",
      display: "inline-flex",
      alignItems: "center",
      "&:hover": {
        color: theme.palette.primary.main,
      },
      "&:last-child": {
        marginLeft: 0,
      },
    },
  },
  copyRight: {
    textAlign: "center",
    direction: "ltr",
    marginTop: theme.spacing(12),
  },

  iconButton: {
    width: "3.5rem",
    height: "3.5rem",
    marginRight: "3rem",
    "&:first-child": {
      marginRight: 0,
    },
    "& img": {
      transition: "0.5s ease",
      filter: "grayscale(100%)",
      cursor: "pointer !important",
    },
    "&:hover": {
      backgroundColor: "transparent",
      cursor: "default",
      "& img": {
        filter: "grayscale(0%)",
        cursor: "pointer !important",
      },
    },
  },
}));
