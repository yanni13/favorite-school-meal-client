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
        height: 356px;
        border-radius: 30px;
        background: #FFF;
        padding-top : 5px;
    `,
}

const RestrauntInfoPage = () => {
    const routerParams = useParams();

    //axios 요청으로 데이터 들고오자
    
    // 여기 인라인 스타일 적용이 안됨...
    return(
        <>
            <TitledHeader title="식당 정보"/>
            <S.Wrapper>
                <div style={{height : "19px"}}></div>
                <MapInfo 
                    latlng={{}} 
                    title={"기본값"} 
                    id={1} 
                    type={""}
                    />
                <div style={{height : "19px"}}></div>
                <S.PostWrapper>

                </S.PostWrapper>
            </S.Wrapper>
        </>

    )
}

export default RestrauntInfoPage;