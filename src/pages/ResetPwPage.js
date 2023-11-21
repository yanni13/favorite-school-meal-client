import React from "react";
import { useNavigate } from "react-router-dom";
import { SignInBox } from "../styles/Login/Login.styled";
import ResetPwForm from "../components/Auth/ResetPwForm";
import TitledHeader from "../components/Header/TitledHeader";

const ResetPwPage = () => {
    const navigate = useNavigate();

    return (
        <>
        <TitledHeader title="비밀번호 재설정"/>
        <SignInBox>
            <h2 className="title">최애의 학식</h2>
            <h3 className="subtitle">재설정할 비밀번호를 입력해 주세요.</h3>
            <ResetPwForm/>
        </SignInBox>
        </>
    )

}

export default ResetPwPage;