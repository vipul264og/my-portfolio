import {
    Box,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails
  } from "@mui/material";
  import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
  import SectionHeader from "../components/SectionHeader";
  import { experience } from "../data/experience";
  
  export default function Experience() {
    return (
      <Box sx={{ px: 4, py: 6 }}>
        <SectionHeader title="Experience & Education" />
        {experience.map((item, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ fontWeight: 600 }}>{item.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="subtitle2" color="text.secondary">
                {item.organization} — {item.period}
              </Typography>
              <ul>
                {item.details.map((detail, i) => (
                  <li key={i}>
                    <Typography variant="body2">{detail}</Typography>
                  </li>
                ))}
              </ul>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    );
  }
  