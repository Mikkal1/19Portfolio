import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import VisibilityIcon from "@mui/icons-material/Visibility";

const AppCard = ({ project }) => {
  return (
    <Card sx={{ maxWidth: 345, borderColor: "#F9F6EE" }}>
      <CardMedia sx={{ height: 140 }} image={project.image} title="image" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={project.githubLink} target="_blank">
          <GitHubIcon />
          &nbsp; GitHub
        </Button>
        {project.deployedLink && (
          <Button size="small" href={project.deployedLink} target="_blank">
            <VisibilityIcon /> &nbsp; Deployed
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default AppCard;
