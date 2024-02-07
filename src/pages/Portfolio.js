import React from "react";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import AppCard from "../components/AppCard";
import "../assets/css/style.css";

function Portfolio() {
  const projects = [
    {
      name: "Note Taker",
      description:
        "Note Taker is an application that can be used to write, save, and retrieve notes. It uses an Express.js back end and saves/retrieves note data from a JSON file.",
      deployedLink: "https://mighty-sierra-48156-ae74ecc60205.herokuapp.com/",
      githubLink: "https://github.com/Mikkal1/NoteTakerCorrected",
      image:
        "https://github.com/Mikkal1/NoteTakerCorrected/raw/main/Assets/ss-index.png",
    },
    {
      name: "Password Generator",
      description:
        "This password generator allows the user to specify the length of the password and whether to include lowercase, uppercase, numeric, and/or special characters.",
      deployedLink: "https://mikkal1.github.io/password-generator/",
      githubLink: "https://github.com/Mikkal1/password-generator",
      image:
        "https://www.malwarebytes.com/wp-content/uploads/sites/2/2023/08/password-generator-3.png",
    },
    {
      name: "Weather Report",
      description:
        "The Weather Dashboard is a dynamic application that provides real-time weather updates for any location around the globe. It allows users to search for a city and instantly receive current weather conditions, including temperature, humidity, wind speed, and UV index.",
      deployedLink: "https://mikkal1.github.io/WeatherReportCorrected/",
      githubLink: "https://github.com/Mikkal1/WeatherReportCorrected",
      image:
        "https://raw.githubusercontent.com/Mikkal1/WeatherReportCorrected/main/Assets/search.png",
    },
    {
      name: "Work Day Scheduler",
      description:
        "The Work Day Scheduler is a simple calendar application that allows the user to save events for each hour of the day. It runs in the browser and features dynamically updated HTML and CSS powered by jQuery.",
      deployedLink: "https://mikkal1.github.io/agenda-challenge/",
      githubLink: "https://github.com/Mikkal1/agenda-challenge",
      image:
        "https://github.com/Mikkal1/agenda-challenge/raw/main/Assets/05-third-party-apis-homework-demo.gif",
    },
  ];

  return (
    <section>
      <Typography variant="h3" sx={{ marginBottom: 1 }}>
        Portfolio
      </Typography>
      <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2 }}>
        {projects.map((project, index) => (
          <Grid key={index} className="card" item xs={6}>
            <AppCard project={project} />
          </Grid>
        ))}
      </Grid>
    </section>
  );
}

export default Portfolio;
