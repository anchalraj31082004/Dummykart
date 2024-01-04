import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components";
import StoreProvider from "@/lib/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          <main style={{paddingTop:"64px"}}>{children}</main>
          <Footer />
        </body>
      </html>
    </StoreProvider>
  );
}
