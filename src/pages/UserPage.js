import React from "react";
import TitledHeader from "../components/Header/TitledHeader";
import Profile from "../components/Auth/Profile";
import styled from "styled-components";

const S = {
    Wrapper : styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `,
}

const UserPage = () => {
    return (
        <>
        <S.Wrapper>
            <TitledHeader title = "회원정보"></TitledHeader>
            <Profile/>
        </S.Wrapper>
        </>
    )
}

export default UserPage;