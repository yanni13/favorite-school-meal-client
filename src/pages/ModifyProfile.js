//프로필 수정
import React from "react";
import TitledHeader from "../components/Header/TitledHeader";
import { useNavigate } from "react-router-dom";

const ModifyProfile = () => {

    const navigate = useNavigate();

    return(
        <>
        <TitledHeader title="회원정보"/>

        </>
    )

}

export default ModifyProfile;