import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

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
        cursor: pointer;
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

const DefaultAlarm = ( {Notification} ) => {
    const noticeProps = Notification.Notification;
    const [userData, setUserData] = useState(Notification);
    const [postData, setPostData] = useState();

    const clickHandler = () => {
        axios.patch(`/notifications/${noticeProps.id}/read`).then((res) => {
            navigate(`/PostDetailPage/${noticeProps.postId}`);

        });
    }

    let navigate = useNavigate();
    let title = "";
    let content = "";

    useEffect(() => {
        const responseData = axios.get(`/posts/${noticeProps.postId}`).then((res) => {
            
            setPostData(res.data.data);
        });
        const userRes = axios.get(`/members/${noticeProps.senderId}`).then((res) => {
            setUserData(res.data.data);
        });
    },[]);

    const FormattedTitle = (s) => {
        if(s.length > 20){
            return s.substring(0,20) + "...";
        }
        else{
            return s;
        }
    }


    switch (noticeProps.notificationType) {

    case 1:
        title = "게시글에 댓글이 작성되었습니다.";
        {postData &&
            (content = `"${FormattedTitle(postData.title)}" 게시글에 댓글이 작성되었습니다.`)
            return(
                <>
                    <S.Wrapper>
                        <S.TitleBox>
                            <S.TitleText onClick={() => clickHandler()}>{title}</S.TitleText>
                            <S.TimeText>{noticeProps.createdAt}</S.TimeText>
                        </S.TitleBox>
                        <S.ContentBox>
                            <S.ContentText>{content}</S.ContentText>
                        </S.ContentBox>
                    </S.Wrapper>
                </>
            );
        }
    case 3:
        title = "식사 요청이 취소 되었습니다.";
        {postData &&
            (content = `"${FormattedTitle(postData.title)}" 게시글의 ${userData && userData.nickname} 님이 요청을 취소하셨습니다.`)
            return(
                <>
                    <S.Wrapper>
                        <S.TitleBox>
                            <S.TitleText onClick={() => clickHandler()}>{title}</S.TitleText>
                            <S.TimeText>{noticeProps.createdAt}</S.TimeText>
                        </S.TitleBox>
                        <S.ContentBox>
                            <S.ContentText>{content}</S.ContentText>
                        </S.ContentBox>
                    </S.Wrapper>
                </>
            );
        }
    case 4:
        title = "식사 신청이 승인되었습니다!";
        {postData &&
            (content = `"${FormattedTitle(postData.title)}" 게시글의 신청이 승인 되었습니다.`)
            return(
                <>
                    <S.Wrapper>
                        <S.TitleBox>
                            <S.TitleText onClick={() => clickHandler()}>{title}</S.TitleText>
                            <S.TimeText>{noticeProps.createdAt}</S.TimeText>
                        </S.TitleBox>
                        <S.ContentBox>
                            <S.ContentText>{content}</S.ContentText>
                        </S.ContentBox>
                    </S.Wrapper>
                </>
            );
        }
    case 5:
        title = "식사 신청이 거절 되었습니다!";
        {postData &&
            (content = `"${FormattedTitle(postData.title)}" 게시글의 신청이 거절 되었습니다.`)
            return(
                <>
                    <S.Wrapper>
                        <S.TitleBox>
                            <S.TitleText onClick={() => clickHandler()}>{title}</S.TitleText>
                            <S.TimeText>{noticeProps.createdAt}</S.TimeText>
                        </S.TitleBox>
                        <S.ContentBox>
                            <S.ContentText>{content}</S.ContentText>
                        </S.ContentBox>
                    </S.Wrapper>
                </>
            );
        }
    }
}
export default DefaultAlarm;

