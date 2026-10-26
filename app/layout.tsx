import type { Metadata } from "next";
import { Barlow_Condensed, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const ibmPlex = IBM_Plex_Sans({
  variable: "--font-ibm-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Power Solutions | Industrial Electrical Engineering",
  description:
    "Power Solutions delivers industrial electrical engineering—power distribution, switchgear, transformer works, and commissioning support.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${ibmPlex.variable} ${barlow.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="flex min-h-full flex-col bg-background font-sans text-foreground"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
