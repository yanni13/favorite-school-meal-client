import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from "styled-components";
import clock_logo from '../../media/Map/clock_logo.svg';
import { Link } from 'react-router-dom';

const ButtonTextStyles = styled.a`
    font-family: Noto Sans KR;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;


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
    Button : styled.div`
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
    `,
    DetailButtonText : styled(ButtonTextStyles)`
        color: #FFFFFF;
    `,
    MenuInfoButtonText : styled(ButtonTextStyles)`
        color: #000;
    `
}

// 추후에는 마커클릭시 위치 기반으로 식당 id를 받아오고, 그 id를 props로 전달.
// axios로 id를 기반으로 식당 정보를 받아오는 API를 호출.
// 해당 데이터 활용해 완성.
const MapInfo= ({id, pageType}) => {
    const [data, setData] = useState({
        title : "기본 식당 이름", 
        isOnCampus : true,
        category : "기본 식당 카테고리", 
        thumbnail_url : "기본 식당이미지", 
        businessHours : "기본 식당 운영시간",
        
    })

    useEffect(() => {
        axios.get('/restaurants/' + id).then((res) => {
            console.log(res.data.data);
            const restaurant = res.data.data;
            const formattedData = {
                    title : restaurant.name,
                    isOnCampus : restaurant.isOnCampus,
                    category : restaurant.category,
                    thumbnail_url : restaurant.thumbnail_url,
                    businessHours : restaurant.businessHours,
            };
            console.log(formattedData);
            setData(formattedData);
        })
    },[id]);

    // pageType 의 종류는 아래와 같다.
    // pageType = "Map" or "Detail"
    
    if (!id) {
        return null;
    }

    return (
        <S.InfoBox>
            <S.Wrapper>
                <S.TitleText>{data.title}</S.TitleText>
                <S.TypeText>{data.category}</S.TypeText>
                <S.RestrauntImage><img src={data.thumbnail_url}/></S.RestrauntImage>
                <S.LowerWrapper>
                    <img src={clock_logo}/>
                    <S.TimeWrapper>
                        <S.TimeText>{data.businessHours}</S.TimeText>
                        {/* <S.TimeText>{data.businessHours}</S.TimeText> */}
                    </S.TimeWrapper>
                    {console.log(pageType)}
                    {
                        (pageType === "Map"
                        ?   <S.Button>
                                <Link to={`/MapPage/${id}`} style={{ textDecoration: "none"}}>
                                    <S.DetailButtonText>자세히 보기</S.DetailButtonText>
                                </Link>
                            </S.Button>
                        : (data.isOnCampus
                            ? <S.Button style={{width: "109px"}}>
                                <Link to={`/MapPage/${id}`} style={{ textDecoration: "none"}}>
                                    <S.DetailButtonText>메뉴 정보 조회하기</S.DetailButtonText>
                                </Link>
                            </S.Button>
                            : null
                        ))  
                    }
                    
                </S.LowerWrapper>
                {/* {latlng && <a>lat = {latlng.Ma} <br/>lng = {latlng.La}</a>} */}
                <S.TitleText></S.TitleText>
            </S.Wrapper>
        </S.InfoBox>
    );
}

export default MapInfo;