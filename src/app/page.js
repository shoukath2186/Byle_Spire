"use client";
import HomePage from "../app/home/HomePage"
import Header from "./commonElements/Header";
import Footer from "./commonElements/Footer";

export default function Home() {
  return (
    <>
    <Header/>
    <div className="mt-[80px]">
     
      <HomePage />
      
    </div>
    <Footer/>
    </>
  );
}
