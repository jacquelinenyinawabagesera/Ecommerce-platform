import React from 'react';
import { BestSelling } from "./home/BestSelling";
import { Categories } from "./home/Categories";
import { FlashSales } from "./home/FlashSale";
import { Hero } from "./home/Hero";
import { MusicExperience } from "./home/MusicExperience";
import { NewArrival } from "./home/NewArrival";
import { OurProducts } from "./home/OurProducts";
import { ServiceFeatures } from "./home/ServiceFeatures";
import { Footer } from "./shared-components/Footer";
import { Header } from "./shared-components/Header";

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
