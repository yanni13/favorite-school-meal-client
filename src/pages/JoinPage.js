import React from "react";
import {useNavigate} from 'react-router-dom';
import { SignInBox, SignInForm } from "../styles/Login/Login.styled";
import JoinForm from "../components/Auth/JoinForm";
import TitledHeader from "../components/Header/TitledHeader";

const JoinPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <TitledHeader title="회원가입"></TitledHeader>
            <SignInBox>
                <h2 className="title">최애의 학식</h2>
                <h3 className="subtitle">회원가입</h3>
                <JoinForm/>
            </SignInBox>
        </>
    )
}

export default JoinPage;