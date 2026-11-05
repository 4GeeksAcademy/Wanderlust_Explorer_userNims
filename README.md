# Wanderlust Explorer
Explorador de experiencias de viaje construido con Next.js (App Router), React y TypeScript para el Entregable 7c.
Los datos son ficticios y viven en un array local de 100 experiencias.

## Cómo ejecutar
```bash
npm install
npm run dev
```

Abre http://localhost:3000.

## Rutas
| Ruta | Contenido |
| --- | --- |
| `/` | Home con hero y botón que navega a `/experiences` |
| `/experiences` | Listado de las 100 tarjetas, búsqueda por título y filtros de categoría y destino |
| `/experiences/[id]` | Detalle de una experiencia leída del dataset por su ID |
| `/favorites` | Experiencias marcadas con el corazón |
| `/profile` | Perfil simulado con el contador de favoritos guardados |

La búsqueda y los filtros viven en la URL: `/experiences?search=sailing&category=Adventure&destination=Bangkok%2C+Thailand`.

## Design References
- **Airbnb Experiences** — https://www.airbnb.com/ — barra de búsqueda dominante sobre una grilla de tarjetas con foto grande, título corto y precio. De ahí salió la jerarquía de la tarjeta (foto, etiqueta, título, destino, precio) y el hero de la home con un único CTA.
- **GetYourGuide** — https://www.getyourguide.com/ — panel de filtros con categoría y destino en la parte superior de los resultados, más el contador de resultados. De ahí salió la idea de agrupar búsqueda y filtros en una sola tarjeta blanca por encima de la grilla y mostrar "N de 100 experiencias".
- **Viator** — https://www.viator.com/ — badges de categoría en mayúsculas y valoración con estrella alineada a la derecha de la tarjeta. De ahí salió el badge ámbar y la fila precio/valoración.

## Estructura
```txt
src/
  app/                  rutas del App Router
  components/           un componente por archivo
  data/experiences.ts   dataset de 100 experiencias
  hooks/                useExperienceFilters, useFilteredExperiences, useFavorites, useDocumentTitle
  types/experience.ts   interface Experience y categorías
```

## Alcance
Sin librerías externas de estado: los favoritos viven en un `useState` dentro de `FavoritesProvider` y se pasan hacia abajo como props.
Sin `localStorage`, sin backend y sin mapa: fuera del alcance del ejercicio.

