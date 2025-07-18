import { Container } from "@mui/material";
import Image from "next/image";
import useResponsiveDesign from "../hooks/useResponsiveDesign";

const Page11 = () => {
  const { deviceType, getPdfOptimizedStyles } = useResponsiveDesign();
  const responsiveStyles = getPdfOptimizedStyles();

  return (
    <>
      <Container
        id="page11-container"
        maxWidth="xl"
        sx={{
          backgroundImage: "url('/backgrounds/page4.png')",
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
          justifyContent: "flex-start",
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
        <h2 
          className="font-bold z-10 text-left sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl"
          style={{
            color: "#FFE3A4",
            textShadow: "2px 2px 4px rgba(255,255,255,0.8)",
            maxWidth: "50%",
            wordBreak: "break-word",
            marginLeft: "5%",
            "@media print": {
              fontSize: "2.5rem !important",
              color: "#FFE3A4 !important",
            },
          }}
          sx={{
            "@media print": {
              fontSize: "2.5rem !important",
              color: "#FFE3A4 !important",
            },
            "&.pdf-export": {
              fontSize: "2.5rem !important",
              color: "#FFE3A4 !important",
            },
          }}
        >
          MODIFIER UNE <br /> PHOTO
        </h2>
      </Container>
    </>
  );
};

export default Page11;
