import styled from "styled-components"
import JoinForm from "./components/Auth/JoinForm"
import JoinPage from "./pages/JoinPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/JoinPage" element={<JoinPage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;