import Header from './components/Header'
import PostList from './components/postlist.tsx'
import './App.css'

// App renders the two top-level pieces of the page: the header and the
// blog post list. It holds no state of its own — components stay self-contained.
function App() {
  return (
    <>
      <Header />
      <main>
        <PostList />
      </main>
    </>
  )
}

export default App