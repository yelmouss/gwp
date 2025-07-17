import { Grid, Container } from "@mui/material";
import Image from "next/image";

const Page10 = ({ circleStyle }) => {
  return (
    <>
      <Image
        src="/backgrounds/page8.png"
        alt="Background page 10"
        fill
        style={{ objectFit: "contain" }}
        className="absolute inset-0 z-0"
      />
      <Container>
        <h4 className="md:text-4xl sm:text-2xl font-bold relative z-10 text-start ml-10">
          Modifier du texte
        </h4>
        <Grid container spacing={2} className="relative z-10 p-5">
          <Grid size={4}>
            <div className="flex gap-2 mt-3">
              <span
                style={circleStyle}
                className="font-bold text-2xl bg-[#292f51] text-white p-5 rounded-full"
              >
                1
              </span>{" "}
              <p>
                Cliquez sur le nom de votre site en haut à gauche de l&apos;écran
                afin de retourner sur votre site.
              </p>
            </div>
            <div className="flex gap-2 mt-3">
              <span
                style={circleStyle}
                className="font-bold text-2xl bg-[#292f51] text-white p-5 rounded-full"
              >
                2
              </span>{" "}
              <p>
                Sur la gauche modifiez le texte dans &quot;Contenu&quot; et dans
                &quot;Éditeur de texte&quot;
              </p>
            </div>
            <div className="flex gap-2 mt-3">
              <span
                style={circleStyle}
                className="font-bold text-2xl bg-[#292f51] text-white p-5 rounded-full"
              >
                3
              </span>{" "}
              <p>
                Une fois la modification terminée, cliquez sur &quot;Publier&quot; en
                haut à droite
              </p>
            </div>
          </Grid>
          <Grid size={8}>
            <Image
              src="/imagesguide/image1-10.png"
              alt="Guide WP"
              width={0}
              height={0}
              sizes="50vw"
              style={{
                width: "100%",
                height: "300px",
                objectFit: "contain",
              }}
            />
          </Grid>
          <Grid size={12}>
            <p className="text-base text-center p-5">
              Vous pouvez copier la phrase sur votre site puis faire ctrl-F
              dans votre back-office afin de rechercher la phrase concernée
              et de la trouver plus rapidement.
            </p>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Page10;
