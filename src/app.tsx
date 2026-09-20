import Header from './components/Header'
import PostList from './components/postlist.tsx'
import './App.css'
import Footer from './components/Footer.tsx'

function App() {
  return (
    <>
      <Header />
      <main>
        <PostList />
      </main>
      <Footer />
    </>
  )
}

export default App