import Image from "next/image";

const Page14 = () => {
  return (
    <div className="w-full h-full relative">
      <Image
        src="/backgrounds/page4.png"
        alt="Background page 4"
        fill
        style={{ objectFit: "contain" }}
        className="absolute inset-0 z-0"
      />
      <h2 className="text-8xl font-bold text-white p-5 relative z-10">
        Ajouter des <br /> photos aux <br /> réalisations
      </h2>
    </div>
  );
};

export default Page14;
