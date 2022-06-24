import React from "react";
import { Typography, Container, Box, Button } from "@mui/material/";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import SocialDial from "../components/Dial.js";
import Resume from "../components/Resume.js";
import Email from "../components/Email.js";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

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
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: 2,
          gridTemplateRows: "auto",
          gridTemplateAreas: `"sidebar sidebar main main main main main"`,
        }}
      >
        <Box sx={{ gridArea: "sidebar", textAlign: "center" }}>
          <img
            src="../headshot.png"
            alt="headshot"
            loading="lazy"
            width="100%"
          ></img>
          <Typography variant="h6" component="div" gutterBottom>
            My Resume:
          </Typography>
          <IconButton
            color="primary"
            aria-label="download resume"
            component="span"
            variant="contained"
            onClick={Resume}
          >
            <Tooltip title="Download Resume">
              <DownloadIcon />
            </Tooltip>
          </IconButton>
          <Typography variant="h6" component="div" gutterBottom>
            Contact me:
          </Typography>
          <IconButton
            color="primary"
            aria-label="contact me"
            component="span"
            variant="contained"
            onClick={Email}
          >
            <Tooltip title="Contact Me">
              <EmailIcon />
            </Tooltip>
          </IconButton>
        </Box>
        <Box sx={{ gridArea: "main" }}>
          <Typography variant="h5" component="p" gutterBottom>
            Hey what's up, I'm Treavor Gagne (he/his/him). Here is a little bit
            about me. Currently, I am in my last semester of the Bachelor of
            Software Engineering (BSEng) Program at the University of Victoria.
            Currently, I am searching for post graduation software engineering
            positions.
          </Typography>
          <Divider sx={{ bgcolor: "black", my: 2 }} />
          <Typography variant="h4" component="p" gutterBottom>
            Work Experience
          </Typography>

          {/* <Typography variant="h4" component="p" gutterBottom>
            Education
          </Typography> */}
        </Box>
      </Box>
    </Container>
  );
}
