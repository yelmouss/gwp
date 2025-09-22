import Generator from "@/components/Generator";
import { Boxes } from "@/components/ui/shadcn-io/background-boxes";
import { Container } from "@mui/material";
import { FlickeringGrid } from "@/components/ui/shadcn-io/flickering-grid";
export default function Home() {
  return (
    <>
      <Container>
        <FlickeringGrid
          className="absolute inset-0"
          squareSize={4}
          gridGap={6}
          flickerChance={0.3}
          color="rgb(100, 100, 100)"
          maxOpacity={0.2}
          height={"100%"}
        />
        <Generator />
      </Container>
    </>
  );
}
