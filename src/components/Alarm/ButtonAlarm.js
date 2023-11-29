import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { getCookie } from '../../Cookies';

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
    ProfileBox : styled.div`
        width: 100%;
        display: flex;
        gap: 10px;
        align-items: center;
        margin-bottom: 5px;
    `,
    ProfileImg : styled.div`
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background-color: green;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;
        }
    `,
    NameText : styled.a`
        color: #000;
        font-family: Noto Sans KR;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
    `,
    ResultText : styled.a`
        color: #A1A1A1;
        font-family: Noto Sans KR;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    `
}

const AcceptButton = styled.div`
    margin-left : auto;
    width: 60px;
    height: 20px;
    border-radius: 5px;
    background: #609966;
    color: #FFF;
    font-family: Noto Sans KR;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
`;

const RejectButton = styled(AcceptButton)`
    margin-left : 0;
    background: #FF0000;
`

const ButtonAlarm = ({ Notification }) => {
    const noticeProps = Notification.Notification;
    const [data, setData] = useState(Notification);
    const [postData, setPostData] = useState();
    const [userData, setUserData] = useState();
    const [userImg, setUserImg] = useState();
    const token = getCookie("ACCESS_TOKEN");


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
            console.log(res.data.data);
            setPostData(res.data.data);
        });
        const userRes = axios.get(`/members/${noticeProps.senderId}`).then((res) => {
            console.log(res.data.data);
            setUserData(res.data.data);
        });
        console.log(data);
    },[]);

    const FormattedTitle = (s) => {
        if(s.length > 20){
            return s.substring(0,20) + "...";
        }
        else{
            return s;
        }
    }


    const AcceptMatching = () => {
        axios.patch(`/posts/${noticeProps.postId}/accept-application/${noticeProps.senderId}`,null,{
            headers: {
                Authorization: `Bearer ${token}`,
            }}).then((res) => {
            const newData = {...data};
            newData.Notification.status = "승인됨";
            setData(newData);
        });
    };

    const RejectMatching = () => {
        axios.patch(`/posts/${noticeProps.postId}/reject-application/${noticeProps.senderId}`,null,{
            headers: {
                Authorization: `Bearer ${token}`,
            }}).then((res) => {
                const newData = {...data};
                newData.Notification.status = "거절됨";
                setData(newData);
        });
    }


    switch (noticeProps.notificationType) {
    case 2:
        title = "함께 식사하고 싶어하는 사람이 있어요!";
        {postData &&   
            (content = `"${FormattedTitle(postData.title)}" 게시글에 새로운 신청자가 있습니다!`)
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
                        <S.ProfileBox>
                            <S.ProfileImg><img src={userData && `https://api.favorite-school.me/api/v1${userData.profileImageEndpoint}`}/></S.ProfileImg>
                            <S.NameText>{userData && userData.nickname}</S.NameText>
                            {data.Notification.status === "대기중" ?
                            (
                                <>
                                    <AcceptButton onClick={AcceptMatching}>승인</AcceptButton>
                                    <RejectButton onClick={RejectMatching}>거절</RejectButton>
                                </>
                            ) : (                       
                                <>  
                                    <div style={{marginLeft : "auto"}}>
                                        <S.ResultText>{data.Notification.status}</S.ResultText>
                                    </div>       
                                </>
                            )
                            }
                        </S.ProfileBox>
                    </S.Wrapper>
                </>
            );
        }
    }
}

export default ButtonAlarm;

