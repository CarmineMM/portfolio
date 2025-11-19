# Portfolio Carmine Maggio

## Despliegue en GitHub Pages

1. Habilita **Pages** en el repositorio configurando la rama `gh-pages` o "GitHub Actions" como origen (Settings → Pages).
2. Asegúrate de que la rama `main` contenga el workflow en `.github/workflows/deploy.yml`.
3. Cada `push` a `main` ejecutará el build con `pnpm run build` y publicará el contenido de `dist` mediante GitHub Actions.
4. Si necesitas desplegar manualmente, utiliza la opción **Run workflow** en la pestaña *Actions*.

> Nota: El workflow emplea Node.js 20 y pnpm 9; si pruebas localmente instala pnpm globalmente o usa `corepack enable`.
