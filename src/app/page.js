"use client";
import HomePage from "@/components/home/HomePage";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
    <Header/>
    <div className="mt-0">
     
      <HomePage />
      
    </div>
    <Footer/>
    </>
  );
}
