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
    default: "Rainbow Sprouts | Daycare, Playschool, Preschool & Tuitions in Sector 10 Gurgaon",
    template: "%s | Rainbow Sprouts",
  },
  description: "Premier Daycare, Playschool, Preschool & Tuition Classes in Sector 10, Gurgaon. Live CCTV streaming, home-cooked fresh meals, 1:8 teacher ratio, and after-school academic support.",
  keywords: [
    "Daycare Gurgaon",
    "Daycare Sector 10 Gurgaon",
    "Best Daycare Sector 10 Gurgaon",
    "Playschool Gurgaon",
    "Playschool Sector 10 Gurgaon",
    "Best Playschool in Gurgaon",
    "Preschool Gurgaon",
    "Preschool Sector 10 Gurgaon",
    "Pre-school Gurgaon",
    "Best Preschool in Gurgaon",
    "Tuition classes Sector 10 Gurgaon",
    "Tuitions Sector 10 Gurgaon",
    "After school tuitions Gurgaon",
    "Tuitions near Sector 10",
    "Playgroup Gurgaon",
    "Nursery school Gurgaon",
    "Rainbow Sprouts",
    "Daycare and tuition classes Sector 10",
    "Childcare Sector 10 Gurgaon"
  ],
  openGraph: {
    title: "Rainbow Sprouts | Daycare, Playschool, Preschool & Tuitions | Sector 10 Gurgaon",
    description: "Premier Daycare, Playschool, Preschool & Tuition Classes in Sector 10, Gurgaon. Live CCTV streaming, home-cooked meals, 1:8 teacher ratio, and after-school academic support.",
    url: "https://rainbowsprouts.in",
    siteName: "Rainbow Sprouts Daycare, Playschool & Preschool",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rainbow Sprouts | Daycare, Playschool, Preschool & Tuitions | Sector 10 Gurgaon",
    description: "Premier Daycare, Playschool, Preschool & Tuition Classes in Sector 10, Gurgaon. Live CCTV streaming, home-cooked meals, 1:8 teacher ratio, and after-school academic support.",
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ChildCare", "Preschool", "LocalBusiness", "EducationalOrganization"],
      "@id": "https://rainbowsprouts.in/#organization",
      "name": "Rainbow Sprouts Daycare, Playschool, Preschool & Tuitions",
      "alternateName": ["Rainbow Sprouts", "Rainbow Sprouts Playschool", "Rainbow Sprouts Preschool"],
      "url": "https://rainbowsprouts.in",
      "logo": "https://rainbowsprouts.in/images/logo-full.png",
      "image": "https://rainbowsprouts.in/images/founder.png",
      "description": "Premier daycare, playschool, preschool (pre-school), and after-school tuition center in Sector 10, Gurgaon offering live CCTV access, home-cooked fresh meals, 1:8 teacher-child ratio, police-verified staff, and personalized academic coaching.",
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
        { "@type": "LocationFeatureSpecification", "name": "Indoor and Outdoor Play Area", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "School Tuitions & Academic Support", "value": true }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Programs and Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Playschool & Playgroup",
              "description": "Joyful play-based early learning and sensory development for toddlers aged 2 to 3 years."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Preschool & Nursery (Pre-school)",
              "description": "Comprehensive pre-school curriculum focusing on phonics, math, literacy, and school readiness for children aged 3+ years."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Daycare & Childcare",
              "description": "Flexible full-day and half-day daycare with live CCTV parent streaming and home-cooked fresh meals for children aged 1+ years."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "After-School Tuitions & Tuition Classes",
              "description": "Personalized school tuition classes, homework assistance, reading, writing, and conceptual coaching for primary school children."
            }
          }
        ]
      },
      "sameAs": [
        "https://www.instagram.com/rainbowsproutsdaycare_sec10ggn/",
        "https://www.facebook.com/profile.php?id=61555075214265"
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://rainbowsprouts.in/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does Rainbow Sprouts offer Playschool and Playgroup in Sector 10 Gurgaon?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Rainbow Sprouts offers a premier playschool and playgroup program in Sector 10, Gurgaon for children aged 2 to 3 years, focusing on language development, social bonding, and sensory play."
          }
        },
        {
          "@type": "Question",
          "name": "Does Rainbow Sprouts offer Preschool / Pre-school programs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Rainbow Sprouts provides structured preschool and pre-school (Nursery) education for children aged 3+ years, covering phonics, early numeracy, logical reasoning, and school readiness."
          }
        },
        {
          "@type": "Question",
          "name": "Are tuition classes and after-school academic help available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Rainbow Sprouts conducts after-school tuition classes and homework support for school-going children (ages 3 to 10 years), providing individual attention in school subjects, reading, and writing."
          }
        },
        {
          "@type": "Question",
          "name": "Where is Rainbow Sprouts located in Gurgaon?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Rainbow Sprouts Daycare & Playschool is located in Sector 10, Gurgaon (Gurugram), Haryana 122001, near Civil Hospital."
          }
        },
        {
          "@type": "Question",
          "name": "Does Rainbow Sprouts have live CCTV access for parents?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Rainbow Sprouts provides live, secure CCTV streaming access to parents on their smartphones throughout daycare and playschool hours."
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
          "name": "Are meals provided at Rainbow Sprouts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, fresh, nutritious, home-cooked vegetarian meals are prepared daily in-house according to pediatric nutritional guidelines."
          }
        },
        {
          "@type": "Question",
          "name": "How can parents book a tour of Rainbow Sprouts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Parents can book a school tour directly via WhatsApp on rainbowsprouts.in or by calling +91 81990 62496."
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
