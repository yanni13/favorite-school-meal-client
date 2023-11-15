import React, {useEffect, useState} from "react";
import { SignInForm } from "../../styles/Login/Login.styled";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getCookie } from "../../Cookies";

const ResetPwForm = () => {
    const navigate = useNavigate();

    const initData = Object.freeze({// freeze-객체를 동결하기 위해서
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

    useEffect(()=>{
        axios.get('/users/login/auth/',
            {
                headers: {
                Authorization: `Bearer ${getCookie("ACCESS_TOKEN")}`,
                }
            })
            .then((response) => {
                console.log(response.data);
                setUsers(response.data); //받아온 데이터 저장
            })
            .catch((error)=>{
            console.log(error);
        })

    }, []);

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

        axios.post("/users/recover/password/modifications/", {
            "user_id" : users.user_id,
            "password" : data.password2
        })
        .then(res => {
            alert("비밀번호가 성공적으로 변경되었습니다.")
            console.log("[Info] : ResetPw data : " + res.data)
            return navigate("/LoginPage")
        })
        .catch(err => {
            console.log("[Error] : ResetPw : " + err.response.data);
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
             placeholder="비밀번호" 
             value={data.password2}
             required 
             onChange={onChangePwConfirm}/>
             <p>{checkPswdMessage}</p>
            <button className="submitBtn" type="submit" onClick={ResetPw}>다음</button>
        </SignInForm>
    );
}

export default ResetPwForm;
