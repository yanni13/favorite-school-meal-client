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
        margin-top: 6px;
    `,
    StatusBox : styled.div`
        width: 45px;
        height: 15px;
        border-radius: 5px;
        border: 0.5px solid #609966;
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

const PostDetail= ({ id }) => {
    const [data, setData] = useState( {} );

    // useEffect(() => {
    //     axios.get('' + id).then((response) => {
    //         setData(response.data);
    //     })
    // },[]);


    return(
        <>
            <S.Wrapper>
                <S.ProfileWrapper>
                    <S.ProfileImage/>
                    <S.ProfileMiddleWrapper>
                        <S.ProfileName>사용자</S.ProfileName>
                        <S.TimeText>2021.09.01</S.TimeText>
                    </S.ProfileMiddleWrapper>
                    <S.RequestButton>요청</S.RequestButton>
                </S.ProfileWrapper>
                <S.TitleText>제목 입니다</S.TitleText>
                <S.ContentText>내용 입니다</S.ContentText>

                <S.UnderBarWrapper>
                    <img src={comment_logo} alt="comment_logo" style={{width: "20px", height: "20px", marginRight : "5px"}}/>
                    <S.TimeText>1</S.TimeText>
                    <S.StatusBox>진행중</S.StatusBox>
                        <img src={clock_logo} alt="clock_logo" style={{width: "20px", height: "20px", marginRight : "5px", marginLeft : "auto"}}/>
                        <S.TimeText>11:00 ~ 13:00</S.TimeText>
                    
                </S.UnderBarWrapper> 
                <Divider/>
                <CommentTable/>

            </S.Wrapper>
            <S.CommentFormWrapper>
                    <CommentForm id={id}/>
            </S.CommentFormWrapper>
        </>
    )
}

export default PostDetail;
