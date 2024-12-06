import React from "react";
import Navbar from "../components/Navbar";
import Carosel from "../components/Carosel";
import LevelCard from "../components/LevelCard";
import Options from "../components/Options";
import Banner from "../components/Banner";
import CaroselProduct from "../components/CaroselProduct";
import PrevilegeCards from "../components/PrevilegeCards";
import OutletLocation from "../components/OutletLocation";

export default function Homepage() {
  return (
    <>
      <div className="min-h-screen w-full bg-slate-100">
        <Navbar />
        <Carosel />
        <div className="flex items-center justify-center">
          <LevelCard />
        </div>
        <div className="flex items-center justify-center">
          <Options />
        </div>
        <div className="flex items-center justify-center mt-10">
          <Banner />
        </div>
        <div className="flex items-center justify-center mt-10">
          <CaroselProduct />
        </div>
        <div className="flex items-center justify-center mt-10">
          <PrevilegeCards />
        </div>
        <div className="flex items-center justify-center mt-10">
          <OutletLocation />
        </div>
      </div>
    </>
  );
}
