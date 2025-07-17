import { Grid, Container } from "@mui/material";
import Image from "next/image";

const Page15 = ({ circleStyle }) => {
  return (
    <>
      <Image
        src="/backgrounds/page8.png"
        alt="Background page 12"
        fill
        style={{ objectFit: "contain" }}
        className="absolute inset-0 z-0"
      />
      <Container>
        <h4 className="md:text-4xl sm:text-2xl font-bold relative z-10 text-start ml-10">
          Ajouter des photos aux réalisations
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
              <p>Cliquez sur le bloc avec le stylo</p>
            </div>
            <div className="flex gap-2 mt-3">
              <span
                style={circleStyle}
                className="font-bold text-2xl bg-[#292f51] text-white p-5 rounded-full"
              >
                2
              </span>{" "}
              <p>Sur la gauche, selectionnez la galerie</p>
            </div>
            <div className="flex gap-2 mt-3">
              <span
                style={circleStyle}
                className="font-bold text-2xl bg-[#292f51] text-white p-5 rounded-full"
              >
                3
              </span>{" "}
              <p>
                Vous pouvez déplacer avec le curseur les photos pour
                modifier l&apos;ordre , supprimer une photo avec la petite croix
                ou en insérer de nouvelle en cliquant sur &quot;Actions&quot; puis
                &quot;Ajouter à la galerie&quot;
              </p>
            </div>
          </Grid>
          <Grid size={8}>
            <Image
              src="/imagesguide/image1-15.PNG"
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
        </Grid>
      </Container>
    </>
  );
};

export default Page15;
