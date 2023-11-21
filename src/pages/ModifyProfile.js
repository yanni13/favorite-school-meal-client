//프로필 수정
import React from "react";
import TitledHeader from "../components/Header/TitledHeader";
import { useNavigate } from "react-router-dom";
import { SignInBox } from "../styles/Login/Login.styled";

const ModifyProfile = () => {

    const navigate = useNavigate();

    return(
        <>
        <TitledHeader title="회원정보"/>
        <SignInBox>
            <h2 className="second-font">프로필 수정</h2>

        </SignInBox>
        
        </>

        
        
    )

}

export default ModifyProfile;