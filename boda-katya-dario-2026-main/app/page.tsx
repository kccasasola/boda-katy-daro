import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Civil from "./components/Civil";
import Fiesta from "./components/Fiesta";
import DressCode from "./components/DressCode";
import Reserva from "./components/Reserva";
import SacasteFotos from "./components/SacasteFotos";
import Cierre from "./components/Cierre";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <Intro />
      <Civil />
      <Fiesta />
      <DressCode />
      <Reserva />
      <SacasteFotos />
      <Cierre />
    </main>
  );
}
