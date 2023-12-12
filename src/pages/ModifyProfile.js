//프로필 수정
import React from "react";
import TitledHeader from "../components/Header/TitledHeader";
import ModifyProfileForm from "../components/Auth/ModifyProfileForm";
import { SignInForm } from "../styles/Login/Login.styled";
import { useNavigate } from "react-router-dom";

const ModifyProfile = () => {
    const navigate = useNavigate();

    return(
        <>
        <TitledHeader title="프로필 수정"/>
        <ModifyProfileForm/>
        <SignInForm>

        </SignInForm>
        </>
        
    
    )

}

export default ModifyProfile;