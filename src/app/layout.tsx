import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Poly } from "next/font/google";
import Navbar from "@/components/atomics/navbar.module";
import "./globals.css";
import Footer from "@/components/atomics/footer.module";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const poly = Poly({
  variable: "--font-poly",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Breww Blissful Coffee",
  description: "Get your perfect brew with us!",
  icons: {
    icon: "/logonav.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jakartaSans.variable} ${poly.variable} font-sans antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
