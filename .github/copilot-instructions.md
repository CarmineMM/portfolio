## Project Vision
- Portfolio personal construido con Astro, TailwindCSS, DaisyUI 5.3.9 y componentes Vue 3 (Composition API).
- La prioridad es un sitio rápido, accesible, con animaciones ligeras y contenido fácil de actualizar.

## Stack y Herramientas
- Astro como framework principal.
- TailwindCSS con DaisyUI para componentes preconstruidos.
- Vue 3 Composition API para interactividad puntual.
- Biome como formateador y linter.

## Estilo de Código
- Indentación con 4 espacios, nunca tabuladores.
- Usar comillas simples para strings; comillas dobles solo cuando el contenido incluya comillas simples.
- Evitar punto y coma finales salvo que el lenguaje lo exija (configurar Biome en `asNeeded`).
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
