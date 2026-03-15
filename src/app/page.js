"use client";
import HomePage from "@/components/home/HomePage";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
