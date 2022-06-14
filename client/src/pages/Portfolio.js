import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Accordion from "@mui/material/Accordion";
import Link from "@mui/material/Link";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Portfolio() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container sx={{ p: 2, height: "100vh" }} maxWidth="lg">
      <Typography variant="h3" component="div" gutterBottom>
        Portfolio
      </Typography>
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

      <Accordion
        expanded={expanded === "dayTrading"}
        onChange={handleChange("dayTrading")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="dayTradingbh-content"
          id="dayTradingbh-header"
        >
          <Typography variant="h4" sx={{ flexShrink: 0 }}>
            Scalability Day Trading Project
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6" sx={{ color: "text.secondary" }}>
            Tech Stack: React.js, Express Node.js, PostgreSQL, AWS, Docker
          </Typography>
          <Typography>
            Eiusmod voluptate et voluptate sint. Ut exercitation laboris aliqua
            veniam. Sint ullamco deserunt ad dolor aliqua esse pariatur eu et
            ipsum eiusmod deserunt.Reprehenderit aute elit veniam fugiat
            excepteur. Laborum nostrud tempor consequat qui irure velit in esse
            qui. Excepteur do ut nulla magna. Elit culpa nulla labore veniam
            laborum consequat officia. Elit ipsum aute labore nisi amet sint eu
            qui cillum ipsum. Qui ullamco veniam sunt ullamco laboris Lorem.
            Aute reprehenderit minim aliquip ut consectetur est.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "redis"}
        onChange={handleChange("redis")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="redisbh-content"
          id="redisbh-header"
        >
          <Typography variant="h4" sx={{ flexShrink: 0 }}>
            Redis Bookstore Cache
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6" sx={{ color: "text.secondary" }}>
            Tech Stack: Express Node.js, Redis Cache, Docker
          </Typography>
          <Typography>
            Eiusmod voluptate et voluptate sint. Ut exercitation laboris aliqua
            veniam. Sint ullamco deserunt ad dolor aliqua esse pariatur eu et
            ipsum eiusmod deserunt.Reprehenderit aute elit veniam fugiat
            excepteur. Laborum nostrud tempor consequat qui irure velit in esse
            qui. Excepteur do ut nulla magna. Elit culpa nulla labore veniam
            laborum consequat officia. Elit ipsum aute labore nisi amet sint eu
            qui cillum ipsum.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === "lp"} onChange={handleChange("lp")}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="lpbh-content"
          id="lpbh-header"
        >
          <Typography variant="h4" sx={{ flexShrink: 0 }}>
            Linear Programming Solver
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6" sx={{ color: "text.secondary" }}>
            Tech Stack: Python
          </Typography>
          <Typography>
            Eiusmod voluptate et voluptate sint. Ut exercitation laboris aliqua
            veniam. Sint ullamco deserunt ad dolor aliqua esse pariatur eu et
            ipsum eiusmod deserunt.Reprehenderit aute elit veniam fugiat
            excepteur. Laborum nostrud tempor consequat qui irure velit in esse
            qui. Excepteur do ut nulla magna. Elit culpa nulla labore veniam
            laborum consequat officia. Elit ipsum aute labore nisi amet sint eu
            qui cillum ipsum. Qui ullamco veniam sunt ullamco laboris Lorem.
            Aute reprehenderit minim aliquip ut consectetur est.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === "sql"} onChange={handleChange("sql")}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="sqlbh-content"
          id="sqlbh-header"
        >
          <Typography variant="h4" sx={{ flexShrink: 0 }}>
            ACID Complient SQL Airport Database
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6" sx={{ color: "text.secondary" }}>
            Tech Stack: PostgreSQL, Python
          </Typography>
          <Typography>
            Eiusmod voluptate et voluptate sint. Ut exercitation laboris aliqua
            veniam. Sint ullamco deserunt ad dolor aliqua esse pariatur eu et
            ipsum eiusmod deserunt.Reprehenderit aute elit veniam fugiat
            excepteur. Laborum nostrud tempor consequat qui irure velit in esse
            qui. Excepteur do ut nulla magna. Elit culpa nulla labore veniam
            laborum consequat officia. Elit ipsum aute labore nisi amet sint eu
            qui cillum ipsum. Qui ullamco veniam sunt ullamco laboris Lorem.
            Aute reprehenderit minim aliquip ut consectetur est.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === "blog"} onChange={handleChange("blog")}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="blogbh-content"
          id="blogbh-header"
        >
          <Typography variant="h4" sx={{ flexShrink: 0 }}>
            Portfolio and Blog Website
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6" sx={{ color: "text.secondary" }}>
            Tech Stack: React.js, Express Node.js, MongoDB, Docker, AWS
          </Typography>
          <Typography>
            Eiusmod voluptate et voluptate sint. Ut exercitation laboris aliqua
            veniam. Sint ullamco deserunt ad dolor aliqua esse pariatur eu et
            ipsum eiusmod deserunt.Reprehenderit aute elit veniam fugiat
            excepteur. Laborum nostrud tempor consequat qui irure velit in esse
            qui. Excepteur do ut nulla magna. Elit culpa nulla labore veniam
            laborum consequat officia. Elit ipsum aute labore nisi amet sint eu
            qui cillum ipsum. Qui ullamco veniam sunt ullamco laboris Lorem.
            Aute reprehenderit minim aliquip ut consectetur est.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === "TDR"} onChange={handleChange("TDR")}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="TDRbh-content"
          id="TDRbh-header"
        >
          <Typography variant="h4" sx={{ flexShrink: 0 }}>
            Top Down Royal (TDR)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6" sx={{ color: "text.secondary" }}>
            Tech Stack: C++, TCP
          </Typography>
          <Typography>
            Eiusmod voluptate et voluptate sint. Ut exercitation laboris aliqua
            veniam. Sint ullamco deserunt ad dolor aliqua esse pariatur eu et
            ipsum eiusmod deserunt.Reprehenderit aute elit veniam fugiat
            excepteur. Laborum nostrud tempor consequat qui irure velit in esse
            qui. Excepteur do ut nulla magna. Elit culpa nulla labore veniam
            laborum consequat officia. Elit ipsum aute labore nisi amet sint eu
            qui cillum ipsum. Qui ullamco veniam sunt ullamco laboris Lorem.
            Aute reprehenderit minim aliquip ut consectetur est.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}
