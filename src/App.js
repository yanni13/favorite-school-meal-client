import './App.css';
import * as React from 'react'
import { Reset } from "styled-reset"
import MainPage from "./pages/MainPage"
import LoginPage from './pages/LoginPage';
import JoinPage from "./pages/JoinPage"
import FindIdPage from './pages/FindIdPage';
//import MenuPage from "./pages/MenuPage"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import SearchIdPage from './pages/SearchIdPage';
import SearchPwPage from './pages/SearchPwPage';

function App() {
  return (
    <>
      <Reset/>
      <div className="App">
          <BrowserRouter>
          <Routes>
            <Route path = "/" element={<MainPage/>}></Route>
            <Route path = "/JoinPage" element={<JoinPage/>}></Route>
            <Route path = "/LoginPage" element={<LoginPage/>}></Route>
            <Route path = "/SearchIdPage" element={<SearchIdPage/>}></Route>
            <Route path = "/FindIdPage" element={<FindIdPage/>}></Route>
            <Route path = "/SearchPwPage" element={<SearchPwPage/>}></Route>

          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;