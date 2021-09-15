import React from "react";
import {
  Card,
  CardContent,
  Container,
  CssBaseline,
  Grid,
  Switch,
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
      <Container maxWidth="lg">
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs>
            <h1 className={classes.root}>Quotes of the day</h1>
          </Grid>
          {/* end grid header */}
          <Grid
            container
            item
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
          <Grid item xs>
            <Card variant="outlined">
              <CardContent>
                <Quotes />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
