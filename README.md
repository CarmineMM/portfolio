# Portfolio Carmine Maggio

Sitio estatico bilingue (en/es) con Astro, Tailwind, daisyUI y Vue.

## Docker

Un solo `Dockerfile` multi-stage con dos targets, orquestados con `compose.yaml`:

- **Desarrollo** (servidor de Astro con hot reload en http://localhost:4321):

    ```bash
    docker compose --profile dev up --build
    ```

- **Produccion** (build estatico servido por Nginx en http://localhost:8080):

    ```bash
    docker compose --profile prod up -d --build
    ```

Sin compose: `docker build --target prod -t portfolio .` y `docker run -p 8080:80 portfolio`.

## Local sin Docker

```bash
pnpm install
pnpm dev
```
