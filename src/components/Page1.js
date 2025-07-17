import { Container } from "@mui/material";
import Image from "next/image";
import useResponsiveDesign from "../hooks/useResponsiveDesign";

const Page1 = () => {
  const { deviceType, getPdfOptimizedStyles } = useResponsiveDesign();
  const responsiveStyles = getPdfOptimizedStyles();

  return (
    <>
      <Container
        id="page1-container"
        maxWidth="xl"
        sx={{
          backgroundImage: "url('/backgrounds/page1.png')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "50vh",
          width: "100%",
          minHeight: "595px", // Format A4 paysage en pixels (210mm)
          aspectRatio: "1.414", // Ratio A4 paysage
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start", // Aligne le contenu à gauche
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
        <h2 
          className="font-bold z-10 text-left sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl"
          style={{
            // ...responsiveStyles,
            color: "#292F51",
            textShadow: "2px 2px 4px rgba(255,255,255,0.8)",
            maxWidth: "50%", // Limite la largeur pour laisser voir le background
            wordBreak: "break-word",
            marginLeft: "5%", // Décale légèrement du bord gauche
            // Styles spécifiques pour l'impression/PDF
            "@media print": {
              fontSize: "3rem !important",
              color: "#292F51 !important",
            },
          }}
          sx={{
            // Styles pour l'exportation PDF
            "&.pdf-export": {
              fontSize: "3rem !important",
              color: "#292F51 !important",
            },
          }}
        >
          Guide <br /> d&apos;utilisation du <br /> back office
        </h2>
      </Container>
    </>
  );
};

export default Page1;
