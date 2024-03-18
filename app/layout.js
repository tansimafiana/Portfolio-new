import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./navigation/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tansima Kamal Fiana | Portfolio",
  description: "Fiona's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html className="bg-rose-100" lang="en">
      {/*<Navigation />*/}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
