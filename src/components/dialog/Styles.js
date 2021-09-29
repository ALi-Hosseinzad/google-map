import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  root: {
    textAlign: "center",
  },
  map: {
    maxWidth: "30rem",
    cursor: "pointer",
    border: "1px solid silver",
    borderRadius: "4px",
    "& img": {
      width: "100%",
      height: "100%",
      borderRadius: "4px",
    },
  },
}));
