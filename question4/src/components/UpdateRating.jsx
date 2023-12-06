import React from "react";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import apiClient from "../services/apiClient";

export default function UpdateRating({
  updateValues,
  username,
  setRating,
  setUpdate,
}) {
  const [updateInfo, setupdateInfo] = React.useState({
    artist: updateValues.artist,
    title: updateValues.title,
    rating: updateValues.rating,
    artistError: "",
    titleError: "",
    ratingError: "",
  });
  const [inputError, setInputError] = React.useState("");
  async function handleSubmit(e) {
    e.preventDefault();

    if (
      updateInfo.artist &&
      updateInfo.title &&
      updateInfo.rating >= 1 &&
      updateInfo.rating <= 5
    ) {
      try {
        //resets error if it passes the above conditionals
        setupdateInfo((prevState) => ({
          ...prevState,
          artistError: "",
          titleError: "",
          ratingError: "",
        }));

        //converts information into formData so it can be sent to the backend.

        const { data } = await apiClient.ratingPatch({
          id: updateValues.id,
          username: username,
          title: updateInfo.title,
          artist: updateInfo.artist,
          rating: updateInfo.rating,
        });
        //successfully inputted into the DB
        if (data) {
          setInputError("");
          setRating(true);
          setUpdate(false);
          window.location.reload();
        } else {
          setInputError("Invalid Input.");
        }
      } catch (err) {
        console.log(err);
        setInputError("Invalid Input.");
      }
    } else {
      if (updateInfo.artist.length === 0) {
        setupdateInfo((prevState) => ({
          ...prevState,
          artistError: "Please enter a valid artist.",
        }));
      } else {
        setupdateInfo((prevState) => ({
          ...prevState,
          artistError: "",
        }));
      }
      if (updateInfo.rating < 1 || updateInfo.rating > 5) {
        setupdateInfo((prevState) => ({
          ...prevState,
          ratingError: "Please enter a valid rating.",
        }));
      } else {
        setupdateInfo((prevState) => ({
          ...prevState,
          ratingError: "",
        }));
      }
      if (updateInfo.title.length === 0) {
        setupdateInfo((prevState) => ({
          ...prevState,
          titleError: "Please enter a valid song title.",
        }));
      } else {
        setupdateInfo((prevState) => ({
          ...prevState,
          titleError: "",
        }));
      }
    }
  }
  return (
    <>
      <Grid sx={{ marginTop: "100px" }}>
        <Paper
          elevation={10}
          style={{
            padding: 20,
            height: "75vh",
            width: 280,
            margin: "20px auto",
          }}
        >
          <Grid align="center">
            <h2>Update a rating!</h2>
          </Grid>
          <TextField
            disabled
            sx={{ margin: "5px" }}
            label="Username"
            defaultValue={username}
            fullWidth
          />
          <TextField
            {...(updateInfo.artistError ? { error: true } : {})}
            helperText={updateInfo.artistError}
            sx={{ margin: "5px" }}
            label="Artist"
            placeholder="Enter Artist"
            type="text"
            value={updateInfo.artist}
            onChange={(e) =>
              setupdateInfo((prevState) => ({
                ...prevState,
                artist: e.target.value,
              }))
            }
            fullWidth
            required
          />
          <TextField
            {...(updateInfo.titleError ? { error: true } : {})}
            helperText={updateInfo.titleError}
            sx={{ margin: "5px" }}
            label="Song"
            placeholder="Enter Song"
            type="text"
            value={updateInfo.title}
            onChange={(e) =>
              setupdateInfo((prevState) => ({
                ...prevState,
                title: e.target.value,
              }))
            }
            fullWidth
            required
          />
          <TextField
            {...(updateInfo.ratingError ? { error: true } : {})}
            helperText={updateInfo.ratingError}
            sx={{ margin: "5px" }}
            label="Rating"
            placeholder="Enter Rating"
            type="number"
            InputProps={{ inputProps: { min: 1, max: 5 } }}
            value={updateInfo.rating}
            onChange={(e) =>
              setupdateInfo((prevState) => ({
                ...prevState,
                rating: e.target.value,
              }))
            }
            fullWidth
            required
          />
          <Typography sx={{ color: "red" }}>{inputError}</Typography>

          <Button
            type="submit"
            color="primary"
            onClick={handleSubmit}
            variant="contained"
            style={{ backgroundColor: "#7B61FF" }}
            fullWidth
          >
            Update
          </Button>
          <Button
            color="primary"
            onClick={() => {
              setRating(true);
              setUpdate(false);
            }}
            variant="contained"
            style={{ backgroundColor: "#7B61FF" }}
            fullWidth
          >
            Cancel
          </Button>
        </Paper>
      </Grid>
    </>
  );
}
