import { Link } from 'react-router-dom';
import styled from 'styled-components';

import back_button from '../../media/Header/back_button.svg';

const S = {
    Container : styled.div`
        position: relative;
        width: 100%;
        height: 64px;
        background: #9DC08B;
    `,
    Title : styled.a`
        position: absolute;
        left: 50%; 
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        color: #000;
        font-family: Noto Sans KR;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin: 0 auto;
    `,
    BackButton : styled.a`
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 26px;
        height: 26px;
        margin-left: 10px;
    `
}

function TitledHeader(props){
    return (
        <>
            <S.Container>
                <S.BackButton>
                    <Link to="/">
                        <img src={back_button}/>
                    </Link>
                </S.BackButton>
                <S.Title>{props.title}</S.Title>
            </S.Container>       
        </>
    );
}

export default TitledHeader;