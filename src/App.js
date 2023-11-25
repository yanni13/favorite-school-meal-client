import './App.css';
import * as React from 'react';
import { Reset } from "styled-reset";
import MainPage from "./pages/MainPage";
import LoginPage from './pages/LoginPage';
import JoinPage from "./pages/JoinPage";
import MenuPage from "./pages/MenuPage";
import MapPage from "./pages/MapPage";
import SearchIdPage from './pages/SearchIdPage';
import SearchPwPage from './pages/SearchPwPage';
import FindIdPage from './pages/FindIdPage';
import ResetPwPage from './pages/ResetPwPage';
import ModifyInfoPage from './pages/ModifyInfoPage';
import MyPage from './pages/MyPage';
import RestrauntInfoPage from './pages/RestrauntInfoPage';
import PostPage from './pages/PostPage';
import ModifyProfile from './pages/ModifyProfile';
import PostDetailPage from './pages/PostDetailPage';
import PostAddPage from './pages/PostAddPage';
import UserPage from './pages/UserPage';
import ChatPage from './pages/ChatPage';
import NaverLoginPage from './pages/NaverLoginPage';
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
            <Route path = "/MapPage" element={<MapPage/>}></Route>
            <Route path = "/LoginPage" element={<LoginPage/>}></Route>
            <Route path = "/SearchIdPage" element={<SearchIdPage/>}></Route>
            <Route path = "/FindIdPage" element={<FindIdPage/>}></Route>
            <Route path = "/SearchPwPage" element={<SearchPwPage/>}></Route>
            <Route path = "/ResetPwPage" element={<ResetPwPage/>}></Route>
            <Route path = "/ModifyInfoPage" element={<ModifyInfoPage/>}></Route>
            <Route path = "/MyPage" element={<MyPage/>}></Route>
            <Route path = "/MapPage/:RestrauntId" element={<RestrauntInfoPage/>}></Route>
            <Route path = "/PostPage" element={<PostPage/>}></Route>
            <Route path = "/ModifyProfile" element={<ModifyProfile/>}></Route>
            <Route path = "/PostDetailPage/:PostId" element={<PostDetailPage/>}></Route>            
            <Route path = "/ChatPage" element={<ChatPage/>}></Route>
            <Route path = "/UserPage" element={<UserPage/>}></Route>
            <Route path = "/PostAdd" element={<PostAddPage/>}></Route>
            <Route path = "/NaverLoginPage" element={<NaverLoginPage/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>

      
      
    </>
    
  )
}

export default App;