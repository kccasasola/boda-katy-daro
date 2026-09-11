import Image from "next/image";
import RevealTilt from "./RevealTilt";

export default function Fiesta() {
  return (
    <section className="flex flex-col items-center gap-6 bg-black px-6 py-20 text-center">
      <RevealTilt direction="right">
        <div className="relative aspect-[2/3] w-56 overflow-hidden">
          <Image
            src="/images/fiesta.jpg"
            alt="La Estelita | Casa de Campo"
            fill
            sizes="224px"
            className="object-cover"
          />
        </div>
      </RevealTilt>

      <p className="mt-4 text-xs uppercase tracking-[0.3em] text-wine">Fiesta</p>
      <h2 className="font-serif text-[28px] text-wine">El Molino | Casa de Campo</h2>

      <p className="font-legible text-xl text-wine">A continuación de la ceremonia de civil</p>

      <a
        // ⚠️ PENDIENTE: dirección exacta — reemplazar el href por el link real de Google Maps
        href="https://maps.app.goo.gl/YVRqdUThJEz3Ypjv7"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-block rounded-full bg-wine-strong px-8 py-3 text-lg text-black"
      >
        Cómo llegar
      </a>
    </section>
  );
}
