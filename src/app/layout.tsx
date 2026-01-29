import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Nishara | Join the Waitlist",
  description: "Be the first to experience Nishara — an exclusive platform designed to empower and inspire women. Join our waitlist for early access and special benefits.",
  keywords: ["Nishara", "women empowerment", "exclusive platform", "waitlist", "early access"],
  authors: [{ name: "Nishara" }],
  openGraph: {
    title: "Nishara | Join the Waitlist",
    description: "Be the first to experience Nishara — an exclusive platform designed to empower and inspire women.",
    type: "website",
    locale: "en_US",
    siteName: "Nishara",
    images: ["/Nishara_Thumbnail.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nishara | Join the Waitlist",
    description: "Be the first to experience Nishara — an exclusive platform designed to empower and inspire women.",
    images: ["/Nishara_Thumbnail.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/Nishara_Logo.png",
    apple: "/Nishara_Logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#fff1f2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
