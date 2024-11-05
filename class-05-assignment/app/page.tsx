import Link from "next/link";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProgramDesc from "./components/ProgramDesc";
import Gallery from "./components/Gallery";
 

export default function Home() {
  return (
    <div>
    <Header/>
    <Hero/>
    <ProgramDesc/>
    <Gallery/>
    </div>
  );
}
