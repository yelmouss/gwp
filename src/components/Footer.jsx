"use client";

import { Box, Typography, Link } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledFooter = styled(Box)(({ theme }) => ({
  backgroundColor: "rgba(41, 47, 81, 0.9)",
  color: "white",
  padding: "20px 0",
  marginTop: "auto",
  backdropFilter: "blur(10px)",
  borderTop: "1px solid rgba(255, 255, 255, 0.1)",
}));

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: 1, sm: 3 },
          px: 2,
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "rgba(255, 255, 255, 0.8)",
            fontSize: "0.9rem",
          }}
        >
          © {currentYear} Weshore. Tous droits réservés.
        </Typography>
        
        <Typography
          variant="body2"
          sx={{
            color: "rgba(255, 255, 255, 0.6)",
            fontSize: "0.85rem",
          }}
        >
          Made by{" "}
          <Link
            href="https://yelmouss.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "#64b5f6",
              textDecoration: "none",
              fontWeight: "500",
              transition: "color 0.3s ease",
              "&:hover": {
                color: "#90caf9",
                textDecoration: "underline",
              },
            }}
          >
            yelmouss
          </Link>
        </Typography>
      </Box>
    </StyledFooter>
  );
};

export default Footer;
