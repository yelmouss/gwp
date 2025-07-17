import { Container, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import useResponsiveDesign from "../hooks/useResponsiveDesign";

const Page2 = () => {
  const { deviceType, getPdfOptimizedStyles } = useResponsiveDesign();
  const responsiveStyles = getPdfOptimizedStyles();

  return (
    <>
      <Container
        id="page2-container"   
        maxWidth="xl"
        sx={{
          backgroundImage: "url('/backgrounds/page2.png')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "50vh",
          width: "100%",
          minHeight: "595px", // Format A4 paysage en pixels (210mm)
          aspectRatio: "1.414", // Ratio A4 paysage
          display: "flex",
          alignItems: "center",
          justifyContent: "center", // Centrer le contenu
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
            overflow: "hidden", // Évite le débordement
          }}
          className="relative z-10"
        >
          {/* Colonne Image */}
          <Grid
            size={{ xs: 12, sm: 5 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              maxHeight: "80vh",
            }}
          >
            <Image
              src={"/imagesguide/imagep2.jpg"}
              alt="Guide WP"
              width={0}
              height={0}
              sizes="100vw"
              style={{ 
                width: "90%", 
                height: "auto",
                maxWidth: "350px",
                maxHeight: "300px",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                objectFit: "cover",
              }}
            />
          </Grid>

          {/* Colonne Texte */}
          <Grid
            size={{ xs: 12, sm: 7 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
              maxHeight: "80vh",
              pl: { xs: 1, sm: 2 },
              pr: { xs: 1, sm: 2 },
              overflow: "hidden",
            }}
          >
            <h3 
              className="font-bold text-left"
              style={{
                fontSize: deviceType === 'mobile' ? '1.2rem' : deviceType === 'tablet' ? '1.5rem' : '1.8rem',
                color: "#292F51",
                marginBottom: "0.8rem",
                lineHeight: "1.2",
                textShadow: "1px 1px 2px rgba(255,255,255,0.8)",
              }}
              sx={{
                "@media print": {
                  fontSize: "2rem !important",
                  color: "#292F51 !important",
                },
                "&.pdf-export": {
                  fontSize: "2rem !important",
                  color: "#292F51 !important",
                },
              }}
            >
              Guide d&apos;utilisation
            </h3>
            
            <div 
              style={{
                maxHeight: "60vh",
                overflowY: "auto",
                paddingRight: "8px",
              }}
            >
              <p 
                className="text-left"
                style={{
                  fontSize: deviceType === 'mobile' ? '0.60rem' : deviceType === 'tablet' ? '0.65rem' : '0.7rem',
                  color: "#444",
                  lineHeight: "1.4",
                  textAlign: "justify",
                  marginBottom: "0",
                }}
                sx={{
                  "@media print": {
                    fontSize: "1rem !important",
                    color: "#444 !important",
                  },
                  "&.pdf-export": {
                    fontSize: "1rem !important",
                    color: "#444 !important",
                  },
                }}
              >
                Vous nous avez fait confiance pour la mise en place de votre site
                internet et nous vous en remercions! Ce petit guide vous
                accompagnera et pourra vous servir d&apos;aide-mémoire lorsque vous
                souhaiterez effectuer des mises à jour. Afin de faciliter la gestion
                de votre site, Cohérence met à votre disposition une interface de
                mise à jour adaptée à vos besoins. Il s&apos;agit dans votre cas de
                WordPress. WordPress est un gestionnaire de contenus permettant une
                publication simple et fiable. Vous pourrez retrouver les principales
                fonctionnalités que présente WordPress dans notre guide
                d&apos;utilisation et ainsi administrer votre site efficacement.
              </p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Page2;
