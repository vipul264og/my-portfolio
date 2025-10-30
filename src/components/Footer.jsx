import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ textAlign: "center", py: 2, mt: 4, bgcolor: "background.paper" }}>
      <Typography variant="body2">
        © {new Date().getFullYear()} Student Portfolio | Last updated: Oct 2025
      </Typography>
    </Box>
  );
}
