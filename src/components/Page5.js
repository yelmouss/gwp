import { Container } from "@mui/material";
import Image from "next/image";
import useResponsiveDesign from "../hooks/useResponsiveDesign";

const Page5 = () => {
  const { deviceType, getPdfOptimizedStyles } = useResponsiveDesign();
  const responsiveStyles = getPdfOptimizedStyles();

  return (
    <>
      <Container
        id="page5-container"
        maxWidth="xl"
        sx={{
          backgroundImage: "url('/backgrounds/page5.png')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "50vh",
          width: "100%",
          minHeight: "400px", // Hauteur minimale cohérente avec Page3 et Page4
          maxHeight: "600px", // Hauteur maximale pour éviter le débordement
          aspectRatio: "1.414", // Ratio A4 paysage
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center", // Centre le contenu comme les autres pages
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
        <div
          style={{
            width: "100%",
            maxWidth: "90%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: "1rem",
            padding: "20px",
            zIndex: 10,
          }}
        >
          <h2 
            className="font-bold z-10 text-left sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl"
            style={{
              color: "#292F51",
              textShadow: "2px 2px 4px rgba(255,255,255,0.8)",
              maxWidth: "100%",
              wordBreak: "break-word",
              marginBottom: "1rem",
              marginLeft: "5%", // Alignement comme les autres pages
              position: "relative",
              zIndex: 10,
            }}
            sx={{
              "@media print": {
                fontSize: "3rem !important",
                color: "#292F51 !important",
              },
              "&.pdf-export": {
                fontSize: "3rem !important",
                color: "#292F51 !important",
              },
            }}
          >
            Votre interface d&apos;administration
          </h2>
        
          <div
            style={{
              marginLeft: "5%",
              maxWidth: "85%",
              maxHeight: "50vh",
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
                textShadow: "1px 1px 2px rgba(255,255,255,0.8)",
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
              Votre site dispose d&apos;une interface d&apos;administration. C&apos;est en vous y
              connectant que vous pourrez modifier la structure et/ou le contenu
              du site. Bien entendu, l&apos;accès à l&apos;interface d&apos;administration est
              protégé, seuls les utilisateurs disposant d&apos;un compte y ont accès.
              <br /><br />
              Pour accéder à l&apos;interface d&apos;administration de votre site internet,
              il vous suffit de taper l&apos;adresse de votre site dans la barre
              d&apos;adresse de votre navigateur internet, suivie du texte suivant : «
              /cologin ».
              <br /><br />
              Par exemple, l&apos;adresse ressemblera à cela:
              « www.coherence-communication.fr/cologin ».
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Page5;
