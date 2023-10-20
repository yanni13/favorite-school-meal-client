import styles from "../../styles/Main/MiniMap.module.css";
import MapLogo from "../../media/Main/MapLogo.svg";


export default function MiniMap() {
    const MapTitle = () => {
        return(
            <div className={styles.title}>
                <img src={MapLogo}/>
                <h3>게시판</h3>
            </div>
        );
    }

    const MapContent = () => {
        return(
            <>
                <div>
                    지도 내용~
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