# CLAUDE.md

Portafolio personal de Carmine Maggio. Sitio estatico bilingue (en/es) hecho con Astro 6, Tailwind 4, daisyUI 5 y islas Vue 3.

## Comandos

- `pnpm dev`: servidor de desarrollo
- `pnpm build`: build estatico en `dist/` (usalo para verificar cualquier cambio)
- `pnpm lint`: ESLint
- `pnpm format`: Prettier sobre todo el repo (ver la advertencia de abajo)

Deploy: GitHub Actions (`.github/workflows/deploy.yml`) al hacer push a `main`.

## Estructura

- `src/pages/index.astro` (en, idioma por defecto, sin prefijo) y `src/pages/es/index.astro`. Las dos paginas componen las mismas secciones: si agregas o quitas una seccion, cambia ambas.
- `src/page-sections/Resume.astro`: sidebar fija (hero, CTA de contacto, nav, redes, tema e idioma). Aqui se define `navigationLinks`, que alimenta tanto `MainNavbar` (escritorio) como `DockMainNavbar` (movil).
- `src/page-sections/home/*`: secciones del contenido (About, Experience, Projects, FavoriteTools, Education, Contact). Cada una usa `components/ui/SectionHeading.astro` con un indice numerado (`01`...`06`); manten la numeracion correlativa.
- Datos: `datasources/*Json.ts` -> `repositories` -> `implementers` -> `entities`. Para agregar experiencia, proyectos o educacion, edita el datasource y no los componentes.
- Assets publicos en `public/assets/` (logos, capturas y videos de proyectos).

## Convenciones

- Indentacion de 4 espacios, comillas simples y sin punto y coma (Prettier ya lo configura).
- Iconos: feather-icons via `<i data-feather='nombre' />`. `MainLayout` llama a `feather.replace()`; los componentes Vue que rendericen iconos deben volver a llamarlo en `nextTick`.
- i18n: todo texto visible va en `src/lang/en.json` **y** `src/lang/es.json` con las mismas claves. Se usa con `__('clave', { lng: lang })`.
- Usa Vue solo cuando haya interactividad real (carrusel, tema, idioma) y elige la directiva `client:*` mas perezosa que funcione.

## Diseno

- Dos temas daisyUI personalizados en `src/styles/global.css`: `abyss` (oscuro, por defecto) y `acid` (claro). Los nombres se guardan en `localStorage` y los usa `ThemeController.vue`, asi que no los renombres.
- Usa los tokens de daisyUI (`primary`, `base-content/70`, etc.) y no colores fijos, para que ambos temas funcionen.
- Fuentes: `font-display` (Bricolage Grotesque) para titulos, `font-sans` (Inter) para el cuerpo y `font-mono` (JetBrains Mono) para etiquetas y metadatos.
- Clases compartidas: `.surface-card` y `.tech-pill` (`styles/cards.css`), `.section-heading` y `.eyebrow` (`styles/titles.css`), y el fondo `.ambient-bg`/`.spotlight` (`styles/background.css`).
- Respeta `prefers-reduced-motion`, el contraste AA y los textos `aria-*`/`sr-only` que ya existen.

## Advertencias

- **No ejecutes Prettier sobre todo `src/`.** Reformatea `ProjectCarousel.vue` (convierte el `@click` de varias sentencias en una expresion multilinea invalida) y rompe el build. Formatea solo los archivos que modifiques.
- No hay boton para descargar el CV: se quito a proposito. El contacto se hace por `mailto:carminemaggiom@gmail.com` (CTA en la sidebar, dock movil y seccion Contact).
- `public/storage/` todavia contiene PDFs del CV que no tienen enlace pero siguen siendo accesibles por URL.
