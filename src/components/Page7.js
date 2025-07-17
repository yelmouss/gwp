import Image from "next/image";

const Page7 = () => {
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
        Accéder aux <br /> pages et les <br /> modifier
      </h2>
    </>
  );
};

export default Page7;
