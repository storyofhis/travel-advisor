import "./App.css";
import { CssBaseline, Grid } from "@material-ui/core";
import { Header, List, Map } from "./components";
import { getPlaceData } from "./api";
import React, { useEffect, useState } from "react";

function App() {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    getPlaceData().then((data) => {
      console.log(data);
      setPlaces(data);
    });
  }, []);
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
