import { Link } from 'react-router-dom';
import styled from 'styled-components';

import back_button from '../../media/Header/back_button.svg';

const S = {
    Container : styled.div`
        display: flex;
        align-items: center;
        width: 390px;
        height: 56px;
        height: 64px;
        background: #9DC08B;
    `,
    Title : styled.a`
        color: #000;
        font-family: Noto Sans KR;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-left: 99px;
    `,
    BackButton : styled.a`
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