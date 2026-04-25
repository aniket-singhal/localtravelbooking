import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Local Travel Booking | Tour Packages India & International",
  description:
    "Local Travel Booking offers best tour packages across India and International destinations. Book Rajasthan, Kerala, Kashmir, Dubai, Bali, Thailand and more. Call +91-7905793493",
  metadataBase: new URL("https://localtravelbooking.in"),
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
