import React from 'react';
import { BestSelling } from "./home/BestSelling/page";
import { Categories } from "./home/Categories/page";
import { FlashSales } from "./home/FlashSale/page";
import { Hero } from "./home/Hero/page";
import { MusicExperience } from "./home/MusicExperience/page";
import { NewArrival } from "./home/NewArrival/page";
import { OurProducts } from "./home/OurProducts/page";
import { ServiceFeatures } from "./home/ServiceFeatures/page";
import { Footer } from "./shared-components/Footer/page";
import { Header } from "./shared-components/Header/page";

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
