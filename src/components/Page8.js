import { Grid } from "@mui/material";
import Image from "next/image";

const Page8 = ({ circleStyle }) => {
  return (
    <>
      <Image
        src="/backgrounds/page8.png"
        alt="Background page 8"
        fill
        style={{ objectFit: "contain" }}
        className="absolute inset-0 z-0"
      />
      <h4 className="md:text-4xl sm:text-2xl font-bold relative z-10 text-start ml-20">
        Accéder à la page
      </h4>
      <Grid
        container
        display={"flex"}
        alignItems={"start"}
        justifyContent={"center"}
        className="relative z-10"
      >
        <Grid
          size={4}
          className="flex flex-col items-center justify-center text-center"
        >
          <span
            style={circleStyle}
            className="font-bold text-2xl bg-[#ffe3a4] p-6 rounded-full"
          >
            1
          </span>{" "}
          <p>
            Cliquez sur le nom de votre site en haut à gauche de l&apos;écran
            afin de retourner sur votre site.
          </p>
        </Grid>
        <Grid
          size={4}
          className="flex flex-col items-center justify-center text-center"
        >
          <span
            style={circleStyle}
            className="font-bold text-2xl bg-[#ffe3a4] p-6 rounded-full"
          >
            2
          </span>{" "}
          <p>Aller sur la page que vous souhaitez modifier </p>
        </Grid>
        <Grid
          size={4}
          className="flex flex-col items-center justify-center text-center"
        >
          <span
            style={circleStyle}
            className="font-bold text-2xl bg-[#ffe3a4] p-6 rounded-full"
          >
            3
          </span>{" "}
          <p>
            Faites « modifier avec elementor » dans le bandeau noir en haut
            de page
          </p>
        </Grid>
        <Grid size={8}>
          <Image
            src="/imagesguide/image18.png"
            alt="Guide WP"
            width={0}
            height={0}
            sizes="50vw"
            style={{ width: "100%", height: "300px", objectFit: "contain" }}
          />
        </Grid>
        <Grid size={4}>
          <Image
            src="/imagesguide/image28.png"
            alt="Guide WP"
            width={0}
            height={0}
            sizes="50vw"
            style={{ width: "100%", height: "300px", objectFit: "contain" }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Page8;
