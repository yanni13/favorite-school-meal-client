import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import report_logo from '../../media/Post/report_logo.svg';
import Divider from '../Divider';
import axios from 'axios';


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

const CommentTable = ({ id }) => {
    const [data, setData] = useState();
    const url = '/posts/' + id + '/comments';

    useEffect(() => {
        axios.get(url).then((res) => {
            console.log(res.data.data);
            setData(res.data.data);
        }).catch((err) => {
            console.log(err);
        })
    },[id]);

    return (
        <>
        {data && data.map((comment) => (
            <S.Wrapper>
                <S.UpperWrapper>
                    <S.ProfileImage>
                        <img src=''/>
                    </S.ProfileImage>
                    <S.ProfileName>{comment.username}</S.ProfileName>
                    <S.ReportBox>
                        <Link to="/">
                            <img src={report_logo}/>
                        </Link>
                    </S.ReportBox>
                </S.UpperWrapper>
                
                <S.ContentText>{comment.content}</S.ContentText>
                <Divider/>
            </S.Wrapper>
        ))}
        </>
    )
}

export default CommentTable;