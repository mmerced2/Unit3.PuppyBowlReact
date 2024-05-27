import Layout from "./components/Layout"
import React from 'react'
import {Route, Routes} from 'react-router-dom'
import { BrowserRouter } from "react-router-dom"
import AllPlayers from './components/AllPlayers'
import SinglePlayer from './components/SinglePlayer'
import AddPlayer from "./components/AddPlayer.jsx"

function App() {


  return (
    <Layout>
    <Routes>
        <Route path='/' element={<h1>Home page</h1>}/>
        <Route path='/players' element={<AllPlayers/>}/>
        <Route path='/player/:id' element ={<SinglePlayer/>}/>
        <Route path='/addplayer' element={<AddPlayer/>}/>
    </Routes>
    </Layout>
  )
}

export default App
