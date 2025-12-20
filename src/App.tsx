
import './App.css'
import { Navbar } from './components/navbar'
import { Photos } from './components/photos'
import { How } from './components/how'
import { About } from './components/about'
import { Testimonials } from './components/testimonials'
import { Values } from './components/values'
import { Contacts } from './components/contacts'
import { Footer } from './components/footer'

function App() {

  return (
    <>
      <Navbar />
        <Photos/>
        <How/>
        <About/>
        <Testimonials/>
        <Values/>
        <Contacts/>
      <Footer/>
    </>
  )
}

export default App
