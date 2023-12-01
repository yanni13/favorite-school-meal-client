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

    const link = 'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=xQ6XMGVRxbFRU3GgqKaW&state=1234&redirect_uri=http://localhost:3000/NaverLoginPage';

    let params = new URL(document.location).searchParams;
    let code = params.get("code");
    let state = params.get("state");

    const naverloginHandler = (e) => {

        window.location.href = link;

        axios.post({link})//접근토근 발급

        
    };

    const getCode = () => { //인가코드 추출
        if(code) {
            naverloginHandler(code);
        } else {
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