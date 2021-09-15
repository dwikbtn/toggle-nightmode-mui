import React, { useState, useEffect } from "react";

export default function Quotes() {
  const [fetchedData, setFetchedData] = useState(null);
  useEffect(() => {
    fetch("https://quotable.io/random?tags=happiness&love")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);

  return <div>hi</div>;
}
