import style from './App.module.css'
import Home from './components/Home/Home'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import Donacion from './components/Donacion/Donacion'

function App() {

  return (
    <div className={style.main}>
      <Nav />
      <Home />
      <Donacion />
      <Footer />
    </div>
  )
}

export default App
