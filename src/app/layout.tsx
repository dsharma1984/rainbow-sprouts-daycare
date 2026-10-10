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

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ChildCare", "LocalBusiness", "EducationalOrganization"],
      "@id": "https://rainbowsprouts.in/#organization",
      "name": "Rainbow Sprouts Daycare & Playschool",
      "alternateName": "Rainbow Sprouts",
      "url": "https://rainbowsprouts.in",
      "logo": "https://rainbowsprouts.in/images/logo-full.png",
      "image": "https://rainbowsprouts.in/images/founder.png",
      "description": "Premier daycare and playschool in Sector 10, Gurgaon offering live CCTV access, home-cooked fresh meals, 1:8 teacher-child ratio, police-verified staff, and holistic learning programs for ages 1 to 5+.",
      "telephone": "+918199062496",
      "priceRange": "$$",
      "currenciesAccepted": "INR",
      "paymentAccepted": "Cash, UPI, Bank Transfer",
      "founder": {
        "@type": "Person",
        "name": "Kamini Rajotia",
        "jobTitle": "Founder & Principal",
        "description": "B.Ed and TEFL certified educator with MBA and UGC-NET qualification with over 10 years experience."
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sector 10",
        "addressLocality": "Gurgaon",
        "addressRegion": "Haryana",
        "postalCode": "122001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 28.4595,
        "longitude": 77.0266
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "08:30",
          "closes": "19:00"
        }
      ],
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "Live CCTV Access for Parents", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Fresh Home-Cooked Meals", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "1:8 Teacher to Student Ratio", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Police Verified Staff", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Indoor and Outdoor Play Area", "value": true }
      ],
      "sameAs": [
        "https://www.instagram.com/rainbowsproutsdaycare"
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://rainbowsprouts.in/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where is Rainbow Sprouts Daycare located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Rainbow Sprouts Daycare & Playschool is located in Sector 10, Gurgaon (Gurugram), Haryana 122001."
          }
        },
        {
          "@type": "Question",
          "name": "Does Rainbow Sprouts have live CCTV access for parents?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Rainbow Sprouts provides live, secure CCTV streaming access to parents on their smartphones throughout daycare hours."
          }
        },
        {
          "@type": "Question",
          "name": "What is the teacher-to-child ratio at Rainbow Sprouts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Rainbow Sprouts maintains a low 1:8 teacher-to-child ratio ensuring personalized care, safety, and focused attention."
          }
        },
        {
          "@type": "Question",
          "name": "What age groups are accepted at Rainbow Sprouts Daycare?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Rainbow Sprouts caters to children aged 1 to 5+ years across Toddler (1-2 yrs), Playgroup (2-3 yrs), Nursery (3+ yrs), and Daycare & After School care."
          }
        },
        {
          "@type": "Question",
          "name": "Are meals provided at Rainbow Sprouts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, fresh, nutritious, home-cooked vegetarian meals are prepared daily in-house according to pediatric nutritional guidelines."
          }
        },
        {
          "@type": "Question",
          "name": "How can parents book a tour of Rainbow Sprouts Daycare?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Parents can book a tour directly via WhatsApp on rainbowsprouts.in or by calling +91 81990 62496."
          }
        }
      ]
    }
  ]
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
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
