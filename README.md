# Mini-Blog (Dev Insights)

A modern, lightweight React and TypeScript mini-blog application built with **Vite**.built for easy communication where developers can share quick messages & tips related to their projects

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/emery-bughunter/Mini-Blog.git
   cd Mini-Blog
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the Application:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

---

## Project Structure

```text
src/App.tsx –                   root application layout
src/components/Header.tsx –     site header
src/components/Post.tsx –       memoized single post card
src/components/PostList.tsx –   list of posts
src/components/withLogger.tsx – HOC logging example
src/types/post.ts –             BlogPost type definition
src/App.css –                   external styling
src/index.css –                 base global styling minimalistic like this
```

---

## Technical Choices & Rationale

### 1. Component Types (Functional vs. Class)
- **Functional Components:** All components (`Header`, `Footer`, `Post`, `PostList`) are implemented as modern React functional components using ES6 arrow functions.
- **Rationale:** Functional components are concise, idiomatic in modern React, fully support React Hooks (`useState`), and offer better performance optimization and cleaner readability compared to legacy class components.

### 2. styling methods used
- external CSS (`src/App.css`): used to manage structural layout, card design, sticky frosted-glass header/footer, typography, and interactive hover states.
- CSS Custom Properties / Design Tokens (`src/index.css`)** — Centralizes design tokens (`--accent`, `--text`, `--border`, `--card-bg`, `--shadow`) for maintainability and consistency.

### 3. Optimization Strategies
-  Used unique `post.id` identifiers as keys in `.map()` loops within `PostList` to ensure efficient DOM reconciliation and diffing.
-  Separated atomic UI units (`Post`) from container/list units (`PostList`) to minimize re-render scope and maintain clean separation of concerns.
-  Leveraged **Vite** with ESbuild pre-bundling for near-instantaneous development server startup and optimized production bundles.

## external libraries used

- React (`^19.2.8`)
- React DOM (`^19.2.8`)
- Vite (`^8.3.0`)
- TypeScript (`~6.0.2`)
- Oxlint (`^1.81.0`)
