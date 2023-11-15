//마이페이지(나) - 피그마 6번페이지
import React from "react";
import { useNavigate } from "react-router-dom";
import MyPageForm from "../components/Auth/MyPageForm";
import TitledHeader from "../components/Header/TitledHeader";

const MyPage = () => {

    const navigate = useNavigate();

    return (
        <>
            <TitledHeader title="마이 페이지"/>
            <MyPage>
               <MyPageForm/> 
            </MyPage>
        </>
       
    )
}

export default MyPage;