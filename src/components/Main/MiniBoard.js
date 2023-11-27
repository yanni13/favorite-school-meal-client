import styled from 'styled-components';
import styles from "../../styles/Main/MiniBoard.module.css";
import BoardLogo from "../../media/Main/BoardLogo.svg";
import PostTable from "../Post/PostTable";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from 'react';

const S = {
    Wrapper: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 348px;
        height: 356px;
        border-radius: 30px;
        background: #FFF;
        margin-left: 21px;
        padding-top : 5px;
    `,
}   

export default function MiniBoard() {
    const BoardTitle = () => {
        return(
            <div className={styles.title}>
                <img src={BoardLogo}/>
                <span style={{
                    color: '#1C1C1C',
                    fontFamily: 'Noto Sans KR',
                    fontSize: '22px',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    lineHeight: 'normal',
                    margin: '18.72, 0, 18.72, 0',
                    whiteSpace: 'nowrap'
                }}>게시판</span>
                <Link to='/PostPage' style={{ 
                    textDecoration: "none",
                    marginTop: '10px',
                    marginLeft: '175px',
                    color: '#A1A1A1',
                    fontFamily: "Noto Sans KR",
                    fontSize: "10px"
                }}>
                    자세히 보기
                </Link>
            </div>
        );
    }

    const [data, setData] = useState();
    const size = 6;
        useEffect(() => {
            axios.get(`/posts?size=${size}`).then((res) => {
                // console.log(res.data.data);
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
            <BoardTitle/>
            <S.Wrapper>
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
            </S.Wrapper>
        </>

    );

}