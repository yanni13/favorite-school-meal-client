import React from "react";
import kakao from "../../assets/kakao.png";
import google from "../../assets/google.png";
import naver from "../../assets/naver.png";
import { SignInBox, SignInForm } from "../../styles/Login/Login.styled";

const SocialLoginForm = () => {
    
    const REST_API_KEY = '95f91aebaf3512beb7de682e5bf7c291'
    const REDIRECT_URI = 'http://localhost:8080/api/v1/oauth/kakao/callback'
    const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    const code = new URL(window.location.href).searchParams.get("code"); //인가코드 추출

    const kakaologinHandler = () => { //카카오로그인
        window.location.href = link;
    };

    const naverloginHandler = () => { //네이버로그인

    }

    const googleloginHandler = () => { //구글로그인

    }

    return (
        <SignInForm>
            <button type = 'button' onClick={kakaologinHandler}>카카오로그인</button>
            <button type = 'button' onClick={naverloginHandler}>네이버로그인</button>
            <button type = 'button' onClick={googleloginHandler}>구글로그인</button>

        </SignInForm>
    )
}

export default SocialLoginForm