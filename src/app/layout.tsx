import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

const siteUrl = "https://portofoliogm.vercel.app";
const title = "Gantang Masimuja, M.T. | Konsultan Geofisika & Geoteknik";
const description =
  "Investigasi bawah permukaan untuk pembangkit listrik, gedung, bendungan, jalan tol, dan kawasan industri: MASW, seismic downhole & crosshole, geolistrik/ERT, GPR, dan uji in-situ. Laboratorium Fisika Bumi ITB.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "konsultan geofisika",
    "survei geolistrik",
    "MASW",
    "seismic downhole",
    "seismic crosshole",
    "GPR",
    "deteksi rongga",
    "eksplorasi air tanah",
    "Vs30 kelas situs",
    "geoteknik",
    "ITB",
  ],
  authors: [{ name: "Gantang Masimuja" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    locale: "id_ID",
    url: siteUrl,
    siteName: "Gantang Masimuja",
    title,
    description,
  },
  twitter: { card: "summary", title, description },
};

export const viewport: Viewport = {
  themeColor: "#f4f6f5",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Gantang Masimuja",
  honorificSuffix: "M.T.",
  jobTitle: "Konsultan Geofisika dan Geoteknik",
  url: siteUrl,
  email: "mailto:gmasimuja@gmail.com",
  affiliation: {
    "@type": "Organization",
    name: "Laboratorium Fisika Bumi, Institut Teknologi Bandung",
  },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Institut Teknologi Bandung" },
  knowsAbout: [
    "MASW",
    "Seismic downhole",
    "Seismic crosshole",
    "Electrical resistivity tomography",
    "Ground penetrating radar",
    "Pressuremeter test",
    "Groundwater exploration",
  ],
  sameAs: ["https://www.linkedin.com/in/gantangmasimuja/", "https://github.com/gmasimuja"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${archivo.variable} antialiased`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
