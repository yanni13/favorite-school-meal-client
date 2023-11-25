import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import comment_logo from '../../media/Post/comment_logo.svg';
import clock_logo from '../../media/Map/clock_logo.svg';
import Divider from '../Divider';
import CommentForm from '../Comment/CommentForm';
import CommentTable from '../Comment/CommentTable';

const S = {
    Wrapper : styled.div`
        display: flex;
        flex-direction: column;
        width: 89%;
        justify-content: flex-start;
        align-items: flex-start;
        overflow: scroll;
        &::-webkit-scrollbar {
            display: none;
        }
        padding: 19px;
    `,
    ProfileWrapper : styled.div`
        display : flex;
        flex-direction : row;
        justify-content : space-between;
        align-items : flex-start;
        width: 100%;
    `,
    ProfileImage : styled.div`
        width : 50px;
        height : 50px;
        border-radius: 50%;
        background-color: grey;
    `,
    ProfileMiddleWrapper : styled.div`
        display : flex;
        flex-direction : column;
        justify-content : flex-start;
        align-items : flex-start;
        margin-left : 11px; 
    `,
    ProfileName : styled.div`
        color: #000;
        font-family: Noto Sans KR;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    `,
    TimeText : styled.div`
        color: #A1A1A1;
        font-family: Noto Sans KR;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    `,
    RequestButton : styled.button`
        width: 70px;
        height: 44px;
        border-radius: 20px;
        background: #609966;
        border : none;
        margin-left : auto;
    `,
    TitleText : styled.a`
        display : flex;
        text-align: left;
        color: #000;
        font-family: Noto Sans KR;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin: 6px 0 6px;
    `,
    ContentText : styled.a`
        color: #000;
        font-family: Noto Sans KR;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        word-wrap : break-word;
    `,
    UnderBarWrapper : styled.div` 
        width: 100%;
        display : flex;
        justify-content : space-between;
        align-items : center;
        margin-top: 6px;
    `,
    OpenStatusBox : styled.div`
        width: 45px;
        height: 15px;
        border-radius: 5px;
        background: #609966;
        color: #FFF;
        font-family: Noto Sans KR;
        font-size: 9px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-left : 5px;
    `,
    CommentFormWrapper : styled.div`
        background-color: white;
        position : absolute;
        bottom : 30px;
        left: 50%;
        transform: translateX(-50%);
        width: 348px;
        border-radius : 30px;
    `
}
const CloseStatusBox = styled(S.OpenStatusBox)`
    background: #FF0000;
`;

const PostDetail= () => {
    const id = useParams();
    const [data, setData] = useState();
    const [userData, setUserData] = useState();  

    useEffect(() => {
        axios.get('/posts/' + id.PostId).then((response) => {
            console.log(response.data.data);
            setData(response.data.data);
        });
    }, []);

    return(
        <>
        {data && 
            <>
            <S.Wrapper>
                <S.ProfileWrapper>
                    <S.ProfileImage/>
                    <S.ProfileMiddleWrapper>
                        
                        <S.ProfileName>{data.memberId}</S.ProfileName>
                        <S.TimeText>{data.createdAt}</S.TimeText>
                    </S.ProfileMiddleWrapper>
                    <S.RequestButton>요청</S.RequestButton>
                </S.ProfileWrapper>
                <S.TitleText>{data.title}</S.TitleText>
                <S.ContentText>{data.content}</S.ContentText>
                
                <S.UnderBarWrapper> 
                    <img src={comment_logo} alt="comment_logo" style={{width: "20px", height: "20px", marginRight : "5px"}}/>
                    <S.TimeText>{data.commentCount}</S.TimeText>
                    {
                        (data.matching.matchingStatus === "CLOSED" ? 
                            <CloseStatusBox>마감</CloseStatusBox>
                        :   
                            <S.OpenStatusBox>진행중</S.OpenStatusBox>
                        )
                    }
                        <img src={clock_logo} alt="clock_logo" style={{width: "20px", height: "20px", marginRight : "5px", marginLeft : "auto"}}/>
                        <S.TimeText>{data.matching.meetingDateTime}</S.TimeText> 
                </S.UnderBarWrapper> 
                <Divider/>
                <CommentTable id={data.postId}/>
            
            </S.Wrapper>
            <S.CommentFormWrapper>
                    <CommentForm id={data.postId}/>
            </S.CommentFormWrapper>
            </>
        }
        </>
    )
}

export default PostDetail;
