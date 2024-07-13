import type { Metadata } from "next";
import "../styles/globals.css";
import NavBar from "@/components/Header/NavBar";
import Footer from "@/components/footer/Footer";
import { Providers } from "@/context";
import { Suspense } from "react";
import Loading from "./loading";
import Space from "@/components/Space";
import { AuthProvider } from "@/context/auth-context";


export const metadata: Metadata = {
  title: "Baselinks Academy",
  description:
    "Baselinks Academy is a robust, user-friendly online learning platform designed to empower individuals by providing access to in-demand creative and technical skills. As Baselinks' flagship tool, it democratizes education and supports aspiring learners with a comprehensive course library, interactive learning experiences, and community features.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AuthProvider>
      <Providers>
        <body
          style={{ overflowX: "hidden", msOverflowX: "hidden" }}
          className="scroll-smooth w-full overflow-x-hidden mt-10 bg-white antialiased"
        >
          <NavBar />
          
          <Space border=" h-[2rem] md:h-[5rem] lg:h-[3.8rem] xs:h-[7rem]" />
          {children}
          <Space border=" h-[2rem] md:h-[5rem] lg:h-[3.8rem] xs:h-[7rem]" />

                          <Footer />
        </body>
      </Providers>
      </AuthProvider>
    </html>
  );
}
