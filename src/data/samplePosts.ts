import type { Post } from '../types/post'
export const samplePosts: Post[] = [

    
  {
    id: 1,
    title: 'Why TypeScript Beats Plain JavaScript for Teams',
    author: 'Priya Patel',
    content: 'TypeScript adds static types on top of JavaScript, catching a whole class of bugs before your app ever reaches the browser.',
    publishedAt: new Date(),
  },
  {
    id: 2,
    title: 'React Hooks: useState vs useReducer',
    author: 'Marcus Chen',
    content: 'Both manage state, but useReducer shines when updates depend on each other or the logic is complex.',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3),
  },
  {
    id: 3,
    title: 'Vite vs Create React App: Why We Switched',
    author: 'Priya Patel',
    content: 'With esbuild-based prebundling, Vite starts a dev server in milliseconds instead of seconds.',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 10),
  },
]