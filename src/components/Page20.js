import { Container } from "@mui/material";
import Image from "next/image";
import useResponsiveDesign from "../hooks/useResponsiveDesign";

const Page20 = () => {
  const { deviceType, getPdfOptimizedStyles } = useResponsiveDesign();
  const responsiveStyles = getPdfOptimizedStyles();

  return (
    <>
      <Container
        id="page20-container"
        maxWidth="xl"
        sx={{
          backgroundImage: "url('/backgrounds/page20.png')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "50vh",
          width: "100%",
          minHeight: "400px",
          maxHeight: "600px",
          aspectRatio: "1.414",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          "@media print": {
            height: "210mm",
            width: "297mm",
            margin: 0,
            padding: 0,
            pageBreakAfter: "always",
          },
          "&.pdf-export": {
            height: "595px",
            width: "842px",
            margin: 0,
            padding: 0,
            transform: "scale(1)",
            transformOrigin: "top left",
          },
        }}
      >
        {/* Page sans titre, seulement le background */}
      </Container>
    </>
  );
};

export default Page20;
