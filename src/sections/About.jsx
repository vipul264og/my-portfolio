import { Box, Typography, Avatar, Grid, Chip } from "@mui/material";
import SectionHeader from "../components/SectionHeader";

export default function About() {
  return (
    <Box sx={{ px: 4, py: 6 }}>
      <SectionHeader title="About Me" />
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={4}>
          <Avatar src="/avatar.png" alt="Profile" sx={{ width: 180, height: 180, mx: "auto" }} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="body1" sx={{ mb: 2 }}>
            I’m an AIML student passionate about creating efficient and scalable web applications. 
            I love combining design and logic to make impactful digital experiences.
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Chip label="📍 Motihari" sx={{ mr: 1, mb: 1 }} />
            <Chip label="🕓 Available for internships" sx={{ mr: 1, mb: 1 }} />
            <Chip label="💬 Languages: English, Hindi" sx={{ mr: 1, mb: 1 }} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
