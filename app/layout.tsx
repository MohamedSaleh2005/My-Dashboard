
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import LayoutBox from "@/Components/_LayoutBox/LayoutBox";
import { DataProvider } from "./DataContext";
import { FavouriteProvider } from "@/Components/_Favourite/FavouriteContext";
import { I18nProvider } from "./LanguageTransitionContext";
import { ThemeProvider } from "./ThemeContext";

const montserrat = Montserrat({
  variable: "--font-Montserrat",
  subsets: ["latin"],
  weight: ["300", "500", "700"]
});


export const metadata: Metadata = {
  title: "Crypto Dashboard",
  description: "Real-time cryptocurrency dashboard built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          (function () {
            try {
              const theme = localStorage.getItem("DarkMode");
              if (theme !== null) {
                if (JSON.parse(theme)) {
                  document.documentElement.classList.add("dark");
                }
              } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                document.documentElement.classList.add("dark");
              }
            } catch (e) {}
          })();
        `,
          }}
        />
      </head>
      <body className={`${montserrat.variable} antialiased md:overflow-hidden`}>

          <ThemeProvider>
        <I18nProvider>
          <LayoutBox> {/* to all*/}
            <DataProvider>    {/* to all Component Curr*/}
              <FavouriteProvider>      {/* to Favourite & currencies */}
                {children}
              </FavouriteProvider>
            </DataProvider>
          </LayoutBox>
        </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
