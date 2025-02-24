import { Banner } from "./components/Banner";
import { BestSeller } from "./components/BestSeller";
import { Explore } from "./components/Explore";
import Headers from "./components/Headers";

export default function Home() {
  return (
    <>
      <Headers />
      <Banner />
      <Explore />
      <BestSeller />
    </>
  );
}
