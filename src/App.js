import './App.css';
import styled from "styled-components"
import MainPage from "./pages/MainPage"
import JoinForm from "./components/Auth/JoinForm"
import JoinPage from "./pages/JoinPage"

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path= "/" element={<MainPage/>}></Route>
          <Route path = "/JoinPage" element={<JoinPage/>}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App;