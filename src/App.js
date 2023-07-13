import React from 'react'
import Navbar from './comonents/Navbar'
import Hero from './comonents/Hero'
import Destination from './comonents/Destination'
import Search from './comonents/Search'
import Selects from './comonents/Selects'
import Footer from './comonents/Footer'



const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destination />
      <Search />
      <Selects />
      <Footer />
    </div>
  )
}

export default App