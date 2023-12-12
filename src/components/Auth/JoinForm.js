import React, {useCallback, useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { SignInForm } from "../../styles/Login/Login.styled";
import {set, usewatch} from "react-hook-form";

const JoinForm = () => {

    const navigate = useNavigate();

    const initData = Object.freeze({
        id:'',
        name: '',
        nickname: '',
        num: '',
        email: '',
        pswd: '',
        checkPswd: '',
    });
    
    const [data, updateData] = useState(initData);
    const [num, setNum] = useState("");
    const [checkPswd, setCheckPswd] = useState(initData.setCheckPswd);
    const [checkPswdMessage, setCheckPswdMessage] = useState("");//비밀번호오류메세지 상태
    const [isCheckPswd, setIsCheckPswd] = useState(false);//비밀번호 유효성 검사
    const [color, updateColor] = useState("#b8e8ff")

    useEffect(() => {
        if( data.id.length > 0 && data.name.length > 0 &&
            data.nickname.length > 0 && data.num.length > 0
            && data.email.length > 0 &&
            data.pswd.length > 0 && data.checkPswd.length > 0) {
            updateColor("#609966");
        } else {
            updateColor("#A4D0A9");
        }
    }, [data]);

    const SignUpDB = (e) => {//회원가입 api 호출
        console.log(data);
        e.preventDefault();

        axios.post("/auth/sign-up", {
            "username": data.id, //아이디
            "fullname": data.name, //실명
            "nickname" :data.nickname, //닉네임
            "personalNumber": data.num, //주민등록번호
            "email": data.email,
            "password": data.pswd
        })
        .then((res) => { //요청 성공했을 때
            console.log(res.data)
            alert("환영합니다!");
            navigate("/LoginPage");
        })

        .catch((error) => { // 에러 핸들링 부분 수정
            if (error.response) {
                console.log("Error status:", error.response.status);
                console.log("Error data:", error.response.data);
                alert("다시 입력해주세요");
            } else {
                console.log("Error:", error.message);
            }
        });
    }

    const onChangePwConfirm = (e) => {
        const currentPw = e.target.value;
        setCheckPswd(currentPw);

        //checkPswd에 값 넣어주기
        updateData({
            ...data, "checkPswd" : e.target.value
        })
        
        console.log("pswd : " + data.pswd)
        console.log("curretPw: " + currentPw)
        if(currentPw.length >= 1){
            if(data.pswd !== currentPw) {
                setCheckPswdMessage("비밀번호가 일치하지 않습니다.");
                setIsCheckPswd(false);
                console.log(isCheckPswd)
            } else {
                setCheckPswdMessage("비밀번호가 일치합니다.");
                setIsCheckPswd(true);
            }
        }       
    }
    
    const handleChange = (e) => {
        
        updateData({
            ...data, [e.target.name] : e.target.value
        })
    }

    const maskingNum = (e) => { //주민등록번호 마스킹 처리
        e.preventDefault();

        const input = e.target.value.replace(/[^0-9]/g, '');

        if (input.length === 7) {
            const maskedNumber = input.substring(0, 6) + '-' + input.substring(6, 7) + '******';
            setNum(maskedNumber);
            updateData({
                ...data,
                [e.target.name]: maskedNumber.substring(0, 6) + maskedNumber.substring(7, 8)
            });
        } else {
            setNum(input);
        }

        console.log(data);
        console.log(num);

    };

    return (
        <SignInForm color={color}>
            <input
             type="text" 
             name="name" 
             placeholder="이름" 
             value={data.name}
             required 
             onChange={handleChange}/>
            <input 
             type="text" 
             name="id" 
             placeholder="아이디" 
             value={data.id}
             required 
             onChange={handleChange}/>
             <input
             type="text" 
             name="nickname" 
             placeholder="닉네임" 
             value={data.nickname}
             required 
             onChange={handleChange}/>

             <input
             type="text" 
             name="num" 
             placeholder="주민등록번호" 
             value={num}
             maxLength={14}
             required 
             onChange={maskingNum}/>

            <input
             type="email" 
             name="email" 
             placeholder="이메일" 
             value={data.email}
             required 
             onChange={handleChange}/>
            
             <input
             type="password" 
             name="pswd" 
             placeholder="비밀번호"
             onChange={handleChange} 
             value={data.pswd}
             required/>

             <input
             type="password" 
             name="checkPswd" 
             placeholder="비밀번호 확인" 
             value={data.checkPswd}
             onChange={onChangePwConfirm}
             required/>
             <p>{checkPswdMessage}</p>

            <button 
                className="submitBtn"
                type="submit"
                onClick={(SignUpDB)}
                disabled = {
                    !(data.id.length > 0 && data.name.length > 0 &&
                    data.nickname.length > 0 && data.num.length > 0
                    && data.email.length > 0 &&
                    data.pswd.length > 0 && data.checkPswd.length > 0)
                }
            >
                회원가입
            </button>
            {/* handleSubmit => navigate("/") */}
        </SignInForm>
    );
}

export default JoinForm;