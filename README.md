# Prueba Técnica — Maquetación Frontend

Solución de maquetación pixel perfect desarrollada con Angular 20 y Tailwind CSS 4.

## 🚀 Instalación y uso

```bash
# Clonar el repositorio
git clone 
cd prueba-tecnica

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
ng serve

# Abrir en el navegador
http://localhost:4200
```

## 🏗️ Arquitectura

El proyecto sigue **Atomic Design** con componentes Angular standalone:
src/app/

├── shared/
│   ├── atoms/              # Componentes base indivisibles
│   │   ├── badge/          # Ícono calendario + label de categoría
│   │   ├── button/         # Botón CTA con variant primary
│   │   ├── search-input/   # Input de búsqueda con ícono lupa
│   │   └── image-placeholder/ # Placeholder de imagen con aspect-ratio
│   ├── molecules/          # Combinación de átomos
│   │   ├── article-card/   # Tarjeta de artículo
│   │   └── gallery-card/   # Tarjeta de galería con overlay gradiente
│   ├── organisms/          # Secciones completas
│   │   ├── hero-card/      # Sección 1 — Hero destacado
│   │   ├── article-grid/   # Sección 2 — Grid de artículos
│   │   └── gallery-carousel/ # Sección 3 — Carrusel de galería
│   └── interfaces/         # Tipos TypeScript
│       ├── hero.interface.ts
│       ├── article.interface.ts
│       └── gallery-item.interface.ts
├── features/
│   └── home/               # Página principal
└── constants/
└── mock-data.ts        # Datos de prueba

## 📐 Breakpoints

| Nombre | Valor | Descripción |
|--------|-------|-------------|
| mobile | 0px – 767px | 1 columna · carrusel táctil |
| md | ≥ 768px | 2 columnas · carrusel táctil |
| lg | ≥ 1024px | 3–4 columnas · grid estático |
| 2xl | ≥ 1536px | Contenedor centrado máx. 1542px |

## 🎨 Design System

### Colores
| Token | Valor | Uso |
|-------|-------|-----|
| `--color-brand-red` | #E4002B | Botón CTA primario |
| `--color-gray-bg` | #F4F4F5 | Fondo página y sección 1 |
| `--color-text-primary` | #343A40 | Texto cuerpo |
| `--color-text-dark` | #1C274C | Títulos |
| `--color-text-muted` | #A6A2A2 | Texto secundario |
| `--color-placeholder` | #BDBDBD | Fondo imágenes placeholder |
| `--shadow-card` | 0px 2px 4px 0px #00000033 | Sombra hero card |

### Tipografía
- **Inter** — texto general (400, 500, 600, 700, 800, 900)
- **Figtree Bold 700** — texto IMAGE en placeholders

## ✅ Decisiones técnicas

- **Tailwind CSS 4** configurado via `.postcssrc.json` con `@tailwindcss/postcss`
- **Tokens de diseño** definidos en `@theme` en `styles.css`
- **Carrusel** implementado con scroll táctil nativo + `snap-x snap-mandatory` sin librerías externas
- **Accesibilidad** — HTML semántico, `role="search"`, `aria-labelledby`, `aria-label` en botones e imágenes
- **Imágenes** — `div[role="img"]` con `aria-label` para placeholders
- **Path aliases** configurados en `tsconfig.json` (`@atoms`, `@molecules`, `@organisms`, `@interfaces`, `@constants`)
