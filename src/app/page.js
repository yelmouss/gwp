import GuideWp from "@/components/GuideWp";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <GuideWp />
      <Footer />
    </div>
  );
}
