import './styles/theme.css'
import './styles/global.css'
import { Container } from './components/Container'
import { NavBar } from './components/NavBar'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'

function App() {

  return (
    <>
    <Container>
      <NavBar/>
      <Hero/>
      <Projects/>
    </Container>
    </>
  )
}

export default App
