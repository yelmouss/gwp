import { Container, Grid } from "@mui/material";
import Image from "next/image";
import useResponsiveDesign from "../hooks/useResponsiveDesign";

const Page15 = () => {
  const { deviceType, getPdfOptimizedStyles } = useResponsiveDesign();
  const responsiveStyles = getPdfOptimizedStyles();

  return (
    <>
      <Container
        id="page15-container"
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
          Ajouter des photos aux réalisations
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
                    Cliquez sur le bloc avec le stylo
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
                    Sur la gauche, selectionnez la galerie
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
                    Vous pouvez déplacer avec le curseur les photos pour
                    modifier l&apos;ordre , supprimer une photo avec la petite croix
                    ou en insérer de nouvelle en cliquant sur &quot;Actions&quot; puis
                    &quot;Ajouter à la galerie&quot;
                  </p>
                </div>
              </div>
            </Grid>

            <Grid size={{ xs: 12, md: 8 }}>
              <Image
                src="/imagesguide/image1-15.PNG"
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
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default Page15;
