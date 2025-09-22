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
import { Box, Container, Divider } from "@mui/material";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const GuideCohérence = () => {
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
      let isFirstPage = true;

      for (let i = 1; i <= 14; i++) {
        if (i === 5) {
          const canvas = await html2canvas(page5Ref.current, {
            scale: 3,
            useCORS: true,
            backgroundColor: "#F0F5FE",
          });
          const dataURL = canvas.toDataURL("image/png");

          if (!isFirstPage) {
            pdf.addPage([297, 210]); // Format A4 paysage pour la page 5
          }
          pdf.addImage(dataURL, "PNG", 0, 0, 297, 210);
          isFirstPage = false;
        } else {
          const img = new Image();
          img.crossOrigin = "anonymous";
          img.src = `/GUIDE WP COHERENCE/Slide${i}.jpg`;
          await new Promise((resolve) => {
            img.onload = resolve;
          });

          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          canvas.width = img.naturalWidth;
          canvas.height = img.naturalHeight;
          ctx.drawImage(img, 0, 0);
          const dataURL = canvas.toDataURL("image/jpeg");

          // Calculer la hauteur de page optimale pour éviter la déformation
          const pageWidth = 297; // largeur A4 paysage en mm
          const imgAspect = img.naturalWidth / img.naturalHeight;
          const pageHeight = pageWidth / imgAspect; // hauteur calculée pour maintenir le ratio

          if (!isFirstPage) {
            pdf.addPage([pageWidth, pageHeight]);
          } else {
            // Définir la taille de la première page
            pdf.internal.pageSize.width = pageWidth;
            pdf.internal.pageSize.height = pageHeight;
          }

          // Ajouter l'image sans déformation
          pdf.addImage(dataURL, "JPEG", 0, 0, pageWidth, pageHeight);
          isFirstPage = false;
        }
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

      <Divider sx={{ my: 3 }} />

      <Container maxWidth="md">
        {page === 5 ? (
          <div
            style={{
              padding: "40px 20px",
              margin: "auto",
              width: "100%",
              minHeight: "80vh",
              backgroundColor: "#F0F5FE",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                textAlign: "center",
                marginBottom: "40px",
                maxWidth: "800px",
              }}
            >
              <h1
                style={{
                  fontSize: "48px",
                  fontWeight: "bold",
                  color: "#292E50",
                  marginBottom: "30px",
                }}
              >
                Votre <span style={{ color: "#496FFF" }}>interface</span>{" "}
                d'administration
              </h1>

              <p
                style={{
                  fontSize: "18px",
                  color: "#292E50",
                  lineHeight: "1.6",
                  marginBottom: "0",
                }}
              >
                Vous arriverez ensuite sur une page spécifique sur laquelle vous
                seront demandés votre nom d'utilisateur et votre mot de passe.
                Vos identifiants (mis en place à la création de votre site
                internet) sont les suivants :
              </p>
            </div>

            <div
              style={{
                width: "100%",
                maxWidth: "500px",
                backgroundColor: "white",
                padding: "40px",
                borderRadius: "12px",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div style={{ marginBottom: "24px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "16px",
                    color: "#292E50",
                    marginBottom: "8px",
                    fontWeight: "500",
                  }}
                >
                  Identifiant ou adresse mail
                </label>
                <input
                  type="text"
                  value={identifier}
                  readOnly
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "2px solid #e1e5e9",
                    borderRadius: "8px",
                    fontSize: "16px",
                    backgroundColor: "#f8f9fa",
                    color: "#292E50",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <div style={{ marginBottom: "24px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "16px",
                    color: "#292E50",
                    marginBottom: "8px",
                    fontWeight: "500",
                  }}
                >
                  Mot de passe
                </label>
                <input
                  type="password"
                  value={password}
                  readOnly
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "2px solid #e1e5e9",
                    borderRadius: "8px",
                    fontSize: "16px",
                    backgroundColor: "#f8f9fa",
                    color: "#292E50",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "16px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    id="remember-web"
                    style={{
                      marginRight: "8px",
                      transform: "scale(1.2)",
                    }}
                  />
                  <label
                    htmlFor="remember-web"
                    style={{
                      fontSize: "16px",
                      color: "#292E50",
                    }}
                  >
                    Se souvenir de moi
                  </label>
                </div>

                <button
                  style={{
                    padding: "12px 32px",
                    backgroundColor: "#007bff",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "16px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                  }}
                >
                  Se connecter
                </button>
              </div>
            </div>
          </div>
        ) : (
          <img
            src={`/GUIDE WP COHERENCE/Slide${page}.jpg`}
            alt={`Slide ${page}`}
            style={{ width: "100%", height: "auto" }}
          />
        )}

        <div
          style={{
            position: "absolute",
            left: "-9999px",
            opacity: 0,
            width: "297mm",
            height: "210mm",
          }}
        >
          <div
            ref={page5Ref}
            style={{
              width: "297mm",
              height: "210mm",
              background: "#F0F5FE",
              padding: "15mm 20mm",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                textAlign: "center",
                marginBottom: "20mm",
                width: "100%",
              }}
            >
              <h1
                style={{
                  fontSize: "20pt",
                  fontWeight: "bold",
                  color: "#292E50",
                  margin: "0 0 8mm 0",
                }}
              >
                Votre <span style={{ color: "#496FFF" }}>interface</span>{" "}
                d'administration
              </h1>

              <p
                style={{
                  fontSize: "11pt",
                  color: "#292E50",
                  margin: "0",
                  lineHeight: "1.3",
                  maxWidth: "180mm",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                Vous arriverez ensuite sur une page spécifique sur laquelle vous
                seront demandés votre nom d'utilisateur et votre mot de passe.
                Vos identifiants (mis en place à la création de votre site
                internet) sont les suivants :
              </p>
            </div>

            <div
              style={{
                width: "100mm",
                backgroundColor: "white",
                padding: "12mm",
                borderRadius: "3mm",
                boxShadow: "0 2mm 8mm rgba(0, 0, 0, 0.1)",
              }}
            >
              <div style={{ marginBottom: "6mm" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "9pt",
                    color: "#292E50",
                    marginBottom: "2mm",
                    fontWeight: "500",
                  }}
                >
                  Identifiant ou adresse mail
                </label>
                <input
                  type="text"
                  value={identifier}
                  readOnly
                  style={{
                    width: "100%",
                    padding: "2.5mm 3mm",
                    border: "1px solid #ccc",
                    borderRadius: "2mm",
                    fontSize: "24px",
                    backgroundColor: "#f9f9f9",
                    color: "#292E50",
                    boxSizing: "border-box",
                    transform: "scale(1.0)",
                  }}
                />
              </div>

              <div style={{ marginBottom: "6mm" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "9pt",
                    color: "#292E50",
                    marginBottom: "2mm",
                    fontWeight: "500",
                    marginTop: "3mm",
                  }}
                >
                  Mot de passe
                </label>
                <input
                  type="text"
                  value={password}
                  readOnly
                  style={{
                    width: "100%",
                    padding: "2.5mm 3mm",
                    border: "1px solid #ccc",
                    borderRadius: "2mm",
                    fontSize: "24px",
                    backgroundColor: "#f9f9f9",
                    color: "#292E50",
                    boxSizing: "border-box",
                    transform: "scale(1.0)",
                  }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "0",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    id="remember-pdf"
                    style={{
                      marginRight: "2mm",
                      transform: "scale(1.0)",
                    }}
                  />
                  <label
                    htmlFor="remember-pdf"
                    style={{
                      fontSize: "10px",
                      color: "#292E50",
                    }}
                  >
                    Se souvenir de moi
                  </label>
                </div>

                <button
                  style={{
                    padding: "2.5mm 6mm",
                    backgroundColor: "#28a745",
                    color: "white",
                    border: "none",
                    borderRadius: "2mm",
                    fontSize: "10px",
                    fontWeight: "600",
                    cursor: "pointer",
                    marginLeft: "3mm",
                  }}
                >
                  Se connecter
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
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
          textAlign: "center",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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

export default GuideCohérence;
