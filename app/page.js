import { Banner } from "./components/Banner";
import { BestSeller } from "./components/BestSeller";
import { DownloadApp } from "./components/DownloadApp";
import { Explore } from "./components/Explore";
import { Footer } from "./components/Footer";
import Headers from "./components/Headers";
import { OrderCoffee } from "./components/OrderCoffee";
import { Testimony } from "./components/Testimony";

export default function Home() {
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
