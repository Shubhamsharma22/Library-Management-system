import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Deletebooks from './Pages/Deletebooks'
import Editbook from './Pages/Editbook'
import Showbook from './Pages/Showbook'
import Createbooks from './Pages/Createbooks'



function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/books/create' element={<Createbooks/>}/>
      <Route path='/books/delete/:id' element={<Deletebooks/>}/>
      <Route path='/books/edit/:id' element={<Editbook/>}/>
      <Route path='/books/details/:id' element={<Showbook/>}/>
    </Routes>
    </>
  )
}

export default App
