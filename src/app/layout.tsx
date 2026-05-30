import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";



export const metadata: Metadata = {
  title: 'VGG Media | AI-Powered Media Solutions',
  description: 'VGG Media is a premium AI agency transforming media campaigns with artificial intelligence for smarter results and unprecedented precision.',
  openGraph: {
    "title": "VGG Media | AI-Powered Media Solutions",
    "description": "VGG Media is a premium AI agency transforming media campaigns with artificial intelligence for smarter results and unprecedented precision.",
    "url": "/",
    "siteName": "VGG Media",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/optical-fiber-background_23-2149301535.jpg",
        "alt": "AI-Powered Media Solutions Dashboard"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "VGG Media | AI-Powered Media Solutions",
    "description": "VGG Media is a premium AI agency transforming media campaigns with artificial intelligence for smarter results and unprecedented precision.",
    "images": [
      "http://img.b2bpic.net/free-photo/optical-fiber-background_23-2149301535.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const inter = Inter({
  variable: "--font-inter",
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
        <body className={`${inter.variable} antialiased`}>
          <Tag />
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
