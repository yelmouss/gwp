"use client";
import Generator from "@/components/Generator";
import LetterGlitch from "@/components/LetterGlitch";
import { Box, Container } from "@mui/material";
export default function Home() {
  return (
    <>
      {/* Full-screen fixed background with letter glitch effect */}
      <div className="fixed inset-0 w-full h-full">
        <LetterGlitch
          glitchColors={['#2b4539', '#61dca3', '#61b3dc']}
          glitchSpeed={50}
          centerVignette={false}
          outerVignette={true}
          smooth={true}
          className="w-full h-full"
          characters=" WESHORE "
        />
      </div>
      
      {/* Content container directly on top of glitch background */}
      <Box 
        className="fixed inset-0 w-full h-full flex items-center justify-center"
        sx={{
          zIndex: 10,
          py: 4,
          width: '100%',
          pointerEvents: 'none', // Let clicks through to underlying elements
        }}
      >
        <Container 
          maxWidth="lg"
          sx={{ 
            width: '100%',
            height: '100%',
            maxHeight: '90vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'auto', // Re-enable pointer events for the content
          }}
        >
          <Generator />
        </Container>
      </Box>
    </>
  );
}
