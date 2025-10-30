import { Box, List, ListItem, ListItemText } from "@mui/material";
import SectionHeader from "../components/SectionHeader";
import { achievements } from "../data/achievements";

export default function Achievements() {
  return (
    <Box sx={{ px: 4, py: 6 }}>
      <SectionHeader title="Achievements & Certifications" />
      <List>
        {achievements.map((item, i) => (
          <ListItem key={i}>
            <ListItemText
              primary={item.title}
              secondary={`${item.org} | ${item.date}`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
