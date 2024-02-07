import React from "react";
import { IconButton } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import "../assets/css/style.css";

const Footer = () => {
  return (
    <footer>
      <Tooltip title="GitHub Account">
        <IconButton
          href="https://github.com/Mikkal1?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon className="icon" />
        </IconButton>
      </Tooltip>
      <Tooltip title="LinkedIn Account">
        <IconButton
          href="https://www.linkedin.com/in/michael-ramcharitar-00119346"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon className="icon" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Facebook Account">
        <IconButton
          href="https://www.facebook.com/michael.r.7330"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookIcon className="icon" />
        </IconButton>
      </Tooltip>
    </footer>
  );
};

export default Footer;
