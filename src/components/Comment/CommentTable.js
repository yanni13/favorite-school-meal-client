import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import report_logo from '../../media/Post/report_logo.svg';
import Divider from '../Divider';
import axios from 'axios';


const S = {
    Wrapper : styled.div`
        display : block;
        width: 300px;
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
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;
        }
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

const CommentTable = ({ comment }) => {
    const [profileImg, setProfileImg] = useState();
    // const url = '/posts/' + id + '/comments';

    // useEffect(() => {
    //     axios.get(url).then((res) => {
    //         console.log(res.data.data);
    //         setData(res.data.data);
    //     }).catch((err) => {
    //         console.log(err);
    //     })
    // },[id]);
    useEffect(() => {
        console.log(comment.memberId);
        axios.get(`/members/${comment.memberId}`).then((res) => {
            setProfileImg(res.data.data.profileImageEndpoint);
        }).catch((err) => {
            console.log(err);
        });
        },[])

    return (
        <>
            <S.Wrapper>
                <S.UpperWrapper>
                    <S.ProfileImage>
                    {profileImg && <img src={`https://api.favorite-school.me/api/v1${profileImg}`}/>}
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
        </>
    )
}

export default CommentTable;