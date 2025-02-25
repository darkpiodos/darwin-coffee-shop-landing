"use client";
import { useEffect } from "react";
import { Banner } from "./components/Banner";
import { BestSeller } from "./components/BestSeller";
import { DownloadApp } from "./components/DownloadApp";
import { Explore } from "./components/Explore";
import { Footer } from "./components/Footer";
import Headers from "./components/Headers";
import { OrderCoffee } from "./components/OrderCoffee";
import { Testimony } from "./components/Testimony";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <>
      <Headers />
      <Banner />
      <Explore />
      <OrderCoffee />
      <BestSeller />
      <DownloadApp />
      <Testimony />
      <Footer />
    </>
  );
}
