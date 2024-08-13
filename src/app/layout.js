import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CRUD with Mongodb",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container mx-auto px-4 bg-white">
          <Navbar/>
          <div className="pb-8 min-h-screen text-black">{children}</div>
        </div>
      </body>
    </html>
  );
}
