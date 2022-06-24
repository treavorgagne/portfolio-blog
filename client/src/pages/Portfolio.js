import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Accordion from "@mui/material/Accordion";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SocialDial from "../components/Dial.js";

const projects = [
  {
    id: "capstone",
    name: "Course Scheduling Capstone Project",
    stack: "Golang, Python, Docker",
    content:
      "Ex velit in pariatur magna eiusmod sit enim sunt fugiat aliquip voluptate velit esse. Labore eiusmod deserunt do reprehenderit aliqua cillum laboris id anim excepteur duis aliquip ea. Quis reprehenderit et nulla eiusmod sint eu id ea excepteur ullamco fugiat deserunt eu.",
  },
  {
    id: "website",
    name: "Portfolio and Blog Website",
    stack: "React.js, Express Node.js, MongoDB, Docker, AWS",
    content:
      "Ex velit in pariatur magna eiusmod sit enim sunt fugiat aliquip voluptate velit esse. Labore eiusmod deserunt do reprehenderit aliqua cillum laboris id anim excepteur duis aliquip ea. Quis reprehenderit et nulla eiusmod sint eu id ea excepteur ullamco fugiat deserunt eu.",
  },
  {
    id: "redis",
    name: "Redis Bookstore Cache",
    stack: "Express Node.js, Redis Cache, Docker",
    content:
      "Ex velit in pariatur magna eiusmod sit enim sunt fugiat aliquip voluptate velit esse. Labore eiusmod deserunt do reprehenderit aliqua cillum laboris id anim excepteur duis aliquip ea. Quis reprehenderit et nulla eiusmod sint eu id ea excepteur ullamco fugiat deserunt eu.",
  },
  {
    id: "trading",
    name: "Scalability Day Trading Project",
    stack: "React.js, Express Node.js, PostgreSQL, AWS, Docker",
    content:
      "Ex velit in pariatur magna eiusmod sit enim sunt fugiat aliquip voluptate velit esse. Labore eiusmod deserunt do reprehenderit aliqua cillum laboris id anim excepteur duis aliquip ea. Quis reprehenderit et nulla eiusmod sint eu id ea excepteur ullamco fugiat deserunt eu.",
  },
  {
    id: "lp",
    name: "Linear Programming Solver",
    stack: "Python",
    content:
      "Ex velit in pariatur magna eiusmod sit enim sunt fugiat aliquip voluptate velit esse. Labore eiusmod deserunt do reprehenderit aliqua cillum laboris id anim excepteur duis aliquip ea. Quis reprehenderit et nulla eiusmod sint eu id ea excepteur ullamco fugiat deserunt eu.",
  },
  {
    id: "tdr",
    name: "Top Down Royal (TDR)",
    stack: "C++, TCP",
    content:
      "Ex velit in pariatur magna eiusmod sit enim sunt fugiat aliquip voluptate velit esse. Labore eiusmod deserunt do reprehenderit aliqua cillum laboris id anim excepteur duis aliquip ea. Quis reprehenderit et nulla eiusmod sint eu id ea excepteur ullamco fugiat deserunt eu.",
  },
  {
    id: "sql",
    name: "ACID Complient SQL Airport Database",
    stack: "PostgreSQL, Python",
    content:
      "Ex velit in pariatur magna eiusmod sit enim sunt fugiat aliquip voluptate velit esse. Labore eiusmod deserunt do reprehenderit aliqua cillum laboris id anim excepteur duis aliquip ea. Quis reprehenderit et nulla eiusmod sint eu id ea excepteur ullamco fugiat deserunt eu.",
  },
];

export default function Portfolio() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container sx={{ p: 2 }} maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Typography variant="h3" component="div" gutterBottom>
          Portfolio
        </Typography>
        <SocialDial />
      </Box>
      <Typography variant="h5" gutterBottom>
        Here is a list of projects I have completed. If you wish to take a
        closer look at any of these projects please see my{" "}
        <Link
          href="https://github.com/treavorgagne"
          underline="hover"
          target="_blank"
        >
          github
        </Link>
        .
      </Typography>
      <Divider sx={{ bgcolor: "black", my: 2 }} />

      {projects.map((project) => (
        <Accordion
          expanded={expanded === project.id}
          onChange={handleChange(project.id)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={project.id + "bh-content"}
            id={project.id + "bh-header"}
          >
            <Typography variant="h4" sx={{ flexShrink: 1 }}>
              {project.name}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="h6" sx={{ color: "text.secondary" }}>
              Tech Stack: {project.stack}
            </Typography>
            <Typography>{project.content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
}
