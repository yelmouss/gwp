import Image from "next/image";

const Page9 = () => {
  return (
    <>
      <Image
        src="/backgrounds/page4.png"
        alt="Background page 4"
        fill
        style={{ objectFit: "contain" }}
        className="absolute inset-0 z-0"
      />
      <h2 className="md:text-8xl  sm:text-4xl font-bold text-white p-5 relative z-10">
        Modifier le <br /> texte
      </h2>
    </>
  );
};

export default Page9;
