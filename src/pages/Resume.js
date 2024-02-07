import React from "react";
import { IconButton, Typography } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import "../assets/css/style.css";

function Resume() {
  return (
    <section>
      <Typography variant="h3" sx={{ marginBottom: 1 }}>
        Resume
        <Tooltip title="Download Resume" placement="right">
          <IconButton href="/assets/files/resume.pdf" target="_blank">
            <CloudDownloadIcon className="iconButton" />
          </IconButton>
        </Tooltip>
      </Typography>
      <Typography variant="h6">Front-End Proficiencies</Typography>
      <ul>
        <li>HTML, CSS, and JavaScript</li>
        <li>
          React.js, Angular, and Vue.js (JavaScript libraries/frameworks for
          building user interfaces
        </li>
        <li>Responsive design</li>
        <li>CSS frameworks (e.g., Bootstrap)</li>
      </ul>
      <Typography variant="h6">Back-End Proficiencies</Typography>
      <ul>
        <li>Node.js (JavaScript runti,me for server-side development)</li>
        <li>Express.js (Node.js web application framework)</li>
        <li>RESTful API design and development</li>
        <li>Server-side languages: Python, Ruby, or Java</li>
      </ul>
      <Typography variant="h6">Database Technologies</Typography>
      <ul>
        <li>MongoDb (NoSQL database)</li>
        <li>MySQL and PostgreSQL (Relational Databases)</li>
      </ul>
      <Typography variant="h6">Version Control</Typography>
      <ul>
        <li>Git and GitHub</li>
      </ul>
      <Typography variant="h6">Server Deployment</Typography>
      <ul>
        <li>Heroku, AWS, and other platforms</li>
      </ul>
      <Typography variant="h6">Testing</Typography>
      <ul>
        <li>Unit testing and integration testing frameworks: Jest and Mocha</li>
      </ul>
      <Typography variant="h6">Development Tools</Typography>
      <ul>
        <li>Visual Studio Code</li>
        <li>Sublime Text</li>
        <li>Atom</li>
      </ul>
      <Typography variant="h6">Build Tools</Typography>
      <ul>
        <li>Webpack</li>
        <li>Babel</li>
        <li>npm (Node Package Manager)</li>
      </ul>
      <Typography variant="h6">Additional Concepts</Typography>
      <ul>
        <li>Security best practices</li>
        <li>Authentication and authorization</li>
        <li>Websockets (for real-time applications)</li>
        <li>Containerization with Docker</li>
      </ul>
    </section>
  );
}

export default Resume;
