"use client";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import GuideCohérence from "./GuideCoherence";
import GuideYoulead from "./GuideYoulead";
import { Paper, useTheme, useMediaQuery } from "@mui/material";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: { xs: 1, sm: 2, md: 3 } }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Generator = () => {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <Paper
      elevation={6}
      sx={{
        width: "100%",
        maxWidth: "100%",
        borderRadius: { xs: 2, sm: 3 },
        overflow: "hidden",
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(255, 255, 255, 0.92)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
        height: { xs: 'auto', md: 'auto' },
        maxHeight: { xs: '90vh', md: '85vh' },
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box 
        sx={{ 
          p: { xs: 2, sm: 3, md: 4 }, 
          pt: { xs: 3, sm: 4 },
          pb: 2,
          borderBottom: `1px solid ${theme.palette.divider}`,
          background: "linear-gradient(to right, rgba(43, 69, 57, 0.1), rgba(97, 220, 163, 0.1), rgba(97, 179, 220, 0.1))",
        }}
      >
        <Typography
          variant={isMobile ? "h6" : "h5"}
          component="h1"
          align="center"
          gutterBottom
          sx={{ 
            fontWeight: "bold",
            color: "#2b4539",
            textShadow: "0 1px 2px rgba(0,0,0,0.05)",
          }}
        >
          Générateur de Guides WordPress
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          sx={{ mb: 1, color: "text.secondary" }}
        >
          Créez facilement des guides personnalisés pour vos clients
        </Typography>
      </Box>

      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="guides tabs"
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
          sx={{
            "& .MuiTab-root": {
              fontWeight: 600,
              fontSize: { xs: '0.9rem', sm: '1rem' },
              py: 1.5,
              transition: "all 0.2s ease",
              "&:hover": {
                backgroundColor: "rgba(97, 220, 163, 0.1)",
              },
            },
          }}
        >
          <Tab label="COHÉRENCE" {...a11yProps(0)} />
          <Tab label="YOULEAD" {...a11yProps(1)} />
        </Tabs>
      </Box>
      
      <Box sx={{ flex: 1, overflowY: "auto" }}>
        <CustomTabPanel value={value} index={0}>
          <GuideCohérence />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <GuideYoulead />
        </CustomTabPanel>
      </Box>
    </Paper>
  );
}


export default Generator;
