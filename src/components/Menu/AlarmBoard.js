import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import alarm_logo from '../../media/Menu/alarm_button.svg';
import AlarmTable from '../Alarm/AlarmTable';
import { getCookie } from '../../Cookies';

const S = {
    Wrapper: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 346px;
        height: 260px;
        border-radius: 30px;
        background: #FFF;
        overflow: scroll;
        &::-webkit-scrollbar {
            display: none;
    }
    `,
    AlarmHeader: styled.div`
        display: flex;
        float: left;
        margin-top: 10px;
        width: 100%;
    `,
    AlarmLogo: styled.img`
        margin-left: 12px;
    `,
    AlarmTitle: styled.a`
        color: #000;
        font-family: Noto Sans KR;
        font-size: 15px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    `,
    GuestWrapper : styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    `,
    GuestText : styled.a`
        color: #000;
        text-align: center;
        font-family: Noto Sans KR;
        font-size: 20px;
        font-weight: 700;
        margin-bottom : 30px;
    `
}

function AlarmBoard( {isLogin }) {
    const token = getCookie("ACCESS_TOKEN");
    const [notificationData, setNotificationData] = useState();

    useEffect(() => {
        const responseData = axios.get('/notifications',{
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }).then((res) => {
            setNotificationData(res.data.data.notificationList);
        })
        .catch((e)=> {
            console.log(e);
        })
    },[]);

    if(isLogin){
        return (
            <>
                <S.Wrapper>
                <S.AlarmHeader>
                    <S.AlarmLogo src={alarm_logo}/>
                    <S.AlarmTitle >알림</S.AlarmTitle>
                </S.AlarmHeader>
                    {notificationData &&
                        // 노티피케이션 있으면 뿌려주자!
                            notificationData.map((notification) => (
                                <AlarmTable Notification={notification}/> 
                            )
                    )}
                </S.Wrapper> 
            </>         
        );
    } else{
        return (
            <>
                <S.Wrapper>
                    <S.AlarmHeader>
                        <S.AlarmLogo src={alarm_logo}/>
                        <S.AlarmTitle >알림</S.AlarmTitle>
                    </S.AlarmHeader>
                    <S.GuestWrapper>
                        <S.GuestText>로그인이 필요한 기능입니다.</S.GuestText>
                    </S.GuestWrapper>
                </S.Wrapper>
            </>)
    }
}

export default AlarmBoard;