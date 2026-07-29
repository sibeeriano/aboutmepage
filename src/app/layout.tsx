import type { Metadata, Viewport } from "next";
import { Archivo_Black, Space_Grotesk } from "next/font/google";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-head",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "sib.dev",
  description:
    "Portfolio de Facundo Vara, Software Engineer especializado en productos web, sistemas enterprise e integraciones para banca y fintech.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "Angular",
    "C# .NET",
    "Java",
    "Next.js",
    "Buenos Aires",
  ],
  authors: [{ name: "Facundo Gabriel Vara" }],
  creator: "Facundo Gabriel Vara",
  openGraph: {
    type: "website",
    locale: "es_AR",
    title: "Facundo Vara | Software Engineer",
    description: "Software confiable para operaciones reales.",
    images: [
      {
        url: "/og.png",
        width: 1731,
        height: 909,
        alt: "Portfolio de Facundo Vara, Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Facundo Vara | Software Engineer",
    description: "Software confiable para operaciones reales.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Facundo Gabriel Vara",
  jobTitle: "Software Engineer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Buenos Aires",
    addressCountry: "AR",
  },
  sameAs: [
    "https://www.linkedin.com/in/facuvara",
    "https://github.com/sibeeriano",
  ],
  knowsAbout: [
    "Angular",
    "C# .NET",
    "Java",
    "Spring Boot",
    "Next.js",
    "TypeScript",
    "SQL Server",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${archivoBlack.variable} ${spaceGrotesk.variable} overflow-x-hidden font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
