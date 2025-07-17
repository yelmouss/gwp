import { Grid, Container } from "@mui/material";
import Image from "next/image";

const Page13 = ({ circleStyle }) => {
  return (
    <>
      <Image
        src="/backgrounds/page8.png"
        alt="Background page 13"
        fill
        style={{ objectFit: "contain" }}
        className="absolute inset-0 z-0"
      />
      <Container>
        <h4 className="md:text-4xl sm:text-2xl font-bold relative z-10 text-start ml-10">
          Modifier une photo
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
                Vous pouvez choisir une photo dans votre médiathèque ou sur
                votre ordinateur avec &quot;Téléverser des fichiers&quot;
              </p>
            </div>
            <div className="flex gap-2 mt-3">
              <span
                style={circleStyle}
                className="font-bold text-2xl bg-[#292f51] text-white p-5 rounded-full"
              >
                2
              </span>{" "}
              <p>Sélectionnez votre photo</p>
            </div>
            <div className="flex gap-2 mt-3">
              <span
                style={circleStyle}
                className="font-bold text-2xl bg-[#292f51] text-white p-5 rounded-full"
              >
                3
              </span>{" "}
              <p>Insérez la photo</p>
            </div>
            <div className="flex gap-2 mt-3">
              <span
                style={circleStyle}
                className="font-bold text-2xl bg-[#292f51] text-white p-5 rounded-full"
              >
                4
              </span>{" "}
              <p>Cliquer sur Sélectionner</p>
            </div>
          </Grid>
          <Grid size={8}>
            <Image
              src="/imagesguide/image113.PNG"
              alt="Guide WP"
              width={0}
              height={0}
              sizes="50vw"
              style={{
                width: "100%",
                height: "400px",
                objectFit: "contain",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Page13;
