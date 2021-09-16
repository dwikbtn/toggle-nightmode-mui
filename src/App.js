import React from "react";
import {
  Container,
  CssBaseline,
  Grid,
  Switch,
  Typography,
} from "@material-ui/core";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Quotes from "./Quotes";
import useStyle from "./style";

function App() {
  const classes = useStyle();
  const [checked, setChecked] = React.useState(false);

  return (
    <>
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
            <Brightness3Icon />
            <Switch
              checked={checked}
              size="medium"
              onChange={(e) => setChecked(e.target.checked)}
              color="default"
              inputProps={{ "aria-label": "Night and day toggle" }}
            />
            <Brightness7Icon />
          </Grid>
          <Typography
            align="center"
            variant="h3"
            component="h1"
            gutterBottom
            color="textPrimary"
          >
            Qoutes of the day
          </Typography>
          <Grid container justifyContent="center">
            <Quotes />
          </Grid>
        </Container>
      </main>
    </>
  );
}

export default App;
