import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import LayoutBox from "@/Components/_LayoutBox/LayoutBox";
import { DataProvider } from "./DataContext";
import { FavouriteProvider } from "@/Components/_Favourite/FavouriteContext";
import { I18nProvider } from "./LanguageTransitionContext";
import { ThemeProvider } from "./ThemeContext";
import { ClerkProvider } from "@clerk/nextjs";
import { NotificationProvider } from "./NotificationContext";



const montserrat = Montserrat({
  variable: "--font-Montserrat",
  subsets: ["latin"],
  weight: ["300", "500", "700"]
});

export const metadata: Metadata = {
  title: "Crypto Dashboard",
  description: "Real-time cryptocurrency dashboard built with Next.js",
  icons: "icon.png"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>     {/* Auth */}
      <html lang="en" suppressHydrationWarning>
        <body className={`${montserrat.variable} antialiased md:overflow-hidden`}>

          <ThemeProvider>                {/* to all */}
            <I18nProvider>               {/* to all */}
              <DataProvider>             {/* to any rates...  */}
                <FavouriteProvider>      {/* to favourite & currencies */}
                  <NotificationProvider> {/* to alert & notificions */}
                    <LayoutBox>          {/* to all */}
                      {children}
                    </LayoutBox>
                  </NotificationProvider>
                </FavouriteProvider>
              </DataProvider>
            </I18nProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}