import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import styled from 'styled-components';
import logout_button from '../../media/Menu/logout_button.svg';

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
`

function LowerHeader() {
    let [username, setUsername] = useState('안성윤');
    return (
        <>
            <LowerHeaderWrapper>
                <ProfileImg/>
                <LowerheaderTitle>{username} 님,</LowerheaderTitle>
                <LowerHeaderSubtitle>환영합니다!</LowerHeaderSubtitle>
                <Link to='/'>
                    <LogoutButton src={logout_button}/>
                </Link>
                
            </LowerHeaderWrapper>
        </>
    );
}

export default LowerHeader;