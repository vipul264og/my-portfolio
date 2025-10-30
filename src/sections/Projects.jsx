import { Box, Grid } from "@mui/material";
import SectionHeader from "../components/SectionHeader";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <Box sx={{ px: 4, py: 6 }}>
      <SectionHeader title="Projects" subtitle="Some of my recent work" />
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={4} key={index}>
            <ProjectCard {...project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
