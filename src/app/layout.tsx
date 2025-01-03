import "./globals.css";
import { Metadata } from "next";
import Providers from "./Provider";

export const metadata: Metadata = {
  title: "AA Glam Store",
  description: "Ayesha's Glam Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.jpg" /> {/* Optional, for favicon */}
      </head>
      <body className={`bg-myWhite antialiased`}>
        <div className="mx-auto">
          <Providers>
            {/* Example of adding an image in your layout */}
            
            {children}
          </Providers>
        </div>
      </body>
    </html>
  );
}
