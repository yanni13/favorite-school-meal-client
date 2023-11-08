import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import styled from 'styled-components';

import post_logo from '../../media/Menu/post_logo.svg';
import friend_logo from '../../media/Menu/friend_logo.svg';
import chat_logo from '../../media/Menu/chat_logo.svg';


function MenuButton() {
    const S = {
        Wrapper : styled.div`
            display: flex;
            justify-content: space-between;
            width: 390px;
            height: 210px;
        `,
        ButtonWrapper : styled.div`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        `,
        ButtonBox : styled.div`
            display: flex;
            align-items: center;
            justify-content: center;
            width: 65px;
            height: 65px;
            border-radius: 20px;
            background: #609966;
        `,
        ButtonImg : styled.img`
            width: 45px;
            height: 45px;
        `,
        ButtonTitle : styled.a`
        color: #000;
        font-family: Noto Sans KR;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-top: 6px;
        `
    }

    return(
        <>
            <S.Wrapper>
                <S.ButtonWrapper style={{ marginLeft: "44px"}}>
                    <S.ButtonBox>
                        <S.ButtonImg src={friend_logo}/>
                    </S.ButtonBox>
                    <S.ButtonTitle>친구</S.ButtonTitle>
                </S.ButtonWrapper>
                <S.ButtonWrapper>
                    <S.ButtonBox>
                        <S.ButtonImg src={post_logo}/>
                    </S.ButtonBox>
                    <S.ButtonTitle>친구</S.ButtonTitle>
                </S.ButtonWrapper>
                <S.ButtonWrapper style={{ marginRight: "44px"}}>
                    <S.ButtonBox>
                        <S.ButtonImg src={chat_logo}/>
                    </S.ButtonBox>
                    <S.ButtonTitle>친구</S.ButtonTitle>
                </S.ButtonWrapper>
                
            
            </S.Wrapper>
        </> 
    );
}
// 관리자 버튼은 유저정보 받아와서 유저정보가 관리자면 보이게 하기
export default MenuButton;