import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Sanath Palakkal | VLSI Engineer, Researcher, Founder",
  description:
    "Personal portfolio of Sanath Palakkal, an MSc Applied Physics student specializing in VLSI, researcher, startup founder, and student leader.",
  keywords: [
    "Sanath Palakkal",
    "VLSI",
    "Applied Physics",
    "Digital University Kerala",
    "Analog IC Design",
    "ASIC Design",
    "Exploring Unexplored Kerala",
  ],
  authors: [{ name: "Sanath Palakkal" }],
  openGraph: {
    title: "Sanath Palakkal",
    description:
      "Building reliable hardware, meaningful software, and technology that solves real-world problems.",
    type: "website",
    images: ["/images/startup-kerala.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}