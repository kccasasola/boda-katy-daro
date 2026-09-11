import Image from "next/image";
import Countdown from "./Countdown";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-svh flex-col items-center justify-center gap-8 overflow-hidden px-6 py-24 text-center"
    >
      <Image
        src="/images/hero.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative flex flex-col items-center gap-2">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-cream">
          Presentan Su Boda
        </p>
        <h1 className="text-5xl font-bold text-cream">Katya &amp; Dario</h1>
      </div>

      <div className="relative">
        <Countdown />
      </div>
    </section>
  );
}
