import React from 'react'
import News from './components/News'
import Pagination from './components/Pagination'
import Search from './components/Search'
import "./App.css"
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <h1>Top Tech News On The Go</h1>
      <Search />
      <Pagination position="top" />
      <News />
      <Pagination position="bottom" />
      <Footer />
    </div>
  )
}

export default App
