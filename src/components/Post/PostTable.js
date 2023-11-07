import styled from 'styled-components';
import React, { useState } from 'react';

function PostTable(props){
    const { Title, Time, Content } = props;

    const S = {
        Wrapper: styled.div`
            display: block;
            border-bottom: 1px solid #DADADA;
            width: 322px;
            margin-top: 5px;
        `,
        TitleBox: styled.div`
            display: flex;
            justify-content: space-between;
            overflow:hidden;
            text-overflow: ellipsis;
        `,
        TitleText: styled.a`
            color: #000;
            font-family: Noto Sans KR;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        `,
        TimeText: styled.a`
            color: #A1A1A1;
            font-family: Noto Sans KR;
            font-size: 10px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        `,
        ContentBox: styled.div`
            display: flex;
            margin : 3px 0px 3px 0px;
        `,
        ContentText: styled.a`
            color: #A1A1A1;
            font-family: Noto Sans KR;
            font-size: 10px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        `,
    }

    return(
        <>
            <S.Wrapper>
                <S.TitleBox>
                    <S.TitleText>식사 신청이 승인되었습니다!</S.TitleText>
                    <S.TimeText>30분전</S.TimeText>
                </S.TitleBox>
                <S.ContentBox>
                    <S.ContentText>“이도앞 자연계 식당 밥먹을 분 아무나...” 글의 신청이 승인 되었습니다.</S.ContentText>
                </S.ContentBox>
            </S.Wrapper>
        </>
    );
}

export default PostTable;