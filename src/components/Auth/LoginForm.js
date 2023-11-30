import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { SignInForm } from "../../styles/Login/Login.styled";
import axios from "axios";
import { setCookie } from "../../Cookies";

const LoginForm = () => {
    const navigate = useNavigate();

    const initData = Object.freeze({
        id: '',
        password: '',
    });
    const [data, updataData] = useState(initData);
    const [color, updataColor] = useState("#609966");

    useEffect(() => {
        if(data.id.length > 0 && data.password.length > 0) {
            updataColor("#609966");
        } else {
            updataColor("#A4D0A9");
        }
    }, [data])

    const loginDB = (e) => { //로그인 api 호출

        axios.post("/auth/sign-in", {
            "username": data.id,
            "password": data.password 
        })      
        .then(res => {//요청 성공했을 경우
            console.log(res.data.data);
            const accessToken = res.data.data.access_token
            if(accessToken !== undefined) {
                setCookie("ACCESS_TOKEN", `${accessToken}`);
                alert("로그인 되었습니다.");
                return navigate("/");
            }
            else {
                alert(res.data.data.message);
                window.location.reload();
            }  
        })
    };

    const handleChange = e => {
        updataData({
            ...data, [e.target.name]: e.target.value.trim()
        })
    }

    return (
        <SignInForm color={color}>
            <input 
             type="text" 
             name="id" 
             placeholder="아이디" 
             value={data.id}
             required 
             onChange={handleChange}/>
            <input
             type="password" 
             name="password" 
             placeholder="비밀번호" 
             value={data.password}
             required 
             onChange={handleChange}/>
             
            <button className="submitBtn" type="button" onClick={loginDB}>
                로그인
                </button> {/*비밀번호 일치할 경우 메인페이지로 이동하도록 수정*/}
        </SignInForm>
        
    );
}

export default LoginForm;