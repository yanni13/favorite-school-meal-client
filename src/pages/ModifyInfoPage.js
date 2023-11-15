import React from "react";
import { useNavigate } from "react-router-dom";
import { FindPage, SignInBox } from "../styles/Login/Login.styled";
import ModifyInfoForm from "../components/Auth/ModifyInfoForm";
import TitledHeader from "../components/Header/TitledHeader";

const ModifyInfoPage = () => {

    const navigate = useNavigate();

    const deleteMember = (e) => {

        e.preventDefault();
    }
    /*const deleteMember = (e) => {//회원가입 api 호출
        e.preventDefault();

        axios.post("/users/", {
            "user_name": data.name,
            "email": data.email,
            "id": data.id,
            "password": data.pswd
              
        })
        .then((res) => { //요청 성공했을 때
            console.log(res.data)
            if(res.status === 201) {
                alert("환영합니다!");
                navigate("/LoginPage");
            } else if(res.status === 500) {
                alert("해당하는 정보의 사용자가 이미 존재합니다.")
            }
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
    }*/

    return (
        <>
        <TitledHeader title="회원정보 수정"/>
        <SignInBox>
            <h2 className="subtitle">회원 정보 수정</h2>
            <ModifyInfoForm/>

            <FindPage>
                <button className="titleBtn" type="submit" onClick={deleteMember}>회원 탈퇴하기</button>
            </FindPage>
        </SignInBox>
        </>
    )
}

export default ModifyInfoPage;