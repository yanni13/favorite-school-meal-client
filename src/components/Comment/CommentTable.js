import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import report_logo from '../../media/Post/report_logo.svg';
import Divider from '../Divider';


const S = {
    Wrapper : styled.div`
        display : block;
        width: 315px;
        margin-top : 5px;

    `,
    UpperWrapper : styled.div`
        display : flex;
        justify-content : space-between;
        align-items: center;
    `,
    ProfileImage : styled.div`
        width : 40px;
        height : 40px;
        background-color: grey;
        border-radius: 50%;
    `,
    ProfileName : styled.div`
        color: #000;
        font-family: Noto Sans KR;
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-left : 10px;
    `,
    ReportBox : styled.div`
        margin-left : auto;
    `,
    ContentText : styled.a`
        margin-top : 5px;
        display: flex;
        justify-content: flex-start;
        text-align: left;
        word-wrap : break-word;
        color: #000;
        font-family: Noto Sans KR;
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    `,

}


const CommentTable = () => {
    const [data, setData] = useState({
        title : "글제목 입니다.",
        content : "글내용 입니다. 하지만 글내용을 이렇게 많이넣었을때는  ellipsis를 통해  점점점 처리를 해버릴겁니다."
    });

    return (
        <>
            <S.Wrapper>
                <S.UpperWrapper>
                    <S.ProfileImage/>
                    <S.ProfileName>사용자</S.ProfileName>
                    <S.ReportBox>
                        <Link to="/">
                            <img src={report_logo}/>
                        </Link>
                    </S.ReportBox>
                </S.UpperWrapper>
                
                <S.ContentText>내용 입니다.내용 입니다.내용 입니다.내용 입니다.내용 입니다.내용 입니다.내용 입니다.</S.ContentText>
                <Divider/>
            </S.Wrapper>
        </>
    )

}

export default CommentTable;