import React from 'react'
import './App.css'
import Add from './components/Add'
import Watched from "./components/Watched"
import WatchList from "./components/WatchList"
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import "./lib/font-awesome/css/all.min.css";
import { GlobalProvider } from './context/GlobalState'


const App = () => {
  return (
    <GlobalProvider>
      <Header/>
    <Routes>
      <Route exact path="/" element={<WatchList/>} />
      <Route path="/watched" element={<Watched/>} />
      <Route path="/add" element={<Add/>} />
    </Routes>
    </GlobalProvider>
  )
}

export default App