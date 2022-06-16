import React from "react"
import { Typography, Container, Box, Button } from "@mui/material/";
import DownloadIcon from "@mui/icons-material/Download";
import SocialDial from "../components/Dial.js";
import Resume from "../components/Resume.js";

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
      <Button
        sx={{ mt: 2 }}
        variant="contained"
        endIcon={<DownloadIcon />}
        onClick={Resume}
      >
        Download
      </Button>
    </Container>
  );
}
