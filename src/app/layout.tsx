import ".//globals.css";
import { Nunito_Sans } from "next/font/google";
import { Metadata } from "next";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";

const nunito = Nunito_Sans({ subsets: ["latin", 'cyrillic'], display: "swap" });

export const metadata: Metadata = {
  title: "Divi-app",
  description: "Save instagram accounts if you don't want to lose them",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning className={nunito.className}>
        <head />
        <body>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar />
            <div className="">{children}</div>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
