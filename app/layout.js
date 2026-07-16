import "@fontsource-variable/plus-jakarta-sans";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://kashio.pk"),
  title: "Kashio | Your City, Delivered Across Kotli",
  description:
    "Food, groceries, medicines, and parcels delivered across Kotli by friendly local riders.",
  openGraph: {
    title: "Kashio | Your City, Delivered Across Kotli",
    description:
      "Food, groceries, medicines, and parcels delivered across Kotli.",
    type: "website",
    locale: "en_PK",
    images: [
      {
        url: "/images/og-kashio.webp",
        width: 1200,
        height: 630,
        alt: "Kashio delivery landing page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kashio | Your City, Delivered Across Kotli",
    description:
      "Food, groceries, medicines, and parcels delivered across Kotli.",
    images: ["/images/og-kashio.webp"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f1fcf2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
