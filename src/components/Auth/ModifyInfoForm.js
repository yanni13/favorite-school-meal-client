import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SignInForm, FindPage } from "../../styles/Login/Login.styled";

const ModifyInfoForm = () => {
    const navigate = useNavigate();

    const initData = Object.freeze({
        name: '',
        id:'',
        email: '',
        pswd: '',
        checkPswd: '',
    });

    const [data, updataData] = useState(initData);
    const [checkPswd, setCheckPswd] = useState(initData.setCheckPswd);
    const [checkPswdMessage, setCheckPswdMessage] = useState("");//비밀번호오류메세지 상태
    const [isCheckPswd, setIsCheckPswd] = useState(false);//비밀번호 유효성 검사
    const [color, updataColor] = useState("#b8e8ff")

    useEffect(() => {
        if( data.id.length > 0 && data.name.length > 0 &&
            data.email.length > 0 && data.pswd.length > 0 &&
            data.checkPswd.length > 0) {
            updataColor("#609966");
        } else {
            updataColor("#A4D0A9");
        }
    }, [data])


    const onChangePwConfirm = (e) => {
        const currentPw = e.target.value;
        setCheckPswd(currentPw);

        //checkPswd에 값 넣어주기
        updataData({
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
        console.log(e.target.value);
        
        updataData({
            ...data, [e.target.name] : e.target.value
        })
    }


    const deleteMember = (e) => {
        const confirmed = window.confirm('정말 탈퇴하시겠습니까?');

        if(confirmed) { //'네'를 눌렀을 경우 진행되는 동작
            axios.post('', { //백엔드에 회원탈퇴정보를 넘겨주는 동작

            })
        }
    }

    return (
        <SignInForm color={color}>
            <br/>

            <input 
             type="text" 
             name="id" 
             placeholder="아이디" 
             value={data.id}
             required 
             onChange={handleChange}/>
             <input
             type="text" 
             name="name" 
             placeholder="이름" 
             value={data.name}
             required 
             onChange={handleChange}/>
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

            <FindPage>
                <button className="textBtn" type="submit" onClick={deleteMember}>회원 탈퇴하기</button>
            </FindPage>
            <br/>
            <button className="submitBtn" type="submit" onClick={(handleChange)}>저장</button>
        </SignInForm>
    );
}

export default ModifyInfoForm;