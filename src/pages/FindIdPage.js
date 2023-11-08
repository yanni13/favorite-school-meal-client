import React from "react";
import { useNavigate } from "react-router-dom";
import { SignInBox } from "../styles/Login/Login.styled";
import FindIdForm from "../components/Auth/FindIdForm";

const FindIdPage = () => {
    const navigate = useNavigate();

    return (
        <SignInBox>
            <h2 className="title">최애의 학식</h2>
            <h3 className="subtitle">회원님의 아이디 입니다.</h3>
            <FindIdForm/>

            
        </SignInBox>
    )
}

export default FindIdPage;