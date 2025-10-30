import { Box, Typography, Button, Stack } from "@mui/material";
import SectionHeader from "../components/SectionHeader";

export default function Hero() {
  return (
    <Box
      sx={{
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: 3,
      }}
    >
      <SectionHeader title="Hi, I'm Vipul Kushwaha" subtitle="AIML Student | Frontend Developer" />
      <Typography variant="body1" sx={{ mt: 2, maxWidth: 600 }}>
        I design and build responsive, accessible web experiences using modern tools like React and Material UI.
      </Typography>
      <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
        <Button variant="contained" href="/cv.pdf">View CV</Button>
        <Button variant="outlined" href="/contact">Contact Me</Button>
      </Stack>
    </Box>
  );
}
