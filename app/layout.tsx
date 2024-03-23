import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Nav from "./components/Home/Nav";
import ClientProvider from "./components/Hoc/ClientProvider";

const inter = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ['200', '300', '400', '600', '700', '800']
});

export const metadata: Metadata = {
  title: "Jobify | Find your Dream Job",
  description: "Find Your Dream Job",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClientProvider>
      <html lang="en">
        <body className={inter.className}>
          <Nav />
          {children}</body>
      </html>
    </ClientProvider>
  );
}
