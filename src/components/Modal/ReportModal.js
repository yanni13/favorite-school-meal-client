import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';
import report_logo from '../../media/Post/report_logo.svg';

const S = {
    Wrapper : styled.div`
        position: absolute;
        top : 50%;
        left : 50%;
        transform: translate(-50%, -50%);
        display : flex;
        flex-direction : column;
        justify-content : start;
        align-items : flex-start;
        height: 260px;
        width: 346px;
        background-color: #FFFFFF;
        border-radius: 30px;
        padding : 15px;
    `,
    TitleWrapper : styled.div`
        display : flex;
        justify-content : flex-start;
    `,
    TitleText : styled.a`
        color: #000;
        font-family: Noto Sans KR;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    `,
    ContentText : styled.a`
        color: #000;
        font-family: Noto Sans KR;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin : 10px 0 10px 0;
    `,
    SelectBox : styled.select`
        width: 315px;
        height: 40px;
        border : 1px solid #A1A1A1;
        color: #A1A1A1;
        font-family: Noto Sans KR;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        border-radius: 20px;
    `,
    ReportButtonWrapper : styled.div`
        margin-top : 110px;
        width: 100%;
        display : flex;
        justify-content : center;
        align-items : center;
    `,
    ReportButton : styled.button`
        width: 110px;
        height: 32px;
        background-color: #000;
        border-radius: 20px;
        color: #A1A1A1;
        font-family: Noto Sans KR;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        border: 1px solid #D7D7D7;
        background: #FFF;
    `,
}

const ReportModal = () => {
    return (
        <>
            <S.Wrapper>
                <S.TitleWrapper>
                    <img src={report_logo} alt="report_logo" />
                    <S.TitleText>신고하기</S.TitleText>
                </S.TitleWrapper>
                <S.ContentText>해당 사용자를 아래와 같은 사유로 신고합니다.</S.ContentText>
                <S.SelectBox>
                    <option value="1">불쾌감(모욕감)을 주는 행동 (욕설,비방,도배) </option>
                    <option value="2">광고 / 사행성 / 불법 게시글</option>
                    <option value="3">유출 / 사칭 / 사기</option>
                    <option value="4">음란물 / 불건전한 만남 및 대화</option>
                    <option value="5">정당/정치인 비하 및 선거운동</option>
                </S.SelectBox>
                <S.ReportButtonWrapper>
                    <S.ReportButton>신고하기</S.ReportButton>
                </S.ReportButtonWrapper>
                

            

            </S.Wrapper>
        </>
    )
}

export default ReportModal