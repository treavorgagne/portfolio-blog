import React from "react";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const exs = [
  {
    id: 0,
    position: "Software Developer Co-op",
    stack: "PHP, CSC, JavaScript, JQuery, MySQL",
    company: "National Resource Canada",
    date: "May 2021 - Dec. 2021",
    description:
      "Ex velit in pariatur magna eiusmod sit enim sunt fugiat aliquip voluptate velit esse. Labore eiusmod deserunt do reprehenderit aliqua cillum laboris id anim excepteur duis aliquip ea. Quis reprehenderit et nulla eiusmod sint eu id ea excepteur ullamco fugiat deserunt eu.",
    expanded: true,
  },
  {
    id: 1,
    position: "Frontend Web Developer",
    stack: "React.js, CSS, HTML",
    company: "Solaries Enterprises Inc.",
    date: "Aug. 2020 - Dec. 2020",
    description:
      "Ex velit in pariatur magna eiusmod sit enim sunt fugiat aliquip voluptate velit esse. Labore eiusmod deserunt do reprehenderit aliqua cillum laboris id anim excepteur duis aliquip ea. Quis reprehenderit et nulla eiusmod sint eu id ea excepteur ullamco fugiat deserunt eu.",
    expanded: false,
  },
  {
    id: 2,
    position: "Full Stack Web Developer Co-op",
    stack: "HTML, CSS, JavaScript, Postgres, Python",
    company: "Ergonomyx Tech. Canada Inc.",
    date: "Sep. 2019 - Aug. 2020",
    description:
      "Ex velit in pariatur magna eiusmod sit enim sunt fugiat aliquip voluptate velit esse. Labore eiusmod deserunt do reprehenderit aliqua cillum laboris id anim excepteur duis aliquip ea. Quis reprehenderit et nulla eiusmod sint eu id ea excepteur ullamco fugiat deserunt eu.",
    expanded: false,
  },
];

export default function Experience() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {exs.map((ex) => (
        <Accordion expanded={expanded === ex.id} onChange={handleChange(ex.id)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={ex.id + "bh-content"}
            id={ex.id + "bh-header"}
          >
            <Typography variant="h5">
              <b>{ex.position}</b> at <i>{ex.company}</i>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="h6">Tech Stack: {ex.stack}</Typography>
            <Typography variant="subtitle1">{ex.date}</Typography>
            <Typography variant="p">{ex.description}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
