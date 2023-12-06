import { Box, Typography, Button } from "@mui/material";
import Plus from "@mui/icons-material/PlusOne";

import React from "react";
import AddRating from "./AddRating.jsx";
import apiClient from "../services/apiClient.jsx";
import RatingsView from "./RatingsView.jsx";
import UpdateRating from "./UpdateRating.jsx";
import DeleteRating from "./DeleteRating.jsx";
import ViewRating from "./ViewRating.jsx";

export default function Rater({ setTotalRatings, totalRatings }) {
  const [username, setUsername] = React.useState("");
  const [addRating, setAddRating] = React.useState(false);
  const [update, setUpdate] = React.useState(false);
  const [dlt, setDlt] = React.useState(false);
  const [dltID, setDltID] = React.useState(0);
  const [view, setView] = React.useState(false);
  const [viewRate, setViewRate] = React.useState(false);
  const [deleteRating, setDeleteRating] = React.useState(false);
  const [updateValues, setUpdateValues] = React.useState({
    id: 0,
    artist: "",
    title: "",
    rating: 0,
  });

  const [rating, setRating] = React.useState(true);

  React.useEffect(() => {
    const data = localStorage.getItem("username");
    setUsername(data);
    async function fetch() {
      const { data } = await apiClient.ratingG();
      setTotalRatings(data);
    }
    fetch();
  }, []);

  return (
    <h1>
      <>
        {rating ? (
          <Box>
            <Typography align="center" variant="h1" sx={{ marginTop: "100px" }}>
              Sonic<span style={{ color: "#FF5A5A" }}>Score</span>
            </Typography>
            <Typography align="center" fontSize={"120%"} m={1}>
              <span style={{ color: "#FF5A5A" }}>Welcome </span>
              {username}!
            </Typography>
            <Box textAlign={"center"}>
              <Button
                startIcon={<Plus />}
                align="center"
                onClick={() => {
                  setAddRating(true);
                  setRating(!rating);
                }}
                variant="conatined"
                sx={{ backgroundColor: "#7B61FF", color: "white" }}
              >
                Add a Rating!
              </Button>
            </Box>
            <RatingsView
              totalRatings={totalRatings}
              username={username}
              setUpdate={setUpdate}
              setViewRate={setViewRate}
              setUpdateValues={setUpdateValues}
              setRating={setRating}
              setDeleteRating={setDeleteRating}
              setDlt={setDlt}
              setDltID={setDltID}
              setView={setView}
            />
          </Box>
        ) : (
          <>
            {addRating && (
              <AddRating
                username={username}
                setRating={setRating}
                setAddRating={setAddRating}
                setTotalRatings={setTotalRatings}
                totalRatings={totalRatings}
              />
            )}
            {update && (
              <UpdateRating
                updateValues={updateValues}
                username={username}
                setRating={setRating}
                setUpdate={setUpdate}
              />
            )}
            {dlt && (
              <DeleteRating
                username={username}
                setRating={setRating}
                setDlt={setDlt}
                setDeleteRating={setDeleteRating}
                deleteRating={deleteRating}
                dltID={dltID}
              />
            )}
            {view && (
              <ViewRating
                setRating={setRating}
                viewRate={viewRate}
                setViewRate={setViewRate}
                updateValues={updateValues}
              />
            )}
          </>
        )}
      </>
    </h1>
  );
}
