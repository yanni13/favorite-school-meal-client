import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


const S = {
    Wrapper : styled.div`
        display: flex;
        flex-direction: column;
        width: 89%;
        justify-content: center;
        align-items: center;
        padding : 19px;
    `,
    ProfileWrapper : styled.div`
        display : flex;
        flex-direction : row;
        justify-content : flex-start;
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
        height : 100%;
    `,
    ProfileName : styled.span`
        color: #000;
        font-family: Noto Sans KR;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    `,
    TimeText : styled.span`
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
    `,
    ContentText : styled.a`
        width: 100%;
        color: #000;
        font-family: Noto Sans KR;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    `,
    UnderBarWrapper : styled.div`
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
            </S.Wrapper>

        </>
    )
}

export default PostDetail;
