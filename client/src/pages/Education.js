import React from "react";
import { Typography, Container } from "@mui/material/";

export default function Education() {
  return (
    <Container sx={{ bgcolor: "#8C97A9", p: 2, height: "100vh" }} maxWidth="lg">
      <Typography variant="h2" component="div" gutterBottom>
        Education Page
      </Typography>
    </Container>
  );
}
