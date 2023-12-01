import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { setCookie } from "../Cookies";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TitledHeader from "../components/Header/TitledHeader";

const KakaoLoginPage = () => { 

    
    const code = new URL(window.location.toString()).searchParams.get("code");
    console.log(code);
    
    // const fetchData = async () => {
    //     try {
    //         const response = await axios.get('/members', {
    //             headers: {
    //                 Authorization: Bearer ${getCookie("ACCESS_TOKEN")},
    //             }
    //         });
    //         const receivedUserId = response.data.data.memberId;

    //         const size = 3;
    //         const res = await axios.get(/members/${receivedUserId}/posts?size=${size});

    //         const contentArray = res.data?.data?.content || [];
    //         const formattedData = contentArray.map(post => ({
    //             PostId: post.postId,
    //             WriterId: post.writerId,
    //             Title: post.title,
    //             Content: post.content,
    //             MatchingState: post.matching.matchingStatus,
    //             CreatedTime: post.createdAt,
    //             CommentCount: post.commentCount
    //         }));
    //         setPostData(formattedData);
    //     } catch (error) {
    //         console.log(error);



    return (
        <>
            <TitledHeader title="회원가입"/>
        </>
    )
};

export default KakaoLoginPage
