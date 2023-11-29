//프로필 수정
import React from "react";
import TitledHeader from "../components/Header/TitledHeader";
import { useNavigate } from "react-router-dom";
import { FindPage } from "../styles/Login/Login.styled";
import ModifyProfileForm from "../components/Auth/ModifyProfileForm";

const ModifyProfile = () => {

    const navigate = useNavigate();

    return(
        <>
        <TitledHeader title="프로필 수정"/>
        <ModifyProfileForm/>
        </>
        
    
    )

}

export default ModifyProfile;