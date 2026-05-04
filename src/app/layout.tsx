import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Raleway } from "next/font/google";
import { Manrope } from "next/font/google";
import { DM_Sans } from "next/font/google";
import { Mulish } from "next/font/google";
import { Poppins } from "next/font/google";
import { Public_Sans } from "next/font/google";
import { Figtree } from "next/font/google";



export const metadata: Metadata = {
  title: 'AI Kickstart | Business Automation Experts',
  description: 'Transform your business with intelligent AI automation solutions. Book your consulting call now.',
};









const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${figtree.variable} antialiased`}>
          
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
