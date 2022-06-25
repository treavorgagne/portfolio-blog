import { Box, Tooltip, IconButton } from "@mui/material/";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import Resume from "../components/Resume.js";
import Email from "../components/Email.js";

const infos = [
  {
    icon: <LinkedInIcon />,
    name: "My LinkedIn",
    href: "https://www.linkedin.com/in/treavorgagne/",
    target: "_blank",
    onClick: null,
  },
  {
    icon: <GitHubIcon />,
    name: "My Github",
    href: "https://github.com/treavorgagne/",
    target: "_blank",
    onClick: null,
  },
  {
    icon: <DownloadIcon />,
    name: "My Resume",
    href: "",
    target: "",
    onClick: Resume,
  },
  {
    icon: <EmailIcon />,
    name: "My Email",
    href: "",
    target: "",
    onClick: Email,
  },
];

export default function Contact() {
  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
        {infos.map((info) => (
          <IconButton
            color="primary"
            aria-label={info.name}
            component="span"
            variant="contained"
            href={info.href}
            onClick={info.onClick}
            size="large"
            sx={{ border: 1 }}
          >
            <Tooltip title={info.name} fontSize="24pt">
              {info.icon}
            </Tooltip>
          </IconButton>
        ))}
      </Box>
    </div>
  );
}
