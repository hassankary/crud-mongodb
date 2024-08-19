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
        <div className="mx-auto bg-white">
          <Navbar/>
          <div className="flex pb-8 pt-[64px] min-h-screen justify-center items-center text-black">{children}</div>
        </div>
      </body>
    </html>
  );
}
