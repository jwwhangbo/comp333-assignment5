import React from "react";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import apiClient from "../services/apiClient";

export default function AddRating({ username, setRating, setAddRating }) {
  const [ratingInfo, setRatingInfo] = React.useState({
    artist: "",
    title: "",
    rating: 1,
    artistError: "",
    titleError: "",
    ratingError: "",
  });
  const [inputError, setInputError] = React.useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (
      ratingInfo.artist &&
      ratingInfo.title &&
      ratingInfo.rating >= 1 &&
      ratingInfo.rating <= 5
    ) {
      try {
        //resets error if it passes the above conditionals
        setRatingInfo((prevState) => ({
          ...prevState,
          artistError: "",
          titleError: "",
          ratingError: "",
        }));

        //converts information into formData so it can be sent to the backend.
        const formData = new FormData();

        formData.append("username", username);
        formData.append("artist", ratingInfo.artist);
        formData.append("rating", ratingInfo.rating);
        formData.append("title", ratingInfo.title);

        const { data } = await apiClient.ratingP(formData);
        //successfully inputted into the DB
        if (data) {
          setInputError("");
          setRating(true);
          setAddRating(false);
          window.location.reload();
        } else {
          setInputError("Invalid Input.");
        }
      } catch (err) {
        console.log(err);
        setInputError("Invalid Input.");
      }

      setRatingInfo((prevState) => ({
        ...prevState,
        artist: "",
        title: "",
        rating: "",
      }));

      //error handling
    } else {
      if (ratingInfo.artist.length === 0) {
        setRatingInfo((prevState) => ({
          ...prevState,
          artistError: "Please enter a valid artist.",
        }));
      } else {
        setRatingInfo((prevState) => ({
          ...prevState,
          artistError: "",
        }));
      }
      if (ratingInfo.rating < 1 || ratingInfo.rating > 5) {
        setRatingInfo((prevState) => ({
          ...prevState,
          ratingError: "Please enter a valid rating.",
        }));
      } else {
        setRatingInfo((prevState) => ({
          ...prevState,
          ratingError: "",
        }));
      }
      if (ratingInfo.title.length === 0) {
        setRatingInfo((prevState) => ({
          ...prevState,
          titleError: "Please enter a valid song title.",
        }));
      } else {
        setRatingInfo((prevState) => ({
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
            height: "70vh",
            width: 280,
            margin: "20px auto",
          }}
        >
          <Grid align="center">
            <h2>Add a rating!</h2>
          </Grid>
          <TextField
            disabled
            sx={{ margin: "5px" }}
            label="Username"
            defaultValue={username}
            fullWidth
          />
          <TextField
            {...(ratingInfo.artistError ? { error: true } : {})}
            helperText={ratingInfo.artistError}
            sx={{ margin: "5px" }}
            label="Artist"
            placeholder="Enter Artist"
            type="text"
            value={ratingInfo.artist}
            onChange={(e) =>
              setRatingInfo((prevState) => ({
                ...prevState,
                artist: e.target.value,
              }))
            }
            fullWidth
            required
          />
          <TextField
            {...(ratingInfo.titleError ? { error: true } : {})}
            helperText={ratingInfo.titleError}
            sx={{ margin: "5px" }}
            label="Song"
            placeholder="Enter Song"
            type="text"
            value={ratingInfo.title}
            onChange={(e) =>
              setRatingInfo((prevState) => ({
                ...prevState,
                title: e.target.value,
              }))
            }
            fullWidth
            required
          />
          <TextField
            {...(ratingInfo.ratingError ? { error: true } : {})}
            helperText={ratingInfo.ratingError}
            sx={{ margin: "5px" }}
            label="Rating"
            placeholder="Enter Rating"
            type="number"
            InputProps={{ inputProps: { min: 1, max: 5 } }}
            value={ratingInfo.rating}
            onChange={(e) =>
              setRatingInfo((prevState) => ({
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
            style={{ margin: "8px 0", backgroundColor: "#7B61FF" }}
            fullWidth
          >
            Rate
          </Button>
          <Button
            color="primary"
            onClick={() => {
              setRating(true);
              setAddRating(false);
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
