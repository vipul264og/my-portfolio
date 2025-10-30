import { Box, Typography, TextField, Button, Snackbar } from "@mui/material";
import { useState } from "react";
import SectionHeader from "../components/SectionHeader";

export default function Contact() {
  const [open, setOpen] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <Box sx={{ px: 4, py: 6 }}>
      <SectionHeader title="Contact Me" subtitle="Open to internships and collaborations" />
      <form onSubmit={handleSubmit}>
        <TextField label="Name" fullWidth required sx={{ mb: 2 }} />
        <TextField label="Email" fullWidth required type="email" sx={{ mb: 2 }} />
        <TextField label="Message" fullWidth required multiline rows={4} sx={{ mb: 2 }} />
        <Button type="submit" variant="contained">Send</Button>
      </form>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        message="Message sent successfully!"
      />
    </Box>
  );
}
