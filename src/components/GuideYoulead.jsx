import React, { useState, useRef } from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Box } from "@mui/material";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const GuideYoulead = () => {
  const [page, setPage] = useState(1);
  const [accountName, setAccountName] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const page5Ref = useRef(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = async () => {
    setIsGenerating(true);
    try {
      const pdf = new jsPDF("l", "mm", "a4");
      for (let i = 1; i <= 14; i++) {
        if (i === 5) {
          const canvas = await html2canvas(page5Ref.current, {
            scale: 8,
            useCORS: true,
          });
          const dataURL = canvas.toDataURL("image/png");
          pdf.addImage(dataURL, "PNG", 0, 0, 297, 210);
        } else {
          const img = new Image();
          img.crossOrigin = "anonymous";
          img.src = `/Guide WP pour youLead/Slide${i}.jpg`;
          await new Promise((resolve) => {
            img.onload = resolve;
          });
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          canvas.width = img.naturalWidth;
          canvas.height = img.naturalHeight;
          ctx.drawImage(img, 0, 0);
          const dataURL = canvas.toDataURL("image/jpeg");

          const pageWidth = 297;
          const pageHeight = 210;
          const imgAspect = img.naturalWidth / img.naturalHeight;
          const pageAspect = pageWidth / pageHeight;

          let imgWidth, imgHeight, x, y;
          if (imgAspect > pageAspect) {
            // Image is wider, fit to width
            imgWidth = pageWidth;
            imgHeight = pageWidth / imgAspect;
            x = 0;
            y = (pageHeight - imgHeight) / 2;
          } else {
            // Image is taller, fit to height
            imgHeight = pageHeight;
            imgWidth = pageHeight * imgAspect;
            x = (pageWidth - imgWidth) / 2;
            y = 0;
          }

          pdf.addImage(dataURL, "JPEG", x, y, imgWidth, imgHeight);
        }
        if (i < 14) pdf.addPage();
      }
      pdf.save(`${accountName} - Guide WP.pdf`);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div style={{ paddingBottom: "100px" }}>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          p: 3,
          bgcolor: "#f5f5f5",
          borderRadius: 2,
          boxShadow: 1,
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <TextField
          label="Nom du compte"
          value={accountName}
          onChange={(e) => setAccountName(e.target.value)}
          variant="outlined"
          size="small"
          sx={{ minWidth: 150 }}
        />
        <TextField
          label="Identifiant"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          variant="outlined"
          size="small"
          sx={{ minWidth: 150 }}
        />
        <TextField
          label="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
          size="small"
          sx={{ minWidth: 150 }}
        />
        <Button
          variant="contained"
          onClick={generatePDF}
          disabled={isGenerating}
          sx={{ minWidth: 150 }}
        >
          {isGenerating ? "Génération en cours..." : "Générer PDF"}
        </Button>
      </Stack>

      {page === 5 ? (
        <Stack
          spacing={2}
          sx={{
            padding: "10px",
            margin: "auto",
            width: "100%",
            height: "100%",
            bgcolor: "#F0F5FE",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h3"
            color="#292E50"
            fontWeight={"bold"}
            gutterBottom
          >
            Votre <span style={{ color: "#496FFF" }}>interface</span>{" "}
            d'administration
          </Typography>
          <Typography variant="h6" color="#292E50" gutterBottom>
            Vous arriverez ensuite sur une page spécifique sur laquelle vous
            seront demandés votre nom d'utilisateur et votre mot de passe. Vos
            identifiants (mis en place à la création de votre site internet)
            sont les suivants :​
          </Typography>
          <Box width={"100%"} maxWidth={"400px"}>
            <label htmlFor="identifier">Identifiant ou adresse mail</label>
            <input
              id="identifier"
              type="text"
              value={identifier}
              readOnly
              style={{
                width: "100%",
                padding: "8px",
                marginBottom: "16px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
            <label htmlFor="password">Mot de passe</label>
            <input
              id="password"
              type="password"
              value={password}
              readOnly
              style={{
                width: "100%",
                padding: "8px",
                marginBottom: "16px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Se souvenir de moi"
            />
            <Button variant="contained" color="primary">
              Se connecter
            </Button>
          </Box>
        </Stack>
      ) : (
        <img
          src={`/Guide WP pour youLead/Slide${page}.jpg`}
          alt={`Slide ${page}`}
          style={{ width: "100%", height: "auto" }}
        />
      )}

      <div
        style={{
          position: "absolute",
          left: "-9999px",
          opacity: 0,
          width: "841px",
          height: "595px",
        }}
      >
        <Stack
          ref={page5Ref}
          spacing={2}
          sx={{
            padding: "10px",
            margin: "auto",
            width: "100%",
            height: "100%",
            bgcolor: "#F0F5FE",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h3"
            color="#292E50"
            fontWeight={"bold"}
            gutterBottom
          >
            Votre <span style={{ color: "#496FFF" }}>interface</span>{" "}
            d'administration
          </Typography>
          <Typography variant="h6" color="#292E50" gutterBottom>
            Vous arriverez ensuite sur une page spécifique sur laquelle vous
            seront demandés votre nom d'utilisateur et votre mot de passe. Vos
            identifiants (mis en place à la création de votre site internet)
            sont les suivants :​
          </Typography>
          <Box width={"100%"} maxWidth={"400px"}>
            <label htmlFor="identifier">Identifiant ou adresse mail</label>
            <br />
            <input
              id="identifier"
              type="text"
              value={identifier}
              style={{
                width: "100%",
                padding: "8px",
                marginBottom: "16px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
            <label htmlFor="password">Mot de passe</label>
            <br />
            <input
              id="password"
              type="text"
              value={password}
              style={{
                width: "100%",
                padding: "8px",
                marginBottom: "16px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Se souvenir de moi"
            />
            <Button variant="contained" color="primary">
              Se connecter
            </Button>
          </Box>
        </Stack>
      </div>

      <Stack
        spacing={2}
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          bgcolor: "white",
          p: 2,
          boxShadow: 3,
        }}
      >
        <Pagination
          count={14}
          page={page}
          onChange={(event, value) => setPage(value)}
          renderItem={(item) => (
            <PaginationItem
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
        />
      </Stack>
    </div>
  );
};

export default GuideYoulead;
