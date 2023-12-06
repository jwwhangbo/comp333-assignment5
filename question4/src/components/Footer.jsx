import {
  Container,
  IconButton,
  CardMedia,
  Typography,
  Box,
  Card,
  CardContent,
} from "@mui/material";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import Pelumi from "../assets/pelumiA.png";
import John from "../assets/The Band Standing.png";

export default function GuestFooter() {
  const theme = useTheme();
  function Creator({ name, school, creator }) {
    return (
      <Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {name}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {school}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Co-Creator
            </Typography>
          </CardContent>
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            <IconButton aria-label="previous">
              {theme.direction === "rtl" ? (
                <SkipNextIcon />
              ) : (
                <SkipPreviousIcon />
              )}
            </IconButton>
            <IconButton aria-label="play/pause">
              <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            </IconButton>
            <IconButton aria-label="next">
              {theme.direction === "rtl" ? (
                <SkipPreviousIcon />
              ) : (
                <SkipNextIcon />
              )}
            </IconButton>
          </Box>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 151, objectFit: "contain" }}
          src={creator}
          alt="Live from space album cover"
        />
      </Card>
    );
  }
  return (
    <Container
      id="About"
      sx={{
        marginTop: "calc(10% + 60px)",
        bottom: 0,
        width: "100%",
        padding: "100px",
      }}
      maxWidth="lg"
    >
      <Box
        sx={{
          justifyContent: "space-between",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box>
          <Typography variant="h1">
            S<span style={{ color: "#FF5A5A" }}>S</span>
          </Typography>
          <Typography>Copyright ©2022. SonicScore Limited</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Creator
            name="Pelumi Tayo-Orisadare"
            school="Student @ Wesleyan University"
            creator={Pelumi}
          />
          <Creator
            name="John Whangbo"
            school="Student @ Wesleyan University"
            creator={John}
          />
        </Box>
      </Box>
    </Container>
    // </Paper>
  );
}
