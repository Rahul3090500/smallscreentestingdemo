"use client";
import "../app/styles/main.scss";
import { GLt, GMd, GRg, HBd, HMd, HRg, SRg } from "./components/Fonts";
import Header from "./components/Layout/header";
import Footer from "./components/Layout//footer";
import { Analytics } from "@vercel/analytics/react";
import GetInTouch from "./components/GetInTouch/GetInTouch";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  
  return (
    <html lang="en">
      <head>
        <link href="/favicon.ico" rel="icon" type="image/ico" sizes="any" />
      </head>
      <body
        className={`${HRg.variable} ${HBd.variable} ${HMd.variable}  ${GRg.variable} ${GMd.variable} ${GLt.variable} ${SRg.variable}`}
      >

        <Header toggleModal={toggleModal} />
        {children}
        <Analytics />
        <GetInTouch isOpen={isModalOpen} onClose={toggleModal} />

        <Footer toggleModal={toggleModal} />
      </body>
    </html>
  );
}
