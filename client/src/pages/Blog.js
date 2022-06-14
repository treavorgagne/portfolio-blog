import React from "react";
import { Typography, Container, Box } from "@mui/material/";
import SocialDial from "../components/Dial.js";

// this data will be stored in the mangoDB database
const entries = [
  {
    title: "TITLE TEST 1",
    author: "AUTHOR TEST 1",
    date: "DATE TEST 1",
    blog: "BLOG CONTENT TEST 1",
  },
  {
    title: "TITLE TEST 2",
    author: "AUTHOR TEST 2",
    date: "DATE TEST 2",
    blog: "BLOG CONTENT TEST 2",
  },
];

export default function Blog() {
  return (
    <Container sx={{ p: 2 }} maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Typography variant="h3" component="div" gutterBottom>
          Blog
        </Typography>
        <SocialDial />
      </Box>
      {entries.map((entry) => (
        <Box>
          <Typography variant="h3" component="div">
            {entry.title}
          </Typography>
          <Typography variant="h5" component="div">
            {entry.author + " "} {entry.date}
          </Typography>
          <Typography variant="p" component="div">
            {entry.blog}
          </Typography>
        </Box>
      ))}
    </Container>
  );
}
