import { useParams } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import TitledHeader from "../components/Header/TitledHeader";
import MapInfo from "../components/Map/MapInfo";
import PostTable from "../components/Post/PostTable"

const S = {
    Wrapper : styled.div`
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;
    `,
    PostWrapper : styled.div`
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 348px;
        height: 513px;
        border-radius: 30px;
        background: #FFF;
        padding-top : 5px;
    `, 
    SubtitleText : styled.a`
        text-align: left;
        color: #000;
        font-family: Noto Sans KR;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin: 12px 0 12px 20px;
    `
}

const RestrauntInfoPage = () => {
    const routerParams = useParams();
    console.log(routerParams.RestrauntId);
    //axios 요청으로 데이터 들고오자
    
    // 여기 인라인 스타일 적용이 안됨...
    return(
        <>
            <TitledHeader title="식당 정보"/>
            <S.Wrapper>
                <div style={{height : "19px"}}></div>
                <MapInfo 
                    id={routerParams.RestrauntId}
                    pageType={""}
                    />
                <div style={{height : "19px"}}></div>
                {/* 이부분 컴포넌트로 분리할 필요 있어보임.*/}
                <S.PostWrapper>
                    <S.SubtitleText>학식메이트  게시판</S.SubtitleText>
                    <PostTable/>
                    <PostTable/>
                    <PostTable/>
                    <PostTable/>
                    <PostTable/>
                    <PostTable/>
                </S.PostWrapper>
            </S.Wrapper>
        </>

    )
}

export default RestrauntInfoPage;