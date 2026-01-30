import "@/app/globals.css";
import type { AppProps } from "next/app";
import { DM_Sans, Inter } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${dmSans.variable} ${inter.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}
