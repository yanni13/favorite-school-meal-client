import PostTable from "./PostTable";
import styled from "styled-components";
import { useState, useEffect } from 'react';
import axios from 'axios';
import PostButton from "./PostButton";

const S = {
    Wrapper : styled.div`
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 780px;
        justify-content: center;
        align-items: center;
    `,
    PostWrapper : styled.div`
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 348px;
        height: 95%;
        border-radius: 30px;
        background: #FFF;
        padding-top : 5px;
        overflow: scroll;
            &::-webkit-scrollbar {
                display: none;
        }
    `, 
    WriteButton : styled.div`
        position : absolute;
        bottom : 30px;
        left: 50%;
        transform : translateX(-50%);
    `
}

const PostBoard = () => {

    const [data, setData] = useState();
        useEffect(() => {
            axios.get(`/posts`).then((res) => {
                console.log(res.data.data);
                const formattedData = (res.data.data.content).map(post => ({
                    PostId: post.postId,
                    WriterId: post.writerId,
                    Title : post.title,
                    Content : post.content,
                    MatchingState : post.matching.matchingStatus,
                    CreatedTime : post.createdAt,
                    CommentCount : post.commentCount
                }));
                setData(formattedData);
            }).catch((err) => {
                console.log("MiniBoard 에러 발생")
                console.log(err);
            });
        },[]);

    return(
        <>
            <S.Wrapper>
                <S.PostWrapper>
                    {data && data.map((item) => (
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
                </S.PostWrapper>
            </S.Wrapper>
            <S.WriteButton>
                <PostButton/>
            </S.WriteButton>
        </>
    )
}

export default PostBoard;