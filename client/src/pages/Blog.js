import React from "react";
import { Typography, Container } from "@mui/material/";
import Entry from "../components/Entry";

export default function Blog() {
  return (
    <Container sx={{ bgcolor: "#8C97A9", p: 2, height: "100vh" }} maxWidth="lg">
      <Typography variant="h2" component="div" gutterBottom>
        Blog
      </Typography>
      <Entry />
    </Container>
  );
}
