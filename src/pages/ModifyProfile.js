//프로필 수정
import React from "react";
import TitledHeader from "../components/Header/TitledHeader";
import ModifyProfileForm from "../components/Auth/ModifyProfileForm";

const ModifyProfile = () => {

    return(
        <>
        <TitledHeader title="프로필 수정"/>
        <ModifyProfileForm/>
        </>
        
    
    )

}

export default ModifyProfile;