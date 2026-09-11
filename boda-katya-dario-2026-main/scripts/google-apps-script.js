/**
 * Script para guardar las reservas del sitio en una Google Sheet y
 * avisar por mail en cada envío. No forma parte del build de Next.js —
 * este archivo se pega directo en el editor de Google Apps Script.
 *
 * SETUP (una sola vez):
 * 1. Crear una Google Sheet nueva (o usar una existente). En la primera
 *    fila poner los encabezados: Fecha | Nombre y Apellido | Acompañado
 *    | Acompañantes | Presente en
 * 2. Extensiones → Apps Script. Borrar el contenido de Code.gs y pegar
 *    este archivo entero.
 * 3. Reemplazar NOTIFY_EMAIL más abajo por el mail donde se quieren
 *    recibir los avisos de nuevas reservas.
 * 4. Implementar → Nueva implementación → tipo "Aplicación web".
 *    - Ejecutar como: Yo
 *    - Quién tiene acceso: Cualquier usuario
 * 5. Autorizar los permisos que pida Google (son de esta misma cuenta:
 *    editar la planilla y enviar mail en tu nombre).
 * 6. Copiar la URL que te da el deploy ("URL de la aplicación web") y
 *    pegarla como GOOGLE_SHEETS_WEBHOOK_URL en el .env.local del
 *    proyecto (ver .env.example).
 *
 * Si después se edita este script, hay que volver a "Implementar →
 * Gestionar implementaciones → editar (lápiz) → Nueva versión" para
 * que los cambios se apliquen — guardar solo no alcanza.
 */

const NOTIFY_EMAIL = "reemplazar@ejemplo.com"; // ⚠️ PENDIENTE: mail real del cliente

function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  const presencia = Array.isArray(data.presencia) ? data.presencia.join(", ") : "";

  sheet.appendRow([
    new Date(),
    data.nombre || "",
    data.acompanado === "si" ? "Sí" : "No",
    data.acompanantes || "",
    presencia,
  ]);

  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    subject: "Nueva reserva — Katya & Dario",
    body:
      "Nueva reserva para la boda:\n\n" +
      "Nombre y Apellido: " + (data.nombre || "") + "\n" +
      "Va acompañado: " + (data.acompanado === "si" ? "Sí" : "No") + "\n" +
      "Acompañantes: " + (data.acompanantes || "-") + "\n" +
      "Presente en: " + presencia,
  });

  return ContentService.createTextOutput(
    JSON.stringify({ ok: true }),
  ).setMimeType(ContentService.MimeType.JSON);
}
