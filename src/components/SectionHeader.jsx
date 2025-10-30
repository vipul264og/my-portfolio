import { Box, Typography } from "@mui/material";

export default function SectionHeader({ title, subtitle }) {
  return (
    <Box sx={{ mb: 4, textAlign: "center" }}>
      <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="subtitle1" color="text.secondary">
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
