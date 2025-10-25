## Project Vision

- Portfolio personal construido con Astro, TailwindCSS, DaisyUI 5.3.9 y componentes Vue 3 (Composition API).
- La prioridad es un sitio rápido, accesible, con animaciones ligeras y contenido fácil de actualizar.

## Stack y Herramientas

- Astro como framework principal.
- TailwindCSS con DaisyUI para componentes preconstruidos.
- Vue 3 Composition API para interactividad puntual.
- Prettier como formateador y ESLint (vía `astro lint`) para la linting.

## Estilo de Código

- Indentación con 4 espacios, nunca tabuladores.
- Usar comillas simples para strings; comillas dobles solo cuando el contenido incluya comillas simples.
- Evitar punto y coma finales salvo que el lenguaje lo exija (configurar Prettier/ESLint con `semi: false`).
- Mantener archivos en ASCII; solo usar Unicode cuando sea imprescindible y consistente con el archivo.
- Comentarios breves y solo cuando clarifiquen una sección no trivial.

## Organización

- Estructura componentes en carpetas lógicas dentro de `src/` (`components`, `layouts`, `content`).
- Centraliza estilos compartidos en `src/styles/` o capas de Tailwind.
- Prefiere composición de componentes sobre lógica duplicada.

## Buenas Prácticas

- Verifica accesibilidad (uso de roles, labels, contraste) antes de cerrar tickets.
- Añade pruebas donde sea viable (por ejemplo, utilidades en `src/lib`).
- Documenta decisiones relevantes en el README o en comentarios breves.

## Secciones del Sitio

- Hero con saludo breve, titular claro sobre especialidad y CTA hacia contacto o proyectos.
- Sección "Sobre mí" con resumen profesional, valores y foto optimizada.
- Línea de tiempo de experiencia y educación con énfasis en roles clave y logros medibles.
- Proyectos destacados (máx. 4) con resumen, stack usado, impacto y enlace a demo/repositorio.
- Skills agrupadas por categoría (frontend, backend, herramientas) con iconos accesibles.
- Testimonios opcionales en carrusel simple con controles accesibles.
- Bloque final CTA y apartado de contacto con formulario validado y enlaces a redes profesionales.

## Estilo Visual y UX

- Mantén una paleta de colores base clara y otro esquema oscuro opcional con `prefers-color-scheme`.
- Usa animaciones suaves (`transition` ≤ 200ms, `prefers-reduced-motion` respetado).
- Garantiza contraste AA como mínimo para texto y elementos interactivos.
- Reutiliza patrones de Layout con componentes Astro/Vue para navegación, cards y footer.
- Implementa breadcrumbs o indicadores de sección si el scroll es largo.

## Contenido y Localización

- Prepara el sitio para i18n manteniendo strings clave en archivos de contenido Markdown o JSON.
- Usa lenguaje cercano en español neutro; incluye versión corta en inglés para hero y CTA.
- Añade metadatos SEO (title, description, og tags) en cada página.

## Rendimiento y Deploy

- Optimiza imágenes con `astro:assets` o servicios externos (formato AVIF/WebP, tamaños responsivos).
- Evita cargar scripts globales; haz lazy load de Vue solo en secciones interactivas.
- Usa fuentes del sistema o carga diferida de fuentes externas.
- Configura verificación de Lighthouse (≥90 en Performance, Accessibility) antes de publicar.
