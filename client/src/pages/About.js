import React from "react";
import { Typography, Container, Box } from "@mui/material/";
import SocialDial from "../components/Dial.js";

export default function About() {
  return (
    <Container sx={{ p: 2 }} maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Typography variant="h3" component="div" gutterBottom>
          About me
        </Typography>
        <SocialDial />
      </Box>
    </Container>
  );
}
