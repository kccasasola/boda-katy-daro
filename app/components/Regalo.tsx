export default function Regalo() {
  return (
    <section className="flex flex-col items-center gap-6 bg-maroon px-6 py-20 text-center">
      <h2 className="flex items-center gap-2 font-serif text-[28px] text-cream">
        Con cariño
      <svg
        viewBox="0 0 24 24"
        className="h-8 w-14 text-cream"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z" />
      </svg>
      </h2>

      <p className="max-w-md font-legible text-xl text-cream">
        No es necesario, lo más importante <br/> es compartir este día juntos. <br/>
        Pero si aún así querés hacernos un mimo, <br/>te dejamos por acá nuestro alias.{" "}<br/> <br/>
        <strong className="font-bold">boda-katy-daro</strong>.
      </p>

  
    </section>
  );
}
