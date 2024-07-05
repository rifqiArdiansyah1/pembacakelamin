import { Baskervville, Inter, Permanent_Marker, Poppins, Roboto_Mono, Teko } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Roboto_Mono({ subsets: ["latin"], weight: '400' });

export const metadata = {
  title: "Kelamin mu apa?",
  description: "Prediksi gender/pembaca kelamin menggunakan nama",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
      {children}
      </body>
    </html>
  );
}
