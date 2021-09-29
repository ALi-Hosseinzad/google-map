import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "@mui/material/styles";
import Head from "next/head";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import createCache from "@emotion/cache";
import theme from "../src/style/theme";
import { LocationProvider } from "../src/context/dispatch/Dispatch";
import { locInitState } from "../src/context/reducer/Reducer";

export const cache = createCache({ key: "css", prepend: true });
function MyApp(props) {
  const { Component, pageProps } = props;

  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <CacheProvider value={cache}>
      <Head>
        <title>Shetab</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LocationProvider initState={locInitState}>
          <Component {...pageProps} />
        </LocationProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
export default MyApp;
