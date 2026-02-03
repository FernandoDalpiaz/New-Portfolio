import './styles/theme.css'
import './styles/global.css'
import { Container } from './components/Container'
import { NavBar } from './components/NavBar'
import { Hero } from './components/HeroSection'

function App() {

  return (
    <>
    <Container>
      <NavBar/>
      <Hero/>
    </Container>
    </>
  )
}

export default App
