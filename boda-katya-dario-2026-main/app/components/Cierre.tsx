export default function Cierre() {
  return (
    <section className="flex flex-col items-center gap-6 bg-maroon px-6 py-16 text-center">
      <h2 className="font-serif text-[28px] text-cream">
        Por último, ¿qué tema no puede faltar durante la fiesta?
      </h2>

      {/*
        ⚠️ PENDIENTE: en el original esto es un embed de Spotify con un
        tema puntual (no un campo de sugerencia libre) — reemplazar el
        track de abajo por la canción/playlist real que defina el
        cliente (ver CLAUDE_CODE_BRIEF.md).
      */}
      <div className="w-full max-w-md overflow-hidden rounded-xl">
        <iframe
          src="https://open.spotify.com/playlist/4nRvsOvmFY93sZM5lihXZ9?si=98709197118c4675&pt=5259a2300d8798d80654d17301f1a394"
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Tema sugerido para la fiesta"
        />
      </div>
    </section>
  );
}
