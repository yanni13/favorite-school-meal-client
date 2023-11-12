import { useState } from 'react';
import styled from "styled-components";
import clock_logo from '../../media/Map/clock_logo.svg';
import { Link } from 'react-router-dom';

const S = {
    Wrapper : styled.div`
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: start;
        padding : 13px 9px 13px 17px;
    `,
    InfoBox : styled.div`
        width: 330px;
        height: 210px;
        background-color: #FFF;
        border-radius: 20px;
    `,
    TitleText : styled.a`
        color: #000;
        font-family: Noto Sans KR;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    `,
    TypeText : styled.a`
        color: #A1A1A1;
        font-family: Noto Sans KR;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin : 10px 0 10px 0;
    `,
    RestrauntImage : styled.div`
        width: 80px;
        height: 80px;
        background-color: #C4C4C4;
        border-radius: 20px;
    `,
    LowerWrapper : styled.div`
        display: flex;
        align-items: center;
        width: 100%;
        margin-top : 12px;
    `,
    TimeWrapper : styled.div`
        display: flex;
        flex-direction: column;
        margin-left : 7px;
    `,
    TimeText : styled.a`
        color: #A1A1A1;
        font-family: Noto Sans KR;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    `,
    DetailButton : styled.div`
        width: 90px;
        height: 31px;
        border-radius: 20px;
        background: #609966;
        color: #fff;
        margin-left : auto;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    `
}

const MapInfo= ({latlng}) => {
    const [data, setData] = useState({
        title : "식당이름", 
        type : "식당타입", 
        img : "식당이미지", 
        time : "운영시간"
    })
    if (!latlng) {
        return null;
    }

    return (
        <S.InfoBox>
            <S.Wrapper>
                <S.TitleText>{data.title}</S.TitleText>
                <S.TypeText>{data.type}</S.TypeText>
                <S.RestrauntImage></S.RestrauntImage>
                <S.LowerWrapper>
                    <img src={clock_logo}/>
                    <S.TimeWrapper>
                        <S.TimeText>{data.time}</S.TimeText>
                        <S.TimeText>{data.time}</S.TimeText>
                    </S.TimeWrapper>
                    <S.DetailButton>
                        <Link to='/' style={{ 
                            textDecoration: "none",
                            fontFamily: "Noto Sans KR",
                            fontSize: "12px",
                            fontStyle: "normal",
                            fontWeight: "700",
                            lineHeight: "normal",
                            textDecoration: "none",
                            color: "#FFFFFF"
                    }}>자세히 보기</Link>
                    </S.DetailButton>
                </S.LowerWrapper>
                {/* {latlng && <a>lat = {latlng.Ma} <br/>lng = {latlng.La}</a>} */}
                <S.TitleText></S.TitleText>
            </S.Wrapper>
        </S.InfoBox>
    );
}

export default MapInfo;