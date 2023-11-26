import React from "react";
import MyPage from "./MyPage";
import TitledHeader from "../components/Header/TitledHeader";
import Profile from "../components/Auth/Profile";

const UserPage = () => {

    return (
        <>
        <TitledHeader title = "회원정보"></TitledHeader>
        <Profile/>
        </>
    )
}

export default UserPage;