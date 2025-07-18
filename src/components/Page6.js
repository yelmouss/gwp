import { Container } from "@mui/material";
import useResponsiveDesign from "../hooks/useResponsiveDesign";

const Page6 = ({ identifiantWp, motDePasseWp }) => {
  const { deviceType, getPdfOptimizedStyles } = useResponsiveDesign();
  const responsiveStyles = getPdfOptimizedStyles();
  const isMobile = deviceType === 'mobile';
  const isTablet = deviceType === 'tablet';
  const isDesktop = deviceType === 'desktop';
  
  // Détecter le mode PDF export
  const isPdfExport = typeof window !== 'undefined' && 
    (document.body.classList.contains('pdf-export') || 
     document.querySelector('.pdf-export') !== null);
  
  return (
    <>
      <Container
        id="page6-container"
        maxWidth="xl"
        sx={{
          backgroundImage: "url('/backgrounds/page5.png')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "50vh",
          width: "100%",
          minHeight: "400px", // Hauteur minimale cohérente avec Page5
          maxHeight: "600px", // Hauteur maximale pour éviter le débordement
          aspectRatio: "1.414", // Ratio A4 paysage
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center", // Centre le contenu comme Page5
          position: "relative",
          // Styles spécifiques pour l'impression/PDF
          "@media print": {
            height: "210mm",
            width: "297mm",
            maxWidth: "none",
            margin: 0,
            padding: 0,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            pageBreakInside: "avoid",
          },
        }}
      >
 
        
        <div
          style={{
            width: "100%",
            maxWidth: "90%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: "1rem",
            padding: "20px",
            zIndex: 10,
          }}
        >
          <h2 
            className="font-bold z-10 text-left sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl"
            style={{
              color: "#292F51",
              textShadow: "2px 2px 4px rgba(255,255,255,0.8)",
              maxWidth: "100%",
              wordBreak: "break-word",
              marginBottom: "0.5rem",
              marginLeft: "5%", // Alignement comme Page5
              position: "relative",
              zIndex: 10,
              fontSize: isPdfExport ? '3rem' : undefined // Même taille que Page 5
            }}
          >
            Votre interface d&apos;administration
          </h2>
          
          <div
            style={{
              marginLeft: "5%",
              maxWidth: "85%",
              maxHeight: "50vh",
              overflowY: "auto",
              paddingRight: "8px",
              marginBottom: "1rem"
            }}
          >
            <p 
              className="text-left"
              style={{
                fontSize: isPdfExport ? '1rem' : (deviceType === 'mobile' ? '0.60rem' : deviceType === 'tablet' ? '0.65rem' : '0.7rem'), // Même taille que Page 5
                color: "#444",
                lineHeight: "1.4",
                textAlign: "justify",
                marginBottom: "1rem",
                textShadow: "1px 1px 2px rgba(255,255,255,0.8)",
              }}
            >
              Vous arriverez ensuite sur une page spécifique sur laquelle, vous
              seront demandés votre nom d&apos;utilisateur et votre mot de passe. Vos
              identifiants (mis en place à la création de votre site internet)
              sont les suivants :
            </p>
            
            {/* Formulaire de connexion */}
            <div style={{
              width: isPdfExport ? '384px' : (isMobile ? '200px' : isTablet ? '250px' : '300px'), // Agrandi: était 100/125/150px
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              padding: isPdfExport ? '26px' : (isMobile ? '0.8rem' : isTablet ? '1rem' : '1.2rem'), // Agrandi: était 0.4/0.5/0.6rem
              borderRadius: isPdfExport ? '5px' : '0.5rem', // Agrandi: était 0.25rem
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
              margin: '0 auto',
              border: isPdfExport ? '2px solid #d1d5db' : '1px solid #d1d5db' // Bordure plus visible
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: isPdfExport ? '16px' : (isMobile ? '0.6rem' : isTablet ? '0.7rem' : '0.8rem') }}> {/* Agrandi: était 0.3/0.35/0.4rem */}
                <div style={{ width: '100%' }}>
                  <label style={{
                    display: 'block',
                    color: '#374151',
                    fontSize: isPdfExport ? '16px' : (isMobile ? '0.7rem' : isTablet ? '0.8rem' : '0.9rem'), // Agrandi: était 0.325/0.375/0.4rem
                    fontWeight: 'bold',
                    marginBottom: isPdfExport ? '5px' : (isMobile ? '0.3rem' : isTablet ? '0.35rem' : '0.4rem') // Agrandi: était 0.1/0.125/0.15rem
                  }}>
                    Identifiant ou adresse e-mail
                  </label>
                  <div style={{
                    width: '100%',
                    padding: isPdfExport ? '13px 16px' : (isMobile ? '0.5rem 0.6rem' : isTablet ? '0.6rem 0.7rem' : '0.7rem 0.8rem'), // Agrandi: était 0.2/0.25/0.3rem
                    fontSize: isPdfExport ? '20px' : (isMobile ? '0.7rem' : isTablet ? '0.8rem' : '0.9rem'), // Agrandi: était 0.3/0.325/0.35rem
                    fontWeight: '600',
                    backgroundColor: 'white',
                    border: isPdfExport ? '2px solid #d1d5db' : '1px solid #d1d5db',
                    borderRadius: isPdfExport ? '4px' : '0.3rem', // Agrandi: était 0.15rem
                    color: '#1f2937',
                    minHeight: isPdfExport ? '38px' : (isMobile ? '24px' : isTablet ? '28px' : '32px'), // Agrandi: était 10/12/14px
                    display: 'flex',
                    alignItems: 'center',
                    boxSizing: 'border-box'
                  }}>
                    {identifiantWp || "Votre identifiant WordPress"}
                  </div>
                </div>
                
                <div style={{ width: '100%' }}>
                  <label style={{
                    display: 'block',
                    color: '#374151',
                    fontSize: isPdfExport ? '16px' : (isMobile ? '0.7rem' : isTablet ? '0.8rem' : '0.9rem'), // Agrandi: était 0.325/0.375/0.4rem
                    fontWeight: 'bold',
                    marginBottom: isPdfExport ? '5px' : (isMobile ? '0.3rem' : isTablet ? '0.35rem' : '0.4rem') // Agrandi: était 0.1/0.125/0.15rem
                  }}>
                    Mot de passe
                  </label>
                  <div style={{
                    width: '100%',
                    padding: isPdfExport ? '13px 16px' : (isMobile ? '0.5rem 0.6rem' : isTablet ? '0.6rem 0.7rem' : '0.7rem 0.8rem'), // Agrandi: était 0.2/0.25/0.3rem
                    fontSize: isPdfExport ? '20px' : (isMobile ? '0.7rem' : isTablet ? '0.8rem' : '0.9rem'), // Agrandi: était 0.3/0.325/0.35rem
                    fontWeight: '600',
                    backgroundColor: 'white',
                    border: isPdfExport ? '2px solid #d1d5db' : '1px solid #d1d5db',
                    borderRadius: isPdfExport ? '4px' : '0.3rem', // Agrandi: était 0.15rem
                    color: '#1f2937',
                    minHeight: isPdfExport ? '38px' : (isMobile ? '24px' : isTablet ? '28px' : '32px'), // Agrandi: était 10/12/14px
                    display: 'flex',
                    alignItems: 'center',
                    boxSizing: 'border-box'
                  }}>
                    {motDePasseWp || "Votre mot de passe WordPress"}
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: isPdfExport ? '8px' : '0.4rem' }}> {/* Agrandi: était 0.2rem */}
                  <div style={{
                    backgroundColor: '#2563eb',
                    width: isPdfExport ? '13px' : (isMobile ? '0.8rem' : '1rem'), // Agrandi: était 0.35/0.4rem
                    height: isPdfExport ? '13px' : (isMobile ? '0.8rem' : '1rem'), // Agrandi: était 0.35/0.4rem
                    borderRadius: isPdfExport ? '2px' : '0.15rem', // Agrandi: était 0.075rem
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <svg style={{ 
                      color: 'white', 
                      width: isPdfExport ? '8px' : (isMobile ? '0.5rem' : '0.6rem'), // Agrandi: était 0.2/0.25rem
                      height: isPdfExport ? '8px' : (isMobile ? '0.5rem' : '0.6rem') // Agrandi: était 0.2/0.25rem
                    }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <label style={{
                    color: '#374151',
                    fontSize: isPdfExport ? '11px' : (isMobile ? '0.7rem' : isTablet ? '0.75rem' : '0.8rem'), // Agrandi: était 0.3/0.325/0.35rem
                    fontWeight: '600'
                  }}>
                    Se souvenir de moi
                  </label>
                </div>
                
                <button
                  type="button"
                  style={{
                    width: '100%',
                    backgroundColor: '#10b981',
                    color: 'white',
                    fontSize: isPdfExport ? '14px' : (isMobile ? '0.8rem' : isTablet ? '0.9rem' : '1rem'), // Agrandi: était 0.35/0.4/0.45rem
                    fontWeight: 'bold',
                    padding: isPdfExport ? '13px 19px' : (isMobile ? '0.6rem 0.8rem' : isTablet ? '0.7rem 1rem' : '0.8rem 1.2rem'), // Agrandi: était 0.25/0.3/0.35rem
                    borderRadius: isPdfExport ? '4px' : '0.3rem', // Agrandi: était 0.15rem
                    border: 'none',
                    cursor: 'pointer',
                    minHeight: isPdfExport ? '38px' : (isMobile ? '32px' : isTablet ? '36px' : '40px') // Agrandi: était auto
                  }}
                >
                  Se connecter
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Page6;
