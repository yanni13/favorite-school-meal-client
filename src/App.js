import './App.css';
import * as React from 'react'
import { Reset } from "styled-reset"
import styled from "styled-components"
import MainPage from "./pages/MainPage"
import JoinForm from "./components/Auth/JoinForm"
import JoinPage from "./pages/JoinPage"
import MenuPage from "./pages/MenuPage"

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Reset/>
      <div className="App">
          <BrowserRouter>
          <Routes>
            <Route path = "/" element={<MainPage/>}></Route>
            <Route path = "/JoinPage" element={<JoinPage/>}></Route>
            <Route path = "/MenuPage" element={<MenuPage/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;