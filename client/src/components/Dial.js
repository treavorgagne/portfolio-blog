import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CreateIcon from "@mui/icons-material/CreateRounded";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import Resume from "../components/Resume.js";
import Email from "../components/Email.js";

const actions = [
  {
    icon: <LinkedInIcon />,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/treavorgagne/",
    target: "_blank",
    onClick: null,
  },
  {
    icon: <GitHubIcon />,
    name: "Github",
    href: "https://github.com/treavorgagne/",
    target: "_blank",
    onClick: null,
  },
  {
    icon: <CreateIcon />,
    name: "Add Blog",
    href: "http://localhost:3000/AddBlog",
    target: "",
    onClick: null,
  },
  {
    icon: <DownloadIcon />,
    name: "Resume",
    href: "",
    target: "",
    onClick: Resume,
  },
  {
    icon: <EmailIcon />,
    name: "Contact Me",
    href: "",
    target: "",
    onClick: Email,
  },
];

export default function SocialDial() {
  return (
    <Box sx={{ transform: "translateZ(0px)", flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", right: 0 }}
        icon={<SpeedDialIcon />}
        direction="left"
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            href={action.href}
            target={action.target}
            onClick={action.onClick}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
