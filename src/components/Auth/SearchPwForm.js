import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { SignInForm } from "../../styles/Login/Login.styled";
import axios from "axios";

const SearchPwForm = () => {

    const navigate = useNavigate();

    const initData = Object.freeze({// freeze-객체를 동결하기 위해서
        username: '',
        email: '',
    });
    const [data, updataData] = useState(initData);
    const [color, updataColor] = useState("#b8e8ff")

    useEffect(() => {
        if(data.username.length > 0 && data.email.length > 0) {
            updataColor("#609966");
        } else {
            updataColor("#A4D0A9");
        }
    }, [data])

    const handleChange = e => {
        console.log(e.target.value);
        updataData({
            ...data, [e.target.name]: e.target.value.trim()
        })
    }

    const handleSubmit = e => {
        e.preventDefault(); //새로고침방지
        console.log(e.target.value);
    }

    const sendTempMessage = (e) => { //임시 비밀번호 발급 api
        e.preventDefault();
        
        axios.post('/email/password', {
            "username": data.username,
            "email": data.email,
        })
        .then((res) => {
            console.log(res);
            console.log(res.data.data);
            alert("이메일로 임시 비밀번호를 발급해 드렸습니다!");
            const confirmed = window.confirm('비밀번호를 재설정하시겠습니까?');

            if(confirmed) {
                navigate("/ResetPwPage");
            } else {
                alert("메인 페이지로 돌아가겠습니다.");
                navigate("/");
            }

        })
        .catch((err) => {
            console.log(err);
            console.log("Error status:", err.response.status);
                console.log("Error data:", err.response.data.data);
            alert("정보가 일치하지 않습니다.");
        })
    }
    return (
        <SignInForm color={color}>
            <input
             type="text" 
             name="username" 
             placeholder="아이디" 
             value={data.username}
             required 
             onChange={handleChange}/>
            <input
             type="email" 
             name="email" 
             placeholder="이메일" 
             value={data.email}
             required 
             onChange={handleChange}/>
            <button className="submitBtn" type="submit" onClick={sendTempMessage}>다음</button>
        </SignInForm>
    );
}

export default SearchPwForm;