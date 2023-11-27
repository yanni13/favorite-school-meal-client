import React, {useState, useEffect} from "react";
import { SelfIntroductionBox } from "../../styles/Login/MyPage.styled";
import { SignInForm } from "../../styles/Login/Login.styled";
import axios from "axios";
import { getCookie } from "../../Cookies";


const ModifyProfileForm = () => {

    const initData = Object.freeze({
        selfIntroduce : ''
    });

    const [data, updataData] = useState(initData);
    const [color, updataColor] = useState("#609966");

    useEffect(() => {
        if(data.selfIntroduce.length > 0 ) {
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

    const saveDB = (memberId) => {

        axios.put(`/members/${memberId}`, {
            "introduction": data.selfIntroduce
        }, {
            headers: {
                Authorization: `Bearer ${getCookie("ACCESS_TOKEN")}`,
                'Content-Type': 'application/json'
            }
        })
        .then(res => { //요청 성공했을 경우
            console.log("저장 성공", res.data);
            return res;
        })
        .catch(err => { //요청 실패했을 경우
            console.log(err);
            alert("정보저장에 실패했습니다.");
        })
    }

    //이미지 
    return (
        <SignInForm color={color}>
        <SelfIntroductionBox >
            <textarea
             type="text" 
             name="selfIntroduce" 
             placeholder="자기소개" 
             value={data.selfIntroduce}
             required 
             onChange={handleChange}
            />
        </SelfIntroductionBox>
        
            <button className="submitBtn" type="submit" onClick={saveDB}>저장</button>

        </SignInForm>
    )

}

export default ModifyProfileForm;