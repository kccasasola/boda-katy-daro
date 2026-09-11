"use server";

import type { ReservaState } from "./reserva-types";

// ⚠️ PENDIENTE: configurar GOOGLE_SHEETS_WEBHOOK_URL en .env.local con la
// URL del Google Apps Script deployado (ver scripts/google-apps-script.js
// y las instrucciones de setup).
const WEBHOOK_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

export async function reservarLugar(
  prevState: ReservaState,
  formData: FormData,
): Promise<ReservaState> {
  void prevState;

  const nombre = formData.get("nombre")?.toString().trim() ?? "";
  const acompanado = formData.get("acompanado")?.toString();
  const acompanantes = formData.get("acompanantes")?.toString().trim() ?? "";
  const presencia = formData.getAll("presencia").map((v) => v.toString());

  if (!nombre) {
    return { status: "error", message: "Falta el nombre y apellido." };
  }
  if (acompanado !== "si" && acompanado !== "no") {
    return { status: "error", message: "Indicá si vas acompañado." };
  }
  if (presencia.length === 0) {
    return {
      status: "error",
      message: "Elegí en qué vas a estar presente.",
    };
  }

  if (!WEBHOOK_URL) {
    console.error(
      "GOOGLE_SHEETS_WEBHOOK_URL no está configurada — ver scripts/google-apps-script.js",
    );
    return {
      status: "error",
      message:
        "El formulario todavía no está conectado del todo. Probá de nuevo más tarde.",
    };
  }

  try {
    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, acompanado, acompanantes, presencia }),
    });
    if (!res.ok) {
      throw new Error(`El webhook respondió ${res.status}`);
    }
  } catch (err) {
    console.error("Error enviando la reserva a Google Sheets:", err);
    return {
      status: "error",
      message: "No pudimos guardar tu reserva. Intentá de nuevo en un rato.",
    };
  }

  return {
    status: "success",
    message: "¡Gracias! Ya anotamos tu reserva.",
  };
}
