import './styles/theme.css'
import './styles/global.css'
import { Container } from './components/Container'
import { NavBar } from './components/NavBar'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {

  return (
    <>
    <Container>
      <NavBar/>
      <Hero/>
      <Projects/>
      <About/>
      <Contact/>
      <Footer/>
    </Container>
    </>
  )
}

export default App
