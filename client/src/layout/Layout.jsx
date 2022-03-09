// Components
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';

// CSS
import './Layout.css'

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}
