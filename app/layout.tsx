import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/header";
import Footer from "@/components/footer";
import Providers from "./queryprovider";

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

export const metadata: Metadata = {
  title: "Łukasz Sinica - Fullstack Developer",
  description: "Portfolio of Łukasz Sinica - Fullstack Developer",
  keywords: ["Łukasz Sinica", "Fullstack Developer",
     "Portfolio", "Web Development","JavaScript", "TypeScript", "React", 
     "Next.js", "Node.js", "Spring Boot", "Java", "SQL", "MongoDB", "Docker", 
     "CI/CD", "REST API", "GraphQL", "Microservices", "Software Engineer", "Web Developer",
     "App Development", "Frontend Developer", "Backend Developer", "Cloud Computing", "DevOps", 
     "Łukasz Sinica Projects", "Łukasz Sinica Portfolio", "Freelance Web Developer", "Hire a Fullstack Developer", 
     "Poland Web Developer", "European Fullstack Developer", "Sinica"],
  openGraph: {
    title: "Łukasz Sinica - Fullstack Developer",
    description: "Portfolio of Łukasz Sinica - Fullstack Developer",
    images: [
      {
        url: "/face.jpg",
        width: 800,
        height: 600,
        alt: "Łukasz Sinica - Fullstack Developer",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
         <Providers>
          <Header/>
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
