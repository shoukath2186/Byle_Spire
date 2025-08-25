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


  title: "ByteSpire Innovations Pvt. Ltd | Digital Solutions & IT Services",
  description:
    "ByteSpire Innovations Pvt. Ltd is a product and service-based IT company offering web development, mobile app development, and digital solutions. We empower businesses with cutting-edge technology and innovative software solutions.",
  keywords: [
    "ByteSpire Innovations",
    "Byte Spire",
    "IT company",
    "web development",
    "mobile app development",
    "digital solutions",
    "software development",
    "UI/UX design",
    "cloud solutions",
    "IT services in India",
  ],
  authors: [{ name: "ByteSpire Innovations Pvt. Ltd", url: "https://bytespire.in" }],
  alternates: {
    canonical: "https://bytespire.in/",
  },
  openGraph: {
    title: "ByteSpire Innovations Pvt. Ltd | Building Digital Solutions, One Byte at a Time",
    description:
      "ByteSpire Innovations Pvt. Ltd delivers high-quality web, mobile, and digital solutions to empower businesses with technology.",
    url: "https://bytespire.in/",
    siteName: "ByteSpire Innovations Pvt. Ltd",
    type: "website",
    images: [
      {
        url: "https://bytespire.in/logo.png", // replace with your actual logo path
        width: 800,
        height: 600,
        alt: "ByteSpire Innovations Pvt. Ltd Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ByteSpire Innovations Pvt. Ltd | Digital IT Solutions",
    description:
      "Empowering businesses with web development, mobile apps, and digital solutions.",
    images: ["https://bytespire.in/logo.png"],
  },


  icons: {
    icon: "/logo.svg",  // ✅ correct way
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <main className="min-h-screen">{children}</main>

      </body>
    </html>
  );
}
