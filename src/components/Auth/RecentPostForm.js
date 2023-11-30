import React, {useState, useEffect} from "react";
import axios from "axios";
import { MyPageBox } from "../../styles/Login/MyPage.styled";
import PostTable from "../Post/PostTable";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const S = {
    InfoWrapper: styled.div`
        margin : 25px 0 25px 0;
        display : flex;
        gap: 15px;
    `,
    NickNameText : styled.a`
        color: #000;
        font-family: Noto Sans KR;
        font-size: 26px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    `,
    GenderAgeText : styled.a`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #000;
        font-family: Noto Sans KR;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    `,
    ButtonWrapper : styled.div`
        width: 350px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 13px;
    `,
    CustomButton : styled.button`
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 144px;
        height: 39px;
        border-radius: 3px;
        border: none;
        text-decoration: none;
        background: #A4D0A9;
        color: #000;
        font-family: sans-serif;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    `,
    IntroduceBox : styled.div`
        width: 320px;
        height: 211px;
        background-color: #FFFFFF;
        border-radius: 10px;
        padding: 10px;
    `,
    RecentPostTitle : styled.div`
        width: 320px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin : 14px 0 8px 0;
        color: #000;
        font-family: sans-serif;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    `,
    PostBox : styled.div`
        width: 340px;
        height: 170px;
        background-color: #FFFFFF;
        border-radius: 10px;
    `
}

const RecentPostForm = () => {
    const userId = useParams();

    const [currentUsers, setCurrentUsers] = useState();
    const [postData, setPostData] = useState();

    const size = 6;
        useEffect(() => {
            // axios.get(`/posts?size=${size}`).then((res) => {
            //     const formattedData = (res.data.data.content).map(post => ({
            //         PostId: post.postId,
            //         WriterId: post.writerId,
            //         Title : post.title,
            //         Content : post.content,
            //         MatchingState : post.matching.matchingStatus,
            //         CreatedTime : post.createdAt,
            //         CommentCount : post.commentCount
            //     }));
            //     setPostData(formattedData);
            // }).catch((err) => {
            //     console.log("MiniBoard 에러 발생")
            //     console.log(err);
            // });
            axios.get(`/members/${userId.UserId}/posts`).then((res) => {
                const formattedData = (res.data.data.content).map(post => ({
                            PostId: post.postId,
                            WriterId: post.writerId,
                            Title : post.title,
                            Content : post.content,
                            MatchingState : post.matching.matchingStatus,
                            CreatedTime : post.createdAt,
                            CommentCount : post.commentCount
                        }));
                        setPostData(formattedData);
                }). catch((err) => {
                    console.log(err);
                })
        },[]);

        

    return(
        <>
        
        <MyPageBox>
            <S.PostBox>
                    {postData && postData.map((item) => (
                    <PostTable
                        key={item.PostId} // Add a unique key when rendering lists
                        PostId={item.PostId}
                        WriterId={item.WriterId}
                        Title={item.Title}
                        Content={item.Content}
                        MatchingState={item.MatchingState}
                        CreatedTime={item.CreatedTime}
                        CommentCount={item.CommentCount}
                    />
                ))}
                </S.PostBox>
        </MyPageBox>
        </>
    )
}

export default RecentPostForm;