import React from "react";
import { useNavigate } from "react-router-dom";
import { SignInBox } from "../styles/Login/Login.styled";
import ResetPwForm from "../components/Auth/ResetPwForm";

const ResetPwPage = () => {
    const navigate = useNavigate();

    return (
        <SignInBox>
            <h2 className="title">최애의 학식</h2>
            <h3 className="subtitle">재설정할 비밀번호를 입력해 주세요.</h3>
            <ResetPwForm/>
        </SignInBox>
    )

}

export default ResetPwPage;