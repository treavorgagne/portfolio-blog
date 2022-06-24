import { Box, Container, Typography } from "@mui/material/";

const experiences = [
  {
    position: "Software Developer Co-op",
    stack: "PHP, CSC, JavaScript, JQuery, MySQL",
    company: "National Resource Canada",
    date: "May 2021 - Dec. 2021",
    description:
      "Ex velit in pariatur magna eiusmod sit enim sunt fugiat aliquip voluptate velit esse. Labore eiusmod deserunt do reprehenderit aliqua cillum laboris id anim excepteur duis aliquip ea. Quis reprehenderit et nulla eiusmod sint eu id ea excepteur ullamco fugiat deserunt eu.",
  },
  {
    position: "Frontend Web Developer",
    stack: "React.js, CSS, HTML",
    company: "Solaries Enterprises Inc.",
    date: "Aug. 2020 - Dec. 2020",
    description:
      "Ex velit in pariatur magna eiusmod sit enim sunt fugiat aliquip voluptate velit esse. Labore eiusmod deserunt do reprehenderit aliqua cillum laboris id anim excepteur duis aliquip ea. Quis reprehenderit et nulla eiusmod sint eu id ea excepteur ullamco fugiat deserunt eu.",
  },
  {
    position: "Full Stack Web Developer Co-op",
    stack: "HTML, CSS, JavaScript, Postgres, Python",
    company: "Ergonomyx Technologies Canada Inc.",
    date: "Sep. 2019 - Aug. 2020",
    description:
      "Ex velit in pariatur magna eiusmod sit enim sunt fugiat aliquip voluptate velit esse. Labore eiusmod deserunt do reprehenderit aliqua cillum laboris id anim excepteur duis aliquip ea. Quis reprehenderit et nulla eiusmod sint eu id ea excepteur ullamco fugiat deserunt eu.",
  },
];

export default function Experience() {
  return (
    <div>
      {experiences.map((ex) => (
        <Box sx={{ mb: 2 }}>
          <Box sx={{ display: "flex", flexDirection: "flex-start" }}>
            <Typography variant="h5">
              <b>{ex.position}</b> at <i>{ex.company}</i>
            </Typography>
          </Box>
          <Typography variant="h6">Tech Stack: {ex.stack}</Typography>
          <Typography variant="subtitle1">{ex.date}</Typography>
          <Typography variant="p">{ex.description}</Typography>
        </Box>
      ))}
    </div>
  );
}
