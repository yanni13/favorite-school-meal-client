import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import styled from 'styled-components';
import alarm_logo from '../../media/Menu/alarm_button.svg';
import AlarmTable from '../Alarm/AlarmTable';

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
    `
}

function AlarmBoard() {
    let [username, setUsername] = useState('안성윤');

    return (
        <>
            <S.Wrapper>
                <S.AlarmHeader>
                    <S.AlarmLogo src={alarm_logo}/>
                    <S.AlarmTitle>알림</S.AlarmTitle>
                </S.AlarmHeader>
                <AlarmTable/>
            </S.Wrapper>
        </>
    );
}

export default AlarmBoard;