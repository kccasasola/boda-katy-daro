export default function Cierre() {
  return (
    <section className="flex flex-col items-center gap-6 bg-maroon px-6 py-16 text-center">
      <h2 className="font-serif text-[28px] text-cream">
        Por último, ¿qué tema no puede faltar durante la fiesta?
      </h2>

      <div className="w-full max-w-md overflow-hidden rounded-xl">
        <iframe
          src="https://open.spotify.com/embed/playlist/4nRvsOvmFY93sZM5lihXZ9?utm_source=generator&theme=0&si=579431e6d919470a"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Playlist de nuestra boda"
        />
      </div>
    </section>
  );
}
