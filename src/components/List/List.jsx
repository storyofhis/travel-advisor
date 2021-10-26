import React, { useState } from "react";
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from "@material-ui/core";
import useStyle from "./styles";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

const List = () => {
  const classes = useStyle();
  const [type, setType] = useState("hospital");
  const [rating, setRating] = useState("");

  const places = [{ name: "cool place" }, { name: "best beer" }, { name: "best steak" }, { name: "cool place" }, { name: "best beer" }, { name: "best steak" }, { name: "cool place" }, { name: "best beer" }, { name: "best steak" }];
  return (
    <div className={classes.container}>
      <Typography variant="h4">Hospital Arround You</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(event) => setType(event.target.value)}>
          <MenuItem value="hospital">Hospital</MenuItem>
          <MenuItem value="pharmacy">Pharmacy</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(event) => setRating(event.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
        <Grid container spacing={3} className={classes.list}>
          {places?.map((place, i) => (
            <Grid item key={i} xs={12}>
              <PlaceDetails place={place} />
            </Grid>
          ))}
        </Grid>
      </FormControl>
    </div>
  );
};

export default List;
