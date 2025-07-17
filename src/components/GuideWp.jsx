"use client";

import {
  Grid,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Container,
  IconButton,
  Fab,
  Box,
} from "@mui/material";
import { Download as DownloadIcon, PictureAsPdf } from "@mui/icons-material";
import Image from "next/image";
import React, { useState, useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import usePdfExport from "../hooks/usePdfExport";

import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
import Page6 from "./Page6";
import Page7 from "./Page7";
import Page8 from "./Page8";
import Page9 from "./Page9";
import Page10 from "./Page10";
import Page11 from "./Page11";
import Page12 from "./Page12";
import Page13 from "./Page13";
import Page14 from "./Page14";
import Page15 from "./Page15";
import Page16 from "./Page16";
import Page17 from "./Page17";
import Page18 from "./Page18";
import Page19 from "./Page19";
import Page20 from "./Page20";

const GuideWp = () => {
  const { exportToPdf, exportMultipleToPdf } = usePdfExport();
  const [isExporting, setIsExporting] = useState(false);

  const handleExportAll = async () => {
    setIsExporting(true);
    try {
      await exportMultipleToPdf(
        ["page1-container", "page2-container", "page3-container", "page4-container", "page5-container"],
        "guide-wp-complet"
      );
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <Container>
      {/* Bouton d'export PDF flottant */}
      <Fab
        color="primary"
        aria-label="export-pdf"
        onClick={handleExportAll}
        disabled={isExporting}
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          zIndex: 1000,
        }}
      >
        <PictureAsPdf />
      </Fab>

      {/* Barre d'actions */}
      <Box sx={{ mb: 2, display: "flex", gap: 2, justifyContent: "center" }}>
        <Button
          variant="contained"
          startIcon={<PictureAsPdf />}
          onClick={handleExportAll}
          disabled={isExporting}
          size="large"
          sx={{
            backgroundColor: "#1976d2",
            "&:hover": {
              backgroundColor: "#1565c0",
            },
            px: 4,
            py: 1.5,
            fontSize: "1.1rem",
          }}
        >
          {isExporting
            ? "Export en cours..."
            : "Exporter le Guide Complet en PDF"}
        </Button>
      </Box>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Page1 />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Page2 />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Page3 />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Page4 />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Page5 />
        </Grid>
      </Grid>
    </Container>
  );
};

export default GuideWp;
