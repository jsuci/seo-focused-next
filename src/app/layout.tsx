import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "My Awesome Blog",
    template: "%s - My Awesome Blog",
  },
  description:
    "This is a sample description of my awesome blog. You can also set dynamic description base on what page you are on.",
  keywords: ["keyword1", "keyword2"],
  twitter: {
    card: "summary_large_image",
    site: "@site",
    creator: "@creator",
    images: "https://example.com/og.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-XYZ" />
      <body className={inter.className}>
        <Header />
        <main className="p-5">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
