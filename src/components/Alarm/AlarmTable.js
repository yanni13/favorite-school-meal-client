import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import DefaultAlarm from './DefaultAlarm';
import ButtonAlarm from './ButtonAlarm';

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

function AlarmTable(Notification){
    const type = Notification.Notification.notificationType;
    switch (type) {
        case 1:

            return(
                <>
                    <DefaultAlarm Notification={Notification}/>
                </>
            );
        case 2:
            return(
                <>
                    <ButtonAlarm Notification={Notification}/>
                </>
            );
        case 3:
            return(
                <>
                    <DefaultAlarm Notification={Notification}/>
                </>
            );
        case 4:
            return(
                <>
                    <DefaultAlarm Notification={Notification}/>
                </>
            );
        case 5:
            return(
                <>
                    <DefaultAlarm Notification={Notification}/>
                </>
            );
    }
    return(
        <>
            <div></div>
        </>
    );
}

export default AlarmTable;