import React, { useState, useEffect } from "react";
import { Button, Card, CardContent, Typography } from "@material-ui/core";
import useStyle from "./style";

export default function Quotes() {
  const [fetchedQuote, setFetchedQuote] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch("https://quotable.io/random?tags=happiness&love")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFetchedQuote(data);
        setLoading(true);
      });
  }, []);

  const classes = useStyle();
  const cardContents = (
    <Card>
      <CardContent>
        <Typography
          variant="h5"
          component="p"
          color="textSecondary"
          gutterBottom
        >
          {fetchedQuote.content}
        </Typography>
        <Typography
          variant="subtitle1"
          component="p"
          color="primary"
          align="right"
          className={classes.cardItem}
        >
          {fetchedQuote.author}
        </Typography>
      </CardContent>
      <Button variant="contained" color="primary">
        Random Quotes
      </Button>
    </Card>
  );

  return <>{loading ? cardContents : "loading...."}</>;
}
