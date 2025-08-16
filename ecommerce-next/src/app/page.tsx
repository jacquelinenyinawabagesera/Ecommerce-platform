

import { BestSelling } from "./home/bestselling";
import { Categories } from "./home/category";
import { FlashSales } from "./home/flashsale";
import { Hero } from "./home/hero";
import { MusicExperience } from "./home/musicexperience";
import { NewArrival } from "./home/newarrival";
import { OurProducts } from "./home/ourproducts";
import { ServiceFeatures } from "./home/servicefeatures";
import { Footer } from "./shared-components/footer";
import { Header } from "./shared-components/header";

export default function Home() {
  return (
    <div>

     <Header/>
      <Hero/>
      <FlashSales/>
      <Categories/>
      <BestSelling/>
      <MusicExperience/>
      <OurProducts/>
      <NewArrival/>
      <ServiceFeatures/>
      <Footer/>
    </div>
  );
}