import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import SocialDial from "../components/Dial.js";
import Divider from "@mui/material/Divider";
import Contact from "../components/Contact.js";
import Experience from "../components/Experience.js";
import Email from "../components/Email.js";
import { Link as RouterLink } from "react-router-dom";

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
        <Box sx={{ gridArea: "sidebar" }}>
          <Box sx={{ textAlign: "center" }}>
            <img
              src="../headshot.png"
              alt="headshot"
              loading="lazy"
              width="100%"
            ></img>
            <Typography variant="h5" component="p" gutterBottom>
              Contact Info
            </Typography>
          </Box>
          <Contact />
        </Box>
        <Box sx={{ gridArea: "main" }}>
          <Typography variant="h5" component="p" gutterBottom>
            Hey what's up,{" "}
            {/* </Typography>
          <Typography variant="h5" component="p" gutterBottom> */}
            I'm Treavor Gagne (he/his/him) and welcome to my portfolio and blog
            website.
          </Typography>

          <Typography variant="h5" component="p" gutterBottom>
            Currently, I'm in my last semester of school at the University of
            Victoria in the Bachelor of Software Engineering (BSEng) program.
            While at UVic, I have gained over 2+ years of software development
            experience between projects and coops. In that time, I have learned
            to code using multiple programming languages like Golang for my
            Software Engineering{" "}
            <RouterLink to="/Portfolio" style={{ textDecoration: "none" }}>
              <Link href="#" underline="hover">
                {" "}
                Capstone Project
              </Link>
            </RouterLink>
            . Aside from programming languages, I have gained experience
            developing using agile methodologies and practices, such as scrums
            meetings, development sprints, and retros among others. Overall, I
            am a well rounded software engineer with a multitude of varying
            experiences which are detailed below.
          </Typography>

          <Typography variant="h5" component="p" gutterBottom>
            I'm also looking for post graduation software engineering positions,
            so feel free to get in touch with me via{" "}
            <Link
              href="https://www.linkedin.com/in/treavorgagne/"
              underline="hover"
              target="_blank"
            >
              LinkedIn
            </Link>{" "}
            or{" "}
            <Link underline="hover" href="#" onClick={Email}>
              Email
            </Link>{" "}
            regarding possible job openings.
          </Typography>

          <Divider sx={{ bgcolor: "black", my: 2 }} />

          <Typography variant="h4" component="p" gutterBottom>
            Work Experience
          </Typography>
          <Experience />
        </Box>
      </Box>
    </Container>
  );
}
