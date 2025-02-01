import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from "next/image";

// Custom Fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata
export const metadata = {
  title: "Swastik Pathology",
  description:
    "Swastik Pathology Lab founded by Reeta Kataruka and co-founder Vijay Kataruka, located at Jay Tower, Kailash Market, Chhatrapati Sambhaji Nagar.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "icon", type: "image/png", sizes: "32x32", url: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", url: "/favicon-16x16.png" },
    ],
  },
};

// RootLayout Component
export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {/* Loading Screen */}
          <ClerkLoading>
            <div
              className="flex items-center text-white text-3xl justify-center min-h-screen"
              aria-label="Loading"
            >
              <Image
                src="/loading-3692.gif"
                alt="Loading..."
                width={200}
                height={200}
                unoptimized
              />
            </div>
          </ClerkLoading>

          {/* Main Content */}
          <ClerkLoaded>
            <div className="min-h-screen flex flex-col bg-[#E8F0F8]">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </ClerkLoaded>
        </body>
      </html>
    </ClerkProvider>
  );
}
