"use client";

import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import Navbar from "./_component/Navbar";
import { store } from "./_store/store";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
