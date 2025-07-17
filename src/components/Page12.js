import { Grid, Container } from "@mui/material";
import Image from "next/image";

const Page12 = ({ circleStyle }) => {
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
                Cliquez sur le bloc en haut à gauche &quot;Modifier le conteneur&quot;
                que vous souhaitez modifier
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
                Sur la gauche modifiez la photo dans &quot;Style&quot; et dans &quot;Image&quot;
              </p>
            </div>
            <div className="flex gap-2 mt-3">
              <span
                style={circleStyle}
                className="font-bold text-2xl bg-[#292f51] text-white p-5 rounded-full"
              >
                3
              </span>{" "}
              <p>Cliquez sur &quot;Choisissez une image&quot;</p>
            </div>
          </Grid>
          <Grid size={8}>
            <Image
              src="/imagesguide/image1-12.png"
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

export default Page12;
