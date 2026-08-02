import type { Metadata } from "next";
import { Fredoka, Poppins, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rainbowsprouts.in"),
  alternates: {
    canonical: "https://rainbowsprouts.in",
  },
  title: {
    default: "Rainbow Sprouts Daycare & Playschool | Sector 10 Gurgaon",
    template: "%s | Rainbow Sprouts Daycare",
  },
  description: "Premier daycare & playschool in Sector 10, Gurgaon with live CCTV access, home-cooked meals, 1:8 teacher ratio, and experienced mentors.",
  keywords: [
    "Daycare Gurgaon",
    "Playschool Sector 10 Gurgaon",
    "Preschool Gurgaon",
    "Rainbow Sprouts",
    "Best Daycare Sector 10 Gurgaon",
    "Childcare Sector 10",
  ],
  openGraph: {
    title: "Rainbow Sprouts Daycare & Playschool | Sector 10 Gurgaon",
    description: "Premier daycare & playschool in Sector 10, Gurgaon with live CCTV access, home-cooked meals, 1:8 teacher ratio, and experienced mentors.",
    url: "https://rainbowsprouts.in",
    siteName: "Rainbow Sprouts Daycare",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rainbow Sprouts Daycare & Playschool | Sector 10 Gurgaon",
    description: "Premier daycare & playschool in Sector 10, Gurgaon with live CCTV access, home-cooked meals, 1:8 teacher ratio, and experienced mentors.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fredoka.variable} ${poppins.variable} ${playfair.variable} antialiased font-body bg-background text-gray-700 flex flex-col min-h-screen`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BYXSYDPQN0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-BYXSYDPQN0');
          `}
        </Script>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
