import type {Metadata} from "next";
import "./globals.css";
import Footer from "../components/home/footer/footer";
import {Toaster} from "@/components/ui/sonner";
import {NuqsAdapter} from 'nuqs/adapters/next/app';
import {geistSans, montserrat, noto} from "@/config/fonts";
import {siteConfig} from "@/config";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
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
        className={`${geistSans.variable} ${noto.variable} ${montserrat.variable} antialiased`}
      >
        <NuqsAdapter>
          <main className="font-montserrat mx-auto">
            {children}
            <Footer />
          </main>
          <Toaster />
        </NuqsAdapter>
      </body>
    </html>
  );
}