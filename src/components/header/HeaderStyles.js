import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  appBar: {
    backgroundColor: "transparent",
    zIndex: "1299",
    position: "relative",
    boxShadow: "unset !important",
  },

  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    width: "4rem",
    height: "4rem",
  },

  toolbar: {
    height: "80px",
    width: "100%",
    whiteSpace: "nowrap",
    overflow: "scroll",
    position: "inherit",
    padding: "0px !important",
    scrollbarWidth: "none",
    MsOverflowStyle: "none" /* IE and Edge */,
    scrollbarWidth: "none" /* Firefox */,
    "&::-webkit-scrollbar": {
      width: "0px !important",
      height: "0px !important",
      display: "none !important",
    },
    [theme.breakpoints.down("xs")]: {
      height: "12rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      position: "absolute",
      width: "100%",
      backgroundImage:
        "linear-gradient(to bottom, #181818 15%, rgba(24, 24, 24, 0) 98% )",
    },
  },
  positionRelative: {
    [theme.breakpoints.down("xs")]: {
      position: "relative !important",
    },
  },
  container: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      minHeight: "50%",
    },
  },
}));
