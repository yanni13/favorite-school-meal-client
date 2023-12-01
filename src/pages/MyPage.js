//마이페이지(나) - 피그마 6번페이지
import React from "react";
import styled from "styled-components";
import MyPageForm from "../components/Auth/MyPageForm";
import TitledHeader from "../components/Header/TitledHeader";
import RecentPostForm from "../components/Auth/RecentPostForm";

const Font = styled.div`
    text-align: left;
    margin: 30px;
    margin-bottom: -10px;
    font-family: Noto Sans KR;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

const MyPage = () => {

    return (
        <>
            <TitledHeader title="마이 페이지"/>
  
               <MyPageForm/>
               <Font>최근에 작성한 게시글</Font>
               <RecentPostForm/>

        </>
    )
}

export default MyPage;