import Image from "next/image";

const Page20 = () => {
  return (
    <>
      <Image
        src="/backgrounds/page20.png"
        alt="Background page 20"
        fill
        style={{ objectFit: "contain" }}
        className="absolute inset-0 z-0"
      />
    </>
  );
};

export default Page20;
