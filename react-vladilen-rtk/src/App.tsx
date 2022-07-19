import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navigation from './components/Navigation'

import HomePage from './pages/HomePage'
import FavouritesPage from './pages/FavouritesPage'

import './App.css'

function App() {
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/favourites" element={<FavouritesPage/>}/>
      </Routes>
    </>
  )
}

export default App
