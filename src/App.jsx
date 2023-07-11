import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import Contact from './Components/Contact';
import Languages from './Components/Languages';
import Projects from './Components/Projects';
import Links from './Components/Links';
import Footer from './Components/Footer';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar />
      <Header />
      <Contact />
      <Languages />
      <Projects />
      <Links />
      <Footer />
    </div>
  )
}

export default App
