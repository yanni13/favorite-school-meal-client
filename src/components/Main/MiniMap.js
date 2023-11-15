import styles from "../../styles/Main/MiniMap.module.css";
import styled from "styled-components";
import MapLogo from "../../media/Main/MapLogo.svg";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const { kakao } = window;

const S = {
    DetailButton: styled.button`
        color: #A1A1A1;
        font-family: Noto Sans KR;
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin: 0 0 0 160px;
        white-space: nowrap;
        border: none;
    `
}

export default function MiniMap() {
    const MapTitle = () => {
        return(
            <div className={styles.title}>
                <img src={MapLogo}/>
                <span style={{
                    color: '#1C1C1C',
                    fontFamily: 'Noto Sans KR',
                    fontSize: '22px',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    lineHeight: 'normal',
                    margin: '18.72, 0, 18.72, 0',
                    whiteSpace: 'nowrap'
                }}>학교지도</span>
                <Link to='/MapPage' style={{ textDecoration: "none", marginTop: '20px'}}>
                <S.DetailButton>자세히 보기</S.DetailButton>
                </Link>
            </div>
        );
    }

    const MapContent = () => {
        useEffect(()=>{
            const container = document.getElementById('map');
            const options = {
                center: new kakao.maps.LatLng(35.8361601, 128.7528893),
                level: 3
            };
            const map = new kakao.maps.Map(container, options);
        }, [])

        return(
            <div className={styles.map_box}>
                <div id="map" style={{
                    width: '348px',
                    height: '296px',
                    borderRadius: '20px',
                    border: '1px solid #D9D9D9'
                }}>
                </div>
            </div>
        );
    }

    return(
        <>
            <MapTitle/>
            <MapContent/>
        </>

    );

}