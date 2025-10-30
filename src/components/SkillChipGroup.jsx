import { Stack, Chip } from "@mui/material";

export default function SkillChipGroup({ skills }) {
  return (
    <Stack direction="row" flexWrap="wrap" gap={1}>
      {skills.map((skill) => (
        <Chip
          key={skill}
          label={skill}
          color="primary"
          variant="outlined"
          sx={{ fontWeight: 500 }}
        />
      ))}
    </Stack>
  );
}
