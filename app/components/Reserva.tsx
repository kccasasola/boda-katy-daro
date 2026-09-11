/*"use client";

import { useActionState, useState } from "react";
import { reservarLugar } from "../actions/reservar";
import { RESERVA_INITIAL_STATE } from "../actions/reserva-types";

const PRESENCIA_OPCIONES = ["Ceremonia Civil", "Fiesta"];

export default function Reserva() {
  const [acompanado, setAcompanado] = useState<"si" | "no" | null>(null);
  const [nombre, setNombre] = useState("");
  const [acompanantes, setAcompanantes] = useState("");
  const [presencia, setPresencia] = useState<string[]>([]);
  const [state, formAction, pending] = useActionState(
    reservarLugar,
    RESERVA_INITIAL_STATE,
  );

  // Al enviar el form, React resetea el DOM como un <form> nativo antes
  // de que vuelva el resultado del action. Si el envío falla, nuestro
  // estado (presencia, nombre, etc.) no cambia, así que React no vuelve
  // a "tocar" esos nodos del DOM al re-renderizar — quedan
  // desincronizados del estado real (ver comentario más abajo). La
  // solución es forzar un remount del form con un `key` que cambie en
  // cada intento, para que los inputs controlados arranquen limpios
  // desde el estado de React en vez de quedarse con el reset nativo.
  const [lastState, setLastState] = useState(state);
  const [attempt, setAttempt] = useState(0);
  if (state !== lastState) {
    setLastState(state);
    setAttempt((n) => n + 1);
    if (state.status === "success") {
      setAcompanado(null);
      setNombre("");
      setAcompanantes("");
      setPresencia([]);
    }
  }

  const togglePresencia = (opt: string) => {
    setPresencia((prev) =>
      prev.includes(opt) ? prev.filter((p) => p !== opt) : [...prev, opt],
    );
  };

  return (
    <section className="flex flex-col items-center gap-6 bg-black px-6 py-20 text-center">
      <h2 className="font-serif text-[28px] text-cream">Reservar mi lugar</h2>

      <p className="max-w-md font-legible text-xl text-cream">
        Confirmá tu lugar para que podamos organizar todo con cariño.
      </p>

      <p className="font-legible text-xs text-cream/60">
        <span className="text-wine-strong">*</span> Campo obligatorio
      </p>

      <form
        key={attempt}
        action={formAction}
        className="mt-4 flex w-full max-w-sm flex-col gap-5 text-left"
      >
        <input type="hidden" name="acompanado" value={acompanado ?? ""} />

        <label className="flex flex-col gap-1.5">
          <span className="font-legible text-sm text-cream">
            Nombre y Apellido <span className="text-wine-strong">*</span>
          </span>
          <input
            type="text"
            name="nombre"
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full rounded-lg border border-cream/40 bg-black px-4 py-2 font-legible text-sm text-cream focus:border-cream focus:outline-none"
          />
        </label>

        <div className="flex flex-col gap-1.5">
          <span className="font-legible text-sm text-cream">
            Voy acompañado <span className="text-wine-strong">*</span>
          </span>
          <div className="flex gap-3" role="group" aria-label="Voy acompañado (obligatorio)">
            {(["si", "no"] as const).map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setAcompanado(opt)}
                aria-pressed={acompanado === opt}
                className={`rounded-full border px-6 py-3 text-sm uppercase tracking-widest transition-colors ${
                  acompanado === opt
                    ? "border-wine-strong bg-wine-strong text-black"
                    : "border-cream/40 text-cream hover:border-cream"
                }`}
              >
                {opt === "si" ? "Sí" : "No"}
              </button>
            ))}
          </div>
        </div>

        {acompanado === "si" && (
          <label className="flex flex-col gap-1.5">
            <span className="font-legible text-sm text-cream">
              Confirmar nombre y apellido del/los acompañante/s
            </span>
            <textarea
              name="acompanantes"
              rows={3}
              value={acompanantes}
              onChange={(e) => setAcompanantes(e.target.value)}
              className="w-full rounded-lg border border-cream/40 bg-black px-4 py-2 font-legible text-sm text-cream focus:border-cream focus:outline-none"
            />
          </label>
        )}

        <div className="flex flex-col gap-1.5">
          <span className="font-legible text-sm text-cream">
            Estaré presente en <span className="text-wine-strong">*</span>
          </span>
          <div
            className="flex flex-col gap-2"
            role="group"
            aria-label="Estaré presente en (obligatorio, elegí al menos una opción)"
          >*//*
            {/* ⚠️ "Ambos" del original se saca: tildar Civil + Fiesta ya cubre ese caso, sin dejar seleccionar un estado contradictorio. }
            {PRESENCIA_OPCIONES.map((opt) => (
              <label
                key={opt}
                className="flex items-center gap-3 py-1.5 font-legible text-sm text-cream"
              >
                <input
                  type="checkbox"
                  name="presencia"
                  value={opt}
                  checked={presencia.includes(opt)}
                  onChange={() => togglePresencia(opt)}
                  className="h-5 w-5 accent-wine-strong"
                />
                {opt}
              </label>
            ))}
          </div>
        </div>

        <div className="mt-2 flex flex-col items-center gap-2">
          <button
            type="submit"
            disabled={pending}
            aria-describedby="confirmar-status"
            className="self-center rounded-full bg-wine-strong px-8 py-3 text-lg text-black disabled:cursor-not-allowed disabled:opacity-70"
          >
            {pending ? "Enviando…" : "Confirmar"}
          </button>
          <p
            id="confirmar-status"
            role="status"
            className={`font-legible text-xs ${
              state.status === "error" ? "text-wine" : "text-cream/70"
            }`}
          >
            {state.message ||
              "Al confirmar, guardamos tu respuesta y te esperamos con muchas ganas."}
          </p>
        </div>
      </form>
    </section>
  );
}*/

<div className="w-full">
  <iframe
    src="https://tally.so/embed/lb1516?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
    width="100%"
    height="700"
    frameBorder="0"
    marginHeight={0}
    marginWidth={0}
    title="Confirmación de asistencia"
  />
</div>