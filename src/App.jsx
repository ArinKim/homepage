

import Hero from './Components/Hero/Hero'
import NavBar from './Components/NavBar/NavBar'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'

function App() {

  return (
    <>
      <div>
        {/* NavBar */}
        < NavBar />
        {/* Me */}
        < Hero />
        {/* About */}
        < About />
        {/* Projects */}
        {/* Contact */}
        < Contact />
      </div>
    </>
  )
}

export default App
