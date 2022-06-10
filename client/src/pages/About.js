import React from "react";
import { Fab, Typography, TextField, Tooltip, Container } from "@mui/material/";
import AddIcon from "@mui/icons-material/Add";
import SocialDial from "../components/Dial.js";

export default function About() {
  return (
    <Container sx={{ bgcolor: "#8C97A9", p: 2, height: "100vh" }} maxWidth="lg">
      <Typography variant="h2" component="div" gutterBottom>
        About me page
      </Typography>
      <TextField
        color="primary"
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
      />
      <Tooltip title="add" placement="right">
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <SocialDial />
    </Container>
  );
}
