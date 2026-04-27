import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Local Travel Booking | India Tour Packages",
  description:
    "Local Travel Booking offers the best tour packages across India. Book Rajasthan, Kerala, Kashmir, Goa, Ladakh, Uttarakhand, Andaman and more. Call +91-7905793493",
  metadataBase: new URL("https://localtravelbooking.in"),
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
