import { Inter } from "next/font/google";
import "./globals.css";
import Navebar from "@/components/Navebar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Start Your Driving Journey",
  description: "Convenient, personalized driving lessons at your doorstep.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <meta
        name="description"
        content="TechDrive offers personalized driving lessons at your convenience with expert instructors."
      />
      <meta
        name="keywords"
        content="driving school, learn driving, personal driving instructor, driving lessons at home"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        property="og:title"
        content="TechDrive - Start Your Driving Journey"
      />
      <meta
        property="og:description"
        content="Learn driving from expert instructors at your doorstep."
      />
      <meta property="og:url" content="https://techdriveapp.in" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="TechDrive - Start Your Driving Journey"
      />
      <meta
        name="twitter:description"
        content="Convenient, personalized driving lessons at your doorstep."
      />
      <body className={inter.className}>
        <Navebar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
