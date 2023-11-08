import React from "react";
import {useNavigate} from 'react-router-dom';
import { SignInBox, SignInForm } from "../styles/Login/Login.styled";
import JoinForm from "../components/Auth/JoinForm";

const JoinPage = () => {
    const navigate = useNavigate();

    return (
        <SignInBox>
            <h2 className="title">최애의 학식</h2>
            <h3 className="subtitle">회원가입</h3>
            <JoinForm/>
        </SignInBox>
    )
}

export default JoinPage;