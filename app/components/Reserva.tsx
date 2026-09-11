export default function Reserva() {
  return (
    <section className="flex flex-col items-center gap-6 bg-black px-6 py-20 text-center">
      <h2 className="font-serif text-[28px] text-cream">
        Reservar mi lugar
      </h2>

      <p className="max-w-md font-legible text-xl text-cream">
        Confirmá tu lugar para que podamos organizar todo con cariño.
      </p>

      <div className="w-full max-w-md overflow-hidden rounded-xl">
        <iframe
          src="https://tally.so/embed/lb1516?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          loading="lazy"
          width="100%"
          height="700"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="Reservar mi lugar"
        />
      </div>
    </section>
  );
}
