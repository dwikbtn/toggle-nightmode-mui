import React from "react";
import {
  Container,
  CssBaseline,
  Grid,
  Switch,
  Typography,
} from "@material-ui/core";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Quotes from "./Quotes";
import useStyle from "./style";
import { themeDark, themeLight } from "./theme";

function App() {
  const [checked, setChecked] = React.useState(false);

  function toggleHandler() {
    setChecked(!checked);
  }

  const theme = createTheme(checked ? themeLight : themeDark);
  const classes = useStyle();
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <Container maxWidth="lg" style={{ background: "blue" }}> => inline style*/}
        <main>
          <Container maxWidth="sm" className={classes.container}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              className={classes.toggleBtn}
            >
              {/* toggle start here */}
              <Brightness3Icon color="primary" />
              <Switch
                checked={checked}
                size="medium"
                onChange={toggleHandler}
                color="default"
                inputProps={{ "aria-label": "Night and day toggle" }}
              />
              <Brightness7Icon color="primary" />
            </Grid>
            <Typography
              align="center"
              variant="h3"
              component="h1"
              gutterBottom
              color="primary"
            >
              Qoutes of the day
            </Typography>
            <div>
              <Grid container justifyContent="center">
                <Quotes />
              </Grid>
            </div>
          </Container>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
