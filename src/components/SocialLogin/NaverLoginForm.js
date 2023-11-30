import React, {useEffect, useState} from "react";
import { SignInBox } from "../../styles/Login/Login.styled";
import axios from "axios";
import NaverButton from "./NaverButton";


const NaverLoginForm = () => {

    const initData = Object.freeze({
        fullname: '',
        personalNumber: ''
    });
    
    const [data, updataData] = useState(initData);

    const link = 'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=xQ6XMGVRxbFRU3GgqKaW&redirect_uri=http://localhost:3000/NaverLoginPage&state=1234';

    let params = new URL(document.location).searchParams;
    let code = params.get("code");
    let state = params.get("state");

    const naverloginHandler = (e) => {

        window.location.href = link;

        axios.post(`https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=xQ6XMGVRxbFRU3GgqKaW&client_secret=jEBGQNJqQL&code=dbenQUCmlAFdXExi6S&state=1234`)//접근토근 발급

        axios.post(`http://49.50.173.247:8080/api/v1/oauth/sign/{Naver}?code=${code}&state=${state}`, {
            "oauthSignUpRequest": {
                  "fullname": data.fullname,
                  "personalNumber": data.personalNumber
                },
                "oauthSignInRequest": {
                  "authorizeCode": code,
                }
            })
        .then(res => {
            const result = res.data;
            console.log("result", result);
        })
        .catch(err => {
            console.log("error", err);
        });  
    };

    const getCode = () => { //인가코드 추출
        if(code) {
            naverloginHandler(code);
        } else {
            console.log("인가코드를 찾을 수 없습니다.");
        }
    };
    
    useEffect(() => {
        getCode();
    }, []);

    return (
        <SignInBox>
            <NaverButton onClick={() => naverloginHandler(code)}>네이버로그인</NaverButton>
            {/*<button type = 'button' onClick={() => naverloginHandler(code)}>네이버로그인</button>*/}
        </SignInBox>
    );
};
 
export default NaverLoginForm;