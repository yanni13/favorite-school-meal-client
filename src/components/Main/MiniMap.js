import styles from "../../styles/Main/MiniMap.module.css";
import MapLogo from "../../media/Main/MapLogo.svg";
import { useEffect } from "react";
const { kakao } = window;

export default function MiniMap() {
    const MapTitle = () => {
        return(
            <div className={styles.title}>
                <img src={MapLogo}/>
                <h3>지도</h3>
            </div>
        );
    }

    const MapContent = () => {
        useEffect(()=>{
            const container = document.getElementById('map');
            const options = {
                center: new kakao.maps.LatLng(33.450701, 126.570667),
                level: 3
            };
            const map = new kakao.maps.Map(container, options);
        }, [])

        return(
            <>
                <div id="map" style={{
                    width: '500px',
                    height: '500px'
                }}>
                    
                </div>
            </>
        );
    }

    return(
        <>
                <MapTitle/>
                <MapContent/>
        </>

    );

}