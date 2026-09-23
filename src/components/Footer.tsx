import withLogger from './withLogger'

const Footer = () => (
  <footer>
    <span className="brand">mini_blog</span>
    <nav className="contact">
      <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
      <a href="https://dev.to" target="_blank" rel="noreferrer">dev.to</a>
      <a href="mailto:hello@devinsights.dev">Email</a>
    </nav>
  </footer>
)

export default withLogger(Footer, 'Footer')