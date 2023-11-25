import React from "react";
import axios from "axios";
import { MyPageBox } from "../../styles/Login/MyPage.styled";
import PostTable from "../Post/PostTable";

const RecentPostForm = () => {


    return(
        <MyPageBox>
            <PostTable/>
            <PostTable/>
            <PostTable/>
            <PostTable/>
        </MyPageBox>
    )
}

export default RecentPostForm;