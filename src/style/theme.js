import { createTheme } from "@mui/material/styles";
import { palette } from "./palette";

const theme = createTheme({
  spacing: 2,
  direction: "ltr",
  typography: {
    htmlFontSize: 10,
  },
  // palette: palette,
});

export default theme;
