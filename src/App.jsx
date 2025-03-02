

import Hero from './Components/Hero/Hero'
import NavBar from './Components/NavBar/NavBar'
import About from './Components/About/About'

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
      </div>
    </>
  )
}

export default App
