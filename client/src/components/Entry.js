import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const entries = [
  {
    title: "TITLE TEST 1",
    author: "AUTHOR TEST 1",
    date: "DATE TEST 1",
    blog: "BLOG CONTENT TEST 1",
  },
  {
    title: "TITLE TEST 2",
    author: "AUTHOR TEST 2",
    date: "DATE TEST 2",
    blog: "BLOG CONTENT TEST 2",
  },
];

export default function Entry() {
  return (
    <Box>
      {entries.map((entry) => (
        <Container>
          <Typography variant="h3">{entry.title}</Typography>
          <Typography variant="h5">
            {entry.author}
            {entry.date}
          </Typography>
          <Typography variant="p">{entry.blog}</Typography>
        </Container>
      ))}
    </Box>
  );
}
