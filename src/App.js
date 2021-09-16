import React from "react";
import {
  Card,
  CardContent,
  Container,
  CssBaseline,
  Grid,
  Switch,
  Typography,
} from "@material-ui/core";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Quotes from "./Quotes";

const useStyle = makeStyles({
  root: {
    color: "blue",
  },
});
function App() {
  const classes = useStyle();
  const [checked, setChecked] = React.useState(false);

  return (
    <>
      <CssBaseline />
      {/* <Container maxWidth="lg" style={{ background: "blue" }}> => inline style*/}
      <Container maxWidth="lg">
        <Typography
          className={classes.root}
          align="center"
          variant="h3"
          component="h1"
        >
          Qoutes of the day
        </Typography>
        <Grid
          container
          xs
          direction="row"
          justifyContent="center"
          alignItems="center"
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
        <Grid container justify="center">
          <Card variant="outlined">
            <CardContent>
              <Quotes />
            </CardContent>
          </Card>
        </Grid>
      </Container>
    </>
  );
}

export default App;
