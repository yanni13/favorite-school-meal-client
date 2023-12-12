import React, {useEffect, useState} from "react";
import { SignInForm } from "../../styles/Login/Login.styled";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { getCookie } from "../../Cookies";

const ResetPwForm = () => {
    const navigate = useNavigate();
    const userId = useParams();
    const token = getCookie("ACCESS_TOKEN");

    const initData = Object.freeze({
        password1: '',
        password2: '',
    });

    const [data, updataData] = useState(initData);
    const [color, updataColor] = useState("#b8e8ff");
    const [isCheckPswd, setIsCheckPswd] = useState(false);//비밀번호 유효성 검사
    const [checkPswdMessage, setCheckPswdMessage] = useState("");//비밀번호오류메세지 상태
    const [checkPswd, setCheckPswd] = useState(initData.setCheckPswd);

    const [users, setUsers] = useState();

    useEffect(() => {
        if(data.password1.length > 0 && data.password2.length > 0) {
            updataColor("#609966");
        } else {
            updataColor("#A4D0A9");
        }
    }, [data])

    const handleChange = e => {
        console.log("[Info] : handleChange : " + e.target.value);
        updataData({
            ...data, [e.target.name]: e.target.value.trim()
        })
    }

    const onChangePwConfirm = (e) => {
        const currentPw = e.target.value;
        setCheckPswd(currentPw);

        //checkPswd에 값 넣어주기
        updataData({
            ...data, "password2" : e.target.value
        })
        
        if(currentPw.length >= 1){
            if(data.password1 !== currentPw) {
                setCheckPswdMessage("비밀번호가 일치하지 않습니다.");
                setIsCheckPswd(false);
                console.log(isCheckPswd)
            } else {
                setCheckPswdMessage("비밀번호가 일치합니다.");
                setIsCheckPswd(true);
            }
        }       
    }

    const ResetPw = (e) => {
        e.preventDefault();
       
        axios.put(`/members/${data.memberId}/modify-password`, 
        {
            "password" : data.password2
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }) 
        .then(res => {
            console.log("[Info] : ResetPw data : " + res.data.data)
            alert("비밀번호가 성공적으로 변경되었습니다.")
            navigate("/LoginPage")
        })
        .catch(err => {
            console.log("[Error] : ResetPw : ", err.response ?  err.response.data : err.message);
            console.log(err.message)
            alert("err")
        })
    }
    
    return (
        <SignInForm color={color}>
            <input 
             type="password" 
             name="password1" 
             placeholder="새 비밀번호" 
             value={data.password1}
             required 
             onChange={handleChange}/>
            <input
             type="password" 
             name="password2" 
             placeholder="새 비밀번호 확인" 
             value={data.password2}
             required 
             onChange={onChangePwConfirm}/>
             <p>{checkPswdMessage}</p>
             <p>비밀번호의 길이는 8 ~ 16자이며, 영문 대소문자, 숫자, 특수문자를 모두 포함해야 합니다.</p>
            <button className="submitBtn" type="button" onClick={ResetPw}>다음</button>
        </SignInForm>
    );
}

export default ResetPwForm;
