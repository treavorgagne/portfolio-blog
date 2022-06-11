import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const actions = [
  {
    icon: <LinkedInIcon />,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/treavorgagne/",
  },
  {
    icon: <GitHubIcon />,
    name: "Github",
    href: "https://github.com/treavorgagne/",
  },
];

export default function SocialDial() {
  return (
    <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", top: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            href={action.href}
            target="_blank"
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
