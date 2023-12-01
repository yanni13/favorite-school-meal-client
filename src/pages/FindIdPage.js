import React from "react";
import { useNavigate } from "react-router-dom";
import { SignInBox } from "../styles/Login/Login.styled";
import FindIdForm from "../components/Auth/FindIdForm";
import TitledHeader from "../components/Header/TitledHeader";

const FindIdPage = () => {
    return (
        <>
        <TitledHeader title="아이디 찾기"/>

        <SignInBox>
            <h2 className="title">최애의 학식</h2>
            <h3 className="subtitle">회원님의 아이디 입니다.</h3>
            <FindIdForm/> 
        </SignInBox>
        </>
    )
}

export default FindIdPage;