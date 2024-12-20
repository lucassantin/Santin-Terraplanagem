import About from './about/About'
import './App.css'
import Apresentation from './apresentation/Apresentation'
import Contact from './contact/Contact'
import Finais from './Finais/Finais'
import Navbar from './Navbar/Navbar'
import Services from './services/Services'

function App() {
  return (
    <div>
      <Navbar/>
      <Apresentation/>
      <About/>
      <Services/>
      <Contact/>
      <Finais/>
    </div>
  )
}

export default App
