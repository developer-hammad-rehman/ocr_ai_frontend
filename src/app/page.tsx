import Image from "next/image";
import Hero from "./components/Hero";
import Rebot from "./components/Rebot";
import Tools from "./components/Tools";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Rebot/>
      <Tools/>
    </main>
  );
}
