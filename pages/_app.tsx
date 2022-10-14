import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Fragment, useEffect, useMemo, useState } from "react";
// import Header from "../components/layout/header";
import {
  Badge,
  Box,
  createTheme,
  CssBaseline,
  Divider,
  PaletteMode,
  Stack,
  ThemeProvider,
  Typography,
  useTheme,
} from "@mui/material";
import { getStoredTheme, getThemeOptions, setStoredTheme } from "../src/theme";
import { AuthContextProvider } from "../context/AuthContext";
// import Sidebar from "../components/layout/Sidebar";

// import Rightbar from "../components/layout/Rightbar";
// import Feed from "../components/layout/Feed";
// import Navbar from "../components/layout/Navbar";
// import Add from "../components/layout/Add";

import "../src/firebase";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";
import ProtectedRoute from "../components/ProtectedRoute";
function MyApp({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState<PaletteMode>("dark"); // default is dark mode
  useEffect(() => {
    const storedTheme = getStoredTheme();

    if (storedTheme) {
      setMode(storedTheme);
    }
  }, []);

  // update the theme only if changed
  const theme = useMemo(() => createTheme(getThemeOptions(mode)), [mode]);
  const noAuthRequired = ["/", "/Login", "/Signup"];
  const router = useRouter();

  return (
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />

        <Box bgcolor={"background.default"} color={"text.primary"}>
          {/* <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add /> */}
          {noAuthRequired.includes(router.pathname) ? (
            <Component {...pageProps} />
          ) : (
            <ProtectedRoute>
              <Component {...pageProps} />
            </ProtectedRoute>
          )}
        </Box>
      </ThemeProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
