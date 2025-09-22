import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Weshore - Générateur de Guides WordPress",
  description: "Créez facilement des guides personnalisés pour vos clients WordPress avec Weshore. Interface intuitive pour générer des PDFs professionnels.",
  keywords: "WordPress, guide, PDF, générateur, Weshore, tutoriel, documentation",
  authors: 'Yelmouss',
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Weshore - Générateur de Guides WordPress",
    description: "Créez facilement des guides personnalisés pour vos clients WordPress",
    type: "website",
    siteName: "Weshore"
  },
  twitter: {
    card: "summary_large_image",
    title: "Weshore - Générateur de Guides WordPress",
    description: "Créez facilement des guides personnalisés pour vos clients WordPress"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/weshore-logo.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2dd4bf" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div style={{ position: "relative", minHeight: "100vh" }}>
          {/* Logo Weshore en haut à droite */}
          <div style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            zIndex: 9999,
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            borderRadius: "8px",
            padding: "8px 12px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            display: "flex",
            alignItems: "center",
            gap: "8px"
          }}>
            <div style={{
              width: "24px",
              height: "24px",
              background: "linear-gradient(135deg, #2dd4bf 0%, #0891b2 100%)",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <span style={{
                color: "white",
                fontSize: "12px",
                fontWeight: "bold"
              }}>
                W
              </span>
            </div>
            <span style={{
              fontSize: "14px",
              fontWeight: "600",
              color: "#1f2937",
              fontFamily: "system-ui, -apple-system, sans-serif"
            }}>
              weshore
            </span>
          </div>
          
          {children}
        </div>
      </body>
    </html>
  );
}
