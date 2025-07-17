import { Container, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import useResponsiveDesign from "../hooks/useResponsiveDesign";

const Page3 = () => {
  const { deviceType, getPdfOptimizedStyles } = useResponsiveDesign();
  const responsiveStyles = getPdfOptimizedStyles();

  const steps = [
    { text: "Vous connecter", page: 4 },
    { text: "Accéder aux pages et les modifier", page: 7 },
    { text: "Modifier du texte", page: 9 },
    { text: "Modifier une photo", page: 11 },
    { text: "Ajouter des photos aux réalisations", page: 14 },
    { text: "Ajouter un article", page: 17 },
  ];

  return (
    <>
      <Container
        id="page3-container"   
        maxWidth="xl"
        sx={{
          backgroundImage: "url('/backgrounds/page3.png')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "50vh",
          width: "100%",
          minHeight: "400px", // Hauteur minimale réduite pour l'interface
          maxHeight: "600px", // Hauteur maximale pour éviter le débordement
          aspectRatio: "1.414", // Ratio A4 paysage
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          // Styles spécifiques pour l'impression/PDF
          "@media print": {
            height: "210mm",
            width: "297mm",
            margin: 0,
            padding: 0,
            pageBreakAfter: "always",
          },
          // Styles pour l'exportation PDF
          "&.pdf-export": {
            height: "595px", // A4 paysage height en pixels à 72 DPI
            width: "842px", // A4 paysage width en pixels à 72 DPI
            margin: 0,
            padding: 0,
            transform: "scale(1)",
            transformOrigin: "top left",
          },
        }}
      > 
        <Grid
          container
          spacing={1}
          sx={{
            width: "100%",
            maxWidth: "95%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
          className="relative z-10"
        >
          {/* Colonne Cercle */}
          <Grid
            size={{ xs: 12, sm: 5 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              maxHeight: "30vh",
            }}
          >
            <div
              className="circle-notions"
              style={{
                width: deviceType === 'mobile' ? '150px' : deviceType === 'tablet' ? '150px' : '200px',
                height: deviceType === 'mobile' ? '150px' : deviceType === 'tablet' ? '150px' : '200px',
                backgroundColor: "#F4D03F",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
              }}
            >
              <h2
                style={{
                  fontSize: deviceType === 'mobile' ? '1rem' : deviceType === 'tablet' ? '1.2rem' : '1.5rem',
                  fontWeight: "bold",
                  color: "#2C3E50",
                  margin: 0,
                  lineHeight: "1.2",
                  textShadow: "1px 1px 2px rgba(255,255,255,0.3)",
                }}
                sx={{
                  "@media print": {
                    fontSize: "2rem !important",
                    color: "#2C3E50 !important",
                  },
                  "&.pdf-export": {
                    fontSize: "2rem !important",
                    color: "#2C3E50 !important",
                  },
                }}
              >
                NOTIONS
                <br />
                ABORDÉES
              </h2>
            </div>
          </Grid>

          {/* Colonne Liste */}
          <Grid
            size={{ xs: 12, sm: 7 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
              maxHeight: "40vh",
              pl: { xs: 1, sm: 2 },
              pr: { xs: 1, sm: 2 },
              overflow: "hidden",
            }}
          >
            <div
              className="steps-container"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                padding: deviceType === 'mobile' ? '10px' : deviceType === 'tablet' ? '15px' : '20px',
                borderRadius: "16px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",  
                overflowY: "auto",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: deviceType === 'mobile' ? '8px' : deviceType === 'tablet' ? '10px' : '12px',
                }}
              >
                {steps.map((step, index) => (
                  <div 
                    key={index} 
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      padding: "4px 0",
                    }}
                  >
                    <div 
                      className="step-number"
                      style={{
                        width: deviceType === 'mobile' ? '15px' : '20px',
                        height: deviceType === 'mobile' ? '15px' : '20px',
                        backgroundColor: "#292F51",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: deviceType === 'mobile' ? '0.5rem' : '0.6rem',
                        fontWeight: "bold",
                        flexShrink: 0,
                      }}
                    >
                      {index + 1}
                    </div>
                    <span 
                      style={{
                        fontSize: deviceType === 'mobile' ? '0.5rem' : deviceType === 'tablet' ? '0.6rem' : '0.7rem',
                        color: "#2C3E50",
                        fontWeight: "500",
                        flex: 1,
                      }}
                      sx={{
                        "@media print": {
                          fontSize: "1rem !important",
                          color: "#2C3E50 !important",
                        },
                        "&.pdf-export": {
                          fontSize: "1rem !important",
                          color: "#2C3E50 !important",
                        },
                      }}
                    >
                      {step.text}
                    </span>
                    <span 
                      className="page-number"
                      style={{
                        fontSize: deviceType === 'mobile' ? '0.5rem' : deviceType === 'tablet' ? '0.6rem' : '0.7rem',
                        color: "#7F8C8D",
                        fontWeight: "600",
                        marginLeft: "auto",
                      }}
                      sx={{
                        "@media print": {
                          fontSize: "0.7rem !important",
                          color: "#7F8C8D !important",
                        },
                        "&.pdf-export": {
                          fontSize: "0.7rem !important",
                          color: "#7F8C8D !important",
                        },
                      }}
                    >
                      p.{step.page}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Page3