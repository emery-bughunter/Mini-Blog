import type { Post } from '../types/post'

export const samplePosts: Post[] = [
  {
    id: 1,
    title: 'Why TypeScript Beats Plain JavaScript for Teams',
    author: 'Priya Patel',
    content: 'TypeScript adds static types on top of JavaScript, catching a whole class of bugs before your app ever reaches the browser.',
    publishedAt: new Date(),
    replies: [
      { id: 101, author: 'nullptr777', content: 'Didn\'t they say they were going to stop pushing slop updates or something?', score: 213, timeAgo: '6d ago' },
      { id: 102, author: 'JaggedMetalOs', content: 'It\'s just so easy to forget to add "make no mistakes!" to your AI prompt.', score: 37, timeAgo: '6d ago' },
      { id: 103, author: 'CazOnReddit', content: 'They\'re doing this out of spite at this point, I\'m convinced it\'s the only reason they do so.', score: 73, timeAgo: '6d ago' },
    ],
  },
  {
    id: 2,
    title: 'React Hooks: useState vs useReducer',
    author: 'Marcus Chen',
    content: 'Both manage state, but useReducer shines when updates depend on each other or the logic is complex.',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3),
    replies: [
      { id: 201, author: 'TheRandomGuy75', content: 'This kinda crap is why I use group policy to delay updates as long as I can on Windows.', score: 17, timeAgo: '5d ago' },
      { id: 202, author: 'Jeff30100', content: 'KB5129195 does NOT fix "Defender disabled" display bug. Anyone got platform 4.18.26080.4?', score: 42, timeAgo: '4d ago' },
    ],
  },
  {
    id: 3,
    title: 'Vite vs Create React App: Why We Switched',
    author: 'Priya Patel',
    content: 'With esbuild-based prebundling, Vite starts a dev server in milliseconds instead of seconds.',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 10),
    replies: [
      { id: 301, author: 'DevFast', content: 'Vite completely changed our build pipeline. Never looking back.', score: 128, timeAgo: '1w ago' },
    ],
  },
]
