import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: theme.palette.background.default,
    position: "relative",
    overflowX: "hidden ",
  "& .vertical-centered-box": {
      width: "100%",
      height: "calc(100vh - 7rem)",
    },
  },
  container: {
    paddingBottom: "10rem",
    [theme.breakpoints.down("xs")]: {
      marginTop: "12rem",
      "& div.banner:first-child": {
        marginTop: "-12rem",
      },
    },
  },
}));
