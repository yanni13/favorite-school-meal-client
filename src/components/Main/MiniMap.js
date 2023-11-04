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
                center: new kakao.maps.LatLng(35.8361601, 128.7528893),
                level: 3
            };
            const map = new kakao.maps.Map(container, options);
        }, [])

        return(
            <div className={styles.map_box}>
                <div id="map" style={{
                    width: '348px',
                    height: '296px'
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