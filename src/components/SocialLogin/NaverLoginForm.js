import React, {useEffect, useState} from "react";
import { SignInBox } from "../../styles/Login/Login.styled";
import axios from "axios";


const NaverLoginForm = () => {

    const initData = Object.freeze({
        fullname: '',
        personalNumber: ''
    });
    
    const [data, updataData] = useState(initData);

    const link = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=xQ6XMGVRxbFRU3GgqKaW&state=1234&redirect_uri=http://localhost:3000/NaverLoginPage`;

    const href = window.location.href;
    let params = new URL(document.location).searchParams;
    let code = params.get("code");
    let state = params.get("state");

    const naverloginHandler = (e) => {
        const {naver} = window

        window.location.href = link;

        axios.post(`https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=xQ6XMGVRxbFRU3GgqKaW&client_secret=jEBGQNJqQL&code=9CBGNgAlbnXwnDKnZN&state=1234`)

        axios.post(`http://localhost:3000/NaverLoginPage/api/v1/oauth/sign/{Naver}?code=${code}&state=${state}`, {
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
            <button type = 'button' onClick={() => naverloginHandler(code)}>네이버로그인</button>
        </SignInBox>
    );
};
 
export default NaverLoginForm;