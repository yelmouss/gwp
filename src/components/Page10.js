import { Container, Grid } from "@mui/material";
import Image from "next/image";
import useResponsiveDesign from "../hooks/useResponsiveDesign";

const Page10 = () => {
  const { deviceType, getPdfOptimizedStyles } = useResponsiveDesign();
  const responsiveStyles = getPdfOptimizedStyles();

  return (
    <>
      <Container
        id="page10-container"
        maxWidth="xl"
        sx={{
          backgroundImage: "url('/backgrounds/page8.png')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "50vh",
          width: "100%",
          minHeight: "400px",
          maxHeight: "600px",
          aspectRatio: "1.414",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          position: "relative",
          padding: "20px",
          "@media print": {
            height: "210mm",
            width: "297mm",
            maxWidth: "none",
            margin: 0,
            padding: 0,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            pageBreakInside: "avoid",
          },
        }}
      >
        <h2 
          className="font-bold z-10 text-left sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl"
          style={{
            color: "#FFE3A4",
            textShadow: "2px 2px 4px rgba(255,255,255,0.8)",
            marginBottom: "1rem",
            alignSelf: "flex-start",
            marginLeft: "5%",
            fontSize: deviceType === 'mobile' ? '1.2rem' : deviceType === 'tablet' ? '1.5rem' : '2rem',
          }}
        >
          Modifier du texte
        </h2>

        <div style={{
          width: "100%",
          maxWidth: "90%",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          overflow: "visible"
        }}>
          <Grid
            container
            spacing={2}
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
            sx={{ zIndex: 10 }}
          >
            <Grid size={{ xs: 12, md: 4 }}>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col items-center justify-center text-center" style={{ gap: "0.5rem" }}>
                  <span
                    className="font-bold bg-[#ffe3a4] rounded-full"
                    style={{
                      fontSize: deviceType === 'mobile' ? '1rem' : '1.5rem',
                      padding: deviceType === 'mobile' ? '0.8rem' : '1.2rem',
                      width: deviceType === 'mobile' ? '2.5rem' : '3rem',
                      height: deviceType === 'mobile' ? '2.5rem' : '3rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    1
                  </span>
                  <p style={{
                    fontSize: deviceType === 'mobile' ? '0.6rem' : deviceType === 'tablet' ? '0.7rem' : '0.8rem',
                    color: "#444",
                    lineHeight: "1.3",
                    textAlign: "center",
                    margin: 0
                  }}>
                    Cliquez sur le nom de votre site en haut à gauche de l&apos;écran
                    afin de retourner sur votre site.
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center text-center" style={{ gap: "0.5rem" }}>
                  <span
                    className="font-bold bg-[#ffe3a4] rounded-full"
                    style={{
                      fontSize: deviceType === 'mobile' ? '1rem' : '1.5rem',
                      padding: deviceType === 'mobile' ? '0.8rem' : '1.2rem',
                      width: deviceType === 'mobile' ? '2.5rem' : '3rem',
                      height: deviceType === 'mobile' ? '2.5rem' : '3rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    2
                  </span>
                  <p style={{
                    fontSize: deviceType === 'mobile' ? '0.6rem' : deviceType === 'tablet' ? '0.7rem' : '0.8rem',
                    color: "#444",
                    lineHeight: "1.3",
                    textAlign: "center",
                    margin: 0
                  }}>
                    Sur la gauche modifiez le texte dans &quot;Contenu&quot; et dans
                    &quot;Éditeur de texte&quot;
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center text-center" style={{ gap: "0.5rem" }}>
                  <span
                    className="font-bold bg-[#ffe3a4] rounded-full"
                    style={{
                      fontSize: deviceType === 'mobile' ? '1rem' : '1.5rem',
                      padding: deviceType === 'mobile' ? '0.8rem' : '1.2rem',
                      width: deviceType === 'mobile' ? '2.5rem' : '3rem',
                      height: deviceType === 'mobile' ? '2.5rem' : '3rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    3
                  </span>
                  <p style={{
                    fontSize: deviceType === 'mobile' ? '0.6rem' : deviceType === 'tablet' ? '0.7rem' : '0.8rem',
                    color: "#444",
                    lineHeight: "1.3",
                    textAlign: "center",
                    margin: 0
                  }}>
                    Une fois la modification terminée, cliquez sur &quot;Publier&quot; en
                    haut à droite
                  </p>
                </div>
              </div>
            </Grid>

            <Grid size={{ xs: 12, md: 8 }}>
              <Image
                src="/imagesguide/image1-10.png"
                alt="Guide WP"
                width={0}
                height={0}
                sizes="50vw"
                style={{ 
                  width: "100%", 
                  height: deviceType === 'mobile' ? "200px" : "300px", 
                  objectFit: "contain" 
                }}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <p style={{
                fontSize: deviceType === 'mobile' ? '0.7rem' : deviceType === 'tablet' ? '0.8rem' : '0.9rem',
                color: "#444",
                lineHeight: "1.4",
                textAlign: "center",
                margin: "1rem 0",
                padding: "1rem"
              }}>
                Vous pouvez copier la phrase sur votre site puis faire ctrl-F
                dans votre back-office afin de rechercher la phrase concernée
                et de la trouver plus rapidement.
              </p>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default Page10;
