import { Box, Typography } from "@mui/material";
import SectionHeader from "../components/SectionHeader";
import SkillChipGroup from "../components/SkillChipGroup";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <Box sx={{ px: 4, py: 6 }}>
      <SectionHeader title="Skills" />
      {Object.entries(skills).map(([category, list]) => (
        <Box key={category} sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>{category}</Typography>
          <SkillChipGroup skills={list} />
        </Box>
      ))}
    </Box>
  );
}
