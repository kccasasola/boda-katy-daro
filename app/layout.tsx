import type { Metadata } from "next";
import { Cinzel, Cinzel_Decorative, Lora } from "next/font/google";
import "./globals.css";

// Fuentes reales relevadas del sitio original en Wix, confirmadas por
// elementFromPoint sobre el sitio renderizado (ver CLAUDE_CODE_BRIEF.md):
// Cinzel Decorative Bold para el título del Hero, Cinzel (no decorative)
// para los títulos de sección.
const bodyFont = Cinzel_Decorative({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const headingFont = Cinzel({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "700"],
});

// ⚠️ Mejora UX/UI (rama ux-ui-improvements): Cinzel Decorative es una
// fuente de versalitas pensada para poco texto — usarla en párrafos
// largos (Intro, Dress Code, labels del formulario) cansa la lectura.
// Lora es una serif legible que mantiene el aire elegante para el
// cuerpo de texto largo, sin tocar los títulos/etiquetas decorativas.
const readableFont = Lora({
  variable: "--font-readable",
  subsets: ["latin"],
});

const TITLE = "Katya & Dario | Nos Casamos";
const DESCRIPTION = "Acompañanos a celebrar la boda de Katya y Dario.";

// ⚠️ PENDIENTE: la imagen de Hero (1280x853) es un placeholder para la
// preview social — no tiene el aspect ratio ideal de Open Graph
// (1200x630). Reemplazar por una imagen dedicada cuando el cliente
// defina las fotos finales. También falta `metadataBase` con el
// dominio real una vez que el sitio tenga uno (ver CLAUDE_CODE_BRIEF.md).
const SOCIAL_IMAGE = {
  url: "/images/hero.jpg",
  width: 1280,
  height: 853,
  alt: "Katya & Dario",
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "es_AR",
    images: [SOCIAL_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [SOCIAL_IMAGE.url],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${bodyFont.variable} ${headingFont.variable} ${readableFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
