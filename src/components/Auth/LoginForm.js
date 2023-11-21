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
        e.preventDefault();

        axios.post("/users/login/tokens/", {
            "id": data.id,
            "password": data.password 
        })      
        .then(res => {//요청 성공했을 경우
            const accessToken = res.data.access
            console.log(accessToken);

            setCookie("ACCESS_TOKEN", `${accessToken}`); 
            console.log(res.data.access);
            console.log(res.data.refresh);
            
            alert("로그인 되었습니다.");
            return navigate("/", {
                state: {
                    check: true,
                    id: "aaa",
                    name: "aaa",
                }
            });
        })
        .catch(err => {//요청 실패했을 경우
            console.log(err);
            alert("회원정보가 없습니다.");
        })
    }

    const handleChange = e => {
        console.log(e.target.value);
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
             
            <button className="submitBtn" type="submit" onClick={loginDB}>
                로그인</button> {/*비밀번호 일치할 경우 메인페이지로 이동하도록 수정*/}

                {/* handleSubmit => navigate("/AfterLoginPage") */}
            
        </SignInForm>
        
    );
}

export default LoginForm;