import {
    Card,
    CardContent,
    CardActions,
    Typography,
    Button,
    Chip,
    Stack
  } from "@mui/material";
  
  export default function ProjectCard({ title, summary, tags, demo, repo }) {
    return (
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            {summary}
          </Typography>
          <Stack direction="row" flexWrap="wrap" gap={1}>
            {tags.map((tag) => (
              <Chip key={tag} label={tag} size="small" variant="outlined" />
            ))}
          </Stack>
        </CardContent>
        <CardActions>
          <Button href={demo} target="_blank" size="small">
            Demo
          </Button>
          <Button href={repo} target="_blank" size="small">
            Code
          </Button>
        </CardActions>
      </Card>
    );
  }
  