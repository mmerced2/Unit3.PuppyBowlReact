//import Layout from "./components/Layout"
import React from 'react'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import AllPlayers from './components/AllPlayers'
import SinglePlayer from './components/SinglePlayer'
import AddPlayer from "./components/AddPlayer.jsx"
import SearchAppBar from './components/Nav.jsx'

function App() {


  return (
<>
   <Router>
   <SearchAppBar />
   <Routes>
        <Route path='/players' element={<AllPlayers/>}/>
        <Route path='/player/:id' element ={<SinglePlayer/>}/>
        <Route path='/addplayer' element={<AddPlayer/>}/>
        </Routes>
      </Router>
   
      </>
  )
}

export default App
