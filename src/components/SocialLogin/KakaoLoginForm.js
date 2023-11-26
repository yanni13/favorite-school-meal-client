import React from "react";
import KakaoLogin from "react-kakao-login";
import { SignInBox } from "../../styles/Login/Login.styled";

const KakaoLoginForm = () => {

    const REST_API_KEY = '95f91aebaf3512beb7de682e5bf7c291'
    const REDIRECT_URI = 'http://localhost:8080/api/v1/oauth/kakao/callback'
    const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    const code = new URL(window.location.href).searchParams.get("code"); //인가코드 추출

    const kakaologinHandler = () => { //카카오로그인
        window.location.href = link;
    };

    return (
        <SignInBox>
            <button type = 'button' onClick={kakaologinHandler}>카카오로그인</button>
        </SignInBox>
    )
}

export default KakaoLoginForm;