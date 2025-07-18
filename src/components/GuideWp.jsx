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
import Lottie from "lottie-react";

// Import des animations
import animation1 from "../../public/animation1.json";
import animation2 from "../../public/animation2.json";
import animation3 from "../../public/animation3.json";

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
  const [exportComplete, setExportComplete] = useState(false);

  // États pour les inputs
  const [compteClient, setCompteClient] = useState("");
  const [identifiantWp, setIdentifiantWp] = useState("");
  const [motDePasseWp, setMotDePasseWp] = useState("");

  // Déterminer quelle animation afficher
  const getAnimationData = () => {
    if (exportComplete) return animation3;
    if (isExporting) return animation2;
    return animation1;
  };

  const getAnimationText = () => {
    if (exportComplete) return "✅ Document généré avec succès !";
    if (isExporting) return "⏳ Génération en cours...";
    return "📋 Document en cours de préparation";
  };

  const handleExportAll = async () => {
    setIsExporting(true);
    setExportComplete(false);
    try {
      // Rendre les pages visibles temporairement pour l'export
      const hiddenBox = document.getElementById('hidden-pages-container');
      if (hiddenBox) {
        hiddenBox.style.position = 'static';
        hiddenBox.style.visibility = 'visible';
        hiddenBox.style.left = 'auto';
        hiddenBox.style.top = 'auto';
        hiddenBox.style.width = 'auto';
        hiddenBox.style.height = 'auto';
        hiddenBox.style.overflow = 'visible';
      }

      // Attendre un peu pour que le rendu soit complet
      await new Promise(resolve => setTimeout(resolve, 100));

      const fileName = compteClient
        ? `Guide WP - ${compteClient}`
        : "Guide WP - Compte client";
      await exportMultipleToPdf(
        [
          "page1-container",
          "page2-container",
          "page3-container",
          "page4-container",
          "page5-container",
          "page6-container",
          "page7-container",
          "page8-container",
          "page9-container",
          "page10-container",
          "page11-container",
          "page12-container",
          "page13-container",
          "page14-container",
          "page15-container",
          "page16-container",
          "page17-container",
          "page18-container",
          "page19-container",
          "page20-container",
        ],
        fileName
      );

      // Marquer l'export comme terminé
      setExportComplete(true);
      
      // Remettre les pages cachées après l'export
      if (hiddenBox) {
        hiddenBox.style.position = 'absolute';
        hiddenBox.style.visibility = 'hidden';
        hiddenBox.style.left = '-9999px';
        hiddenBox.style.top = '-9999px';
        hiddenBox.style.width = '1px';
        hiddenBox.style.height = '1px';
        hiddenBox.style.overflow = 'hidden';
      }

      // Réinitialiser après 3 secondes
      setTimeout(() => {
        setExportComplete(false);
      }, 3000);
      
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <Container className="py-20" maxWidth="lg">
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

      {/* Logo Weshore */}
      <Box sx={{ 
        mb: 4, 
        display: "flex", 
        justifyContent: "center",
        alignItems: "center",
        p: 3,
       
      }}>
        <Image
          src="/logo-weshore.png"
          alt="Logo Weshore"
          width={200}
          height={175}
          style={{
            objectFit: "contain",
            filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))"
          }}
        />
      </Box>

      {/* Formulaire de configuration */}
      <Box sx={{ mb: 4, p: 3, backgroundColor: "#f5f5f5", borderRadius: 2 }}>
        <h3
          style={{
            marginBottom: "20px",
            color: "#292F51",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          Configuration du Guide WordPress
        </h3>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              fullWidth
              label="Compte client"
              value={compteClient}
              onChange={(e) => setCompteClient(e.target.value)}
              placeholder="Nom du client"
              variant="outlined"
              sx={{ backgroundColor: "white" }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              fullWidth
              label="Identifiant WordPress"
              value={identifiantWp}
              onChange={(e) => setIdentifiantWp(e.target.value)}
              placeholder="Identifiant WP"
              variant="outlined"
              sx={{ backgroundColor: "white" }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              fullWidth
              label="Mot de passe WordPress"
              value={motDePasseWp}
              onChange={(e) => setMotDePasseWp(e.target.value)}
              placeholder="Mot de passe WP"
              variant="outlined"
              // type="password"
              sx={{ backgroundColor: "white" }}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Section Animation Lottie */}
      <Box sx={{ 
        mb: 4, 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center",
        p: 3,
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        borderRadius: 2,
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
      }}>
        <Box sx={{ 
          width: 120, 
          height: 120, 
          mb: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <Lottie 
            animationData={getAnimationData()} 
            loop={!exportComplete}
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <h4 style={{ 
            color: "#292F51", 
            margin: "0 0 8px 0",
            fontSize: "1.2rem",
            fontWeight: "600"
          }}>
            {getAnimationText()}
          </h4>
          {!isExporting && !exportComplete && (
            <p style={{ 
              color: "#666", 
              margin: 0,
              fontSize: "0.9rem"
            }}>
              Configurez les paramètres ci-dessus puis cliquez sur le bouton d'export
            </p>
          )}
          {isExporting && (
            <p style={{ 
              color: "#1976d2", 
              margin: 0,
              fontSize: "0.9rem",
              fontWeight: "500"
            }}>
              Génération du PDF en cours, veuillez patienter...
            </p>
          )}
          {exportComplete && (
            <p style={{ 
              color: "#4caf50", 
              margin: 0,
              fontSize: "0.9rem",
              fontWeight: "500"
            }}>
              Le fichier PDF a été téléchargé avec succès !
            </p>
          )}
        </Box>
      </Box>

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

      {/* Pages cachées pour l'export PDF - présentes dans le DOM mais invisibles */}
      <Box 
        id="hidden-pages-container"
        sx={{ 
          position: "absolute",
          left: "-9999px",
          top: "-9999px",
          visibility: "hidden",
          pointerEvents: "none",
          overflow: "hidden",
          width: "1px",
          height: "1px"
        }}
      >
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
        <Page6 identifiantWp={identifiantWp} motDePasseWp={motDePasseWp} />
        <Page7 />
        <Page8 />
        <Page9 />
        <Page10 />
        <Page11 />
        <Page12 />
        <Page13 />
        <Page14 />
        <Page15 />
        <Page16 />
        <Page17 />
        <Page18 />
        <Page19 />
        <Page20 />
      </Box>

      {/* Interface propre sans affichage des pages */}
      <Box sx={{ mt: 4, textAlign: "center" }}>
        <h2 style={{ color: "#292F51", marginBottom: "20px" }}>
          Guide WordPress configuré et prêt pour l'export
        </h2>
        <p style={{ color: "#666", fontSize: "1.1rem", marginBottom: "30px" }}>
          Cliquez sur le bouton ci-dessus pour générer le PDF complet avec toutes les pages configurées.
        </p>
        
        {/* Informations de configuration */}
        {(compteClient || identifiantWp) && (
          <Box sx={{ 
            backgroundColor: "#e3f2fd", 
            p: 3, 
            borderRadius: 2, 
            maxWidth: "600px", 
            margin: "0 auto",
            mt: 3
          }}>
            <h4 style={{ color: "#1976d2", marginBottom: "15px" }}>
              Configuration actuelle :
            </h4>
            {compteClient && (
              <p style={{ margin: "8px 0", color: "#333" }}>
                <strong>Client :</strong> {compteClient}
              </p>
            )}
            {identifiantWp && (
              <p style={{ margin: "8px 0", color: "#333" }}>
                <strong>Identifiant WordPress :</strong> {identifiantWp}
              </p>
            )}
            {motDePasseWp && (
              <p style={{ margin: "8px 0", color: "#333" }}>
                <strong>Mot de passe :</strong> ••••••••
              </p>
            )}
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default GuideWp;
