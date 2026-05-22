import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OPPVENUZ - Trusted. Reviewed. Recommended.",
  description: "India's most trusted wedding vendor marketplace. Find verified vendors, venues, photographers, caterers and more.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className="text-gray-800 leading-relaxed">{children}</body>
    </html>
  );
}
