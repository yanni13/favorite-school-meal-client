import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import styled from 'styled-components';
import logout_button from '../../media/Menu/logout_button.svg';
import { useNavigate } from 'react-router-dom';
import { removeCookie } from '../../Cookies';

let LowerHeaderWrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 390px;
height: 93px;
background: #9DC08B;
`

let LowerheaderTitle = styled.a`
color: #000;
font-family: Noto Sans KR;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
`
let LowerHeaderSubtitle = styled.a`
color: #000;
font-family: Noto Sans KR;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-right : 50px;
`

let LogoutButton = styled.img`
margin-right: 14px;
`

let ProfileImg = styled.div`
width: 60px;
height: 60px;
border-radius: 60px;
margin-left: 27px;
background-color: grey;
overflow : hidden;
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
}
`

let GuestLowerHeaderWrapper = styled(LowerHeaderWrapper)`
    flex-direction: column;
    justify-content: flex-start;
`

let GuestLowerHeaderTitle = styled.a`
    color: #1C1C1C;
    font-family: Noto Sans KR;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    margin : 5px 0 15px 0;
`

let GuestLoginButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 161px;
    height: 35px;
    border-radius: 20px;
    background-color: #609966;
    color: #000;
    text-align: center;
    font-family: Noto Sans KR;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
`


function LowerHeader({ isLogin, userInfo }) {
    const navigate = useNavigate();

    const ProfileCilck = () => {
        navigate("/MyPage");
    }

    const LogoutClickHandler = () => {
        removeCookie("ACCESS_TOKEN");
        alert("로그아웃 되었습니다.")
        navigate("/");
    }

    return (
        <>
        { isLogin ? 
            <LowerHeaderWrapper>
                <ProfileImg>
                    <img src={`https://api.favorite-school.me/api/v1${userInfo.profileImageEndpoint}`}/>
                </ProfileImg>
                <LowerheaderTitle onClick={ProfileCilck}>{userInfo.nickname} 님,</LowerheaderTitle>
                <LowerHeaderSubtitle>환영합니다!</LowerHeaderSubtitle>
                    <LogoutButton src={logout_button} onClick={() => LogoutClickHandler()}/>
            </LowerHeaderWrapper>
            :
            <GuestLowerHeaderWrapper>
                <GuestLowerHeaderTitle>사용해 보세요!</GuestLowerHeaderTitle>
                <GuestLoginButton onClick={(() => navigate('/LoginPage'))}>로그인</GuestLoginButton>
            </GuestLowerHeaderWrapper>
        }
        </>
    );
}

export default LowerHeader;