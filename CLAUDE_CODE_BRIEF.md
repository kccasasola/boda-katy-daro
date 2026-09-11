# CLAUDE_CODE_BRIEF.md — Landing Boda Katya & Dario

## Contexto

Recreación de una landing hecha originalmente en Wix (https://whitebunnyon.wixsite.com/casorio), pensada **mobile-first**, para invitación de boda con countdown, info de ceremonia/fiesta, dress code y reserva de lugar.

Sitio de una sola página (single scroll), sin necesidad de rutas múltiples salvo quizás una página de detalle del evento (el original tiene `/event-details/abigail-rene`, a confirmar si se replica).

## Stack

- **Next.js 14/15 (App Router) + TypeScript**
- **Tailwind CSS**
- Sin backend separado — todo dentro de la misma app (server actions donde haga falta)
- Deploy: Vercel
- Formulario de reserva: **A DEFINIR** (ver sección Formulario)

## Estructura de secciones (orden del original)

1. **Hero**
   - "Katya & Dario"
   - "Presentan Su Boda"
   - Countdown (días : horas : minutos : segundos) hasta la fecha del evento
   - ⚠️ Fecha/hora target: **PENDIENTE** — pedir al cliente

2. **Intro / "Se acerca el momento"**
   - Badge con mes/año (ej. "Nov 2026")
   - Texto: invitación a acompañar la celebración + tono informal ("no prometemos ceremonia perfecta, pero sí buena compañía, risas y recuerdos")
   - ⚠️ **Corrección (verificado en el sitio original):** esta sección **no lleva foto** — solo un ícono decorativo de copas brindando (SVG/línea, no imagen). La imagen vertical es de la sección Civil (ver sección Imágenes, mapeo corregido).

3. **Civil**
   - Nombre del lugar: Jardín Japonés
   - Día/hora: Viernes Noviembre - 13hs (confirmar día exacto)
   - Link "Cómo llegar" → Google Maps
   - ⚠️ Dirección exacta: **PENDIENTE**
   - Imagen vertical: foto real del Jardín Japonés (ver sección Imágenes, mapeo corregido — antes atribuida por error a Intro)

4. **Fiesta**
   - Nombre del lugar: La Estelita | Casa de Campo
   - "A continuación de la ceremonia de civil"
   - Link "Cómo llegar" → Google Maps
   - ⚠️ Dirección exacta: **PENDIENTE**
   - ⚠️ **Corrección (verificado en el sitio original):** esta sección **sí lleva imagen vertical** — la foto generada con IA de una mesa de postres/aperitivos con velas y luces (ver sección Imágenes, mapeo corregido — antes atribuida por error a Civil). No estaba documentada en la primera versión de este brief.

5. **Dress Code**
   - Texto: invitación a vestirse con etiqueta sin incomodar
   - Código: "Elegante Sport Total Black"
   - Link externo a Pinterest con ideas de outfits (el original usa https://pin.it/6OjIYGcJ8 — reemplazar por el que corresponda si cambia)

6. **CTA Reservar lugar**
   - Botón/link destacado "Reservar mi lugar"
   - Ver sección Formulario para definición de implementación (ahora con detalle real del formulario del sitio original)

7. **"¿Sacaste fotos?"** *(sección no detectada en el relevamiento inicial — agregada tras revisar capturas del sitio original)*
   - Texto: "Subilas en el siguiente link para compartirlas con todos"
   - Botón "Fotos de la fiesta" → link externo (no confirmado a qué apunta en el original; probablemente carpeta compartida tipo Google Drive/Photos)
   - Aparece después del formulario de reserva y antes de la pregunta de cierre
   - **A confirmar con el cliente:** si se replica esta sección y con qué servicio de subida de fotos

8. **Pregunta de cierre**
   - "Nuestra historia" (título de sección, contenido vacío en el original — confirmar si va)
   - "Por último, ¿qué tema no puede faltar durante la fiesta?"
   - ⚠️ **Corrección (verificado en el sitio original):** esto **no es un campo de texto libre** — el original embebe un **widget de Spotify** (muestra una canción puntual con carátula, nombre de tema/artista y botón "Save on Spotify" / play). No es un formulario de sugerencias, sino un embed de un tema/playlist específico. **A confirmar con el cliente:** si se quiere replicar el embed de Spotify (requiere definir qué canción/playlist) o cambiarlo por un campo de sugerencia real.

9. **Footer**
   - Nombres de contacto + teléfonos (Abigail / René, +52-1-33-12345678 en el original — **confirmado que son datos de placeholder de la plantilla Wix**, no del cliente; reemplazar por los reales)
   - Copyright / año (el original muestra "© 2035 Creado por A&R con Wix" — placeholder de plantilla, ignorar)
   - Menú: La boda, Nuestra historia, Viaje y estancia, Ver, Registro
   - ⚠️ Secciones "Nuestra historia" y "Viaje y estancia" aparecen vacías en el original — confirmar si existen o son placeholders de la plantilla Wix a descartar
   - "Registro" en el original apunta a una página genérica de templates de Wix (no a un registro de regalos real) — confirmar destino real si se implementa
   - El footer también tiene un link "Detalles" → `/event-details/abigail-rene`, la página de detalle mencionada en la sección Contexto (a confirmar si se replica)

## Formulario de reserva — decisión pendiente

Dos caminos evaluados, **sin definir aún cuál se implementa**:

**Opción A — Link externo/embebido (como el original, vía Tally)**

- Cero desarrollo, cero mantenimiento
- Contra: usuario sale del sitio (o depende de un embed de terceros), no hay datos centralizados en el proyecto
- ⚠️ **Confirmado en el sitio original:** usan Tally, formulario `https://tally.so/forms/lb1516` (este ID es del sitio de referencia/plantilla, **no reusar tal cual** — habría que crear un formulario Tally propio del cliente si se elige este camino). Campos reales relevados del embed:
  - Nombre y Apellido (texto, requerido)
  - Voy acompañado (Sí / No, requerido)
  - Si "Sí": textarea condicional "confirmar nombre y apellido del/los acompañante/s"
  - Estaré presente en (checkboxes: Ceremonia Civil / Fiesta / Ambos, requerido)
  - Botón "Confirmar"

**Opción B — Formulario propio embebido (recomendado)**

- Campos sugeridos (ajustados a los reales del original relevado arriba): nombre y apellido, si va acompañado (sí/no) + nombres de acompañantes condicional, presencia en Civil/Fiesta/Ambos, mensaje/restricciones alimentarias opcional
- Guardado: Google Sheets vía API (simple, exportable) + notificación por mail vía Resend en cada submit
- Pro: mejor UX, todo dentro del sitio, datos centralizados
- Este es el camino a implementar salvo que se decida lo contrario antes de empezar a codear el CTA

**Acción:** definir con el cliente antes de tocar esta sección; el resto de la landing (hero, secciones informativas, dress code) se puede construir en paralelo sin bloquearse por esto.

## Imágenes

⚠️ **Mapeo corregido tras verificación directa en el sitio original** (accessibility tree + capturas del cliente — la primera versión de este brief tenía Intro y Civil cruzadas y no tenía registrada la de Fiesta):

- `https://static.wixstatic.com/media/d91120_3191be5191024d86954abceea54d89e7~mv2.jpg` — foto real del Jardín Japonés → **sección Civil** (ya descargada como `public/images/civil.jpg`)
- `https://static.wixstatic.com/media/d91120_9acd3a8ad19a4133be2c634c4bd70664~mv2.png` — imagen generada con IA, mesa de postres/aperitivos con velas → **sección Fiesta** (ya descargada como `public/images/fiesta.png`)
- La sección **Intro** ("Se acerca el momento") **no tiene imagen** en el original, solo un ícono decorativo.

Ambas ya están integradas en `Civil.tsx` y `Fiesta.tsx` con `next/image` (`fill` + `object-cover` dentro de un contenedor `aspect-[3/4]`).

También se detectó una **tercera imagen** usada como fondo del Hero (foto sepia/vintage estilo antiguo, pareja sentada) — `d91120_29d86a50a8d148ad990fcb7133b4593b~mv2.jpeg`. No está integrada en el sitio propio todavía; **a confirmar con el cliente** si se quiere ese estilo vintage de fondo en el Hero o algo acorde a la paleta "elegante/total black" ya definida.

**Pendiente:** revisar si hay más imágenes (backgrounds, texturas, íconos) no capturadas en el relevamiento. También pendiente definir si estas imágenes se reusan tal cual o el cliente va a mandar fotos propias antes de lanzar.

## Diseño / identidad visual

**A definir.** El original es una plantilla Wix genérica sin paleta ni tipografía particularmente distintiva más allá de lo default del template. Si no hay lineamientos de marca del cliente, se puede proponer una paleta acorde a "elegante / total black / sport" (tonos neutros, negro, dorado o beige como acento) y tipografía serif para títulos + sans-serif para cuerpo, dando un aire más cuidado que el original.

## Responsive

Mobile-first obligatorio (el original está pensado 100% para mobile). Breakpoints estándar de Tailwind (`sm`, `md`, `lg`) para adaptar a desktop/tablet sin que sea el foco principal.

## Datos pendientes de recopilar (checklist)

- [ ] Fecha y hora exacta del evento (target del countdown)
- [ ] Dirección completa Jardín Japonés
- [ ] Dirección completa La Estelita | Casa de Campo
- [ ] Definición final del formulario (Opción A vs B) — ya con campos reales relevados del original (ver sección Formulario)
- [ ] Contenido real de "Nuestra historia" y "Viaje y estancia" (o confirmación de que no van)
- [ ] Teléfonos de contacto reales
- [x] Confirmación de imágenes a usar — mapeo corregido (Civil/Fiesta) y ya integradas; falta definir si se reusan tal cual o el cliente manda fotos propias
- [ ] Lineamientos de marca/paleta si el cliente tiene preferencia
- [ ] Confirmar sección "¿Sacaste fotos?" — ¿se replica? ¿a qué servicio apunta el link de subida?
- [ ] Definir tratamiento de "Por último, ¿qué tema no puede faltar...?" — ¿embed de Spotify (canción/playlist específica) o campo de sugerencia libre?
- [ ] Definir si el Hero usa la foto vintage sepia del original o un fondo acorde a la paleta ya elegida
- [ ] Confirmar si se replica la página `/event-details/abigail-rene` enlazada desde el footer
