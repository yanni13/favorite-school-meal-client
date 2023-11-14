import { useParams } from "react-router-dom";
import styled from "styled-components";
import TitledHeader from "../components/Header/TitledHeader";
import MapInfo from "../components/Map/MapInfo";
import PostTable from "../components/Post/PostTable"

const RestrauntInfoPage = () => {
    const routerParams = useParams();

    return(
        <>
            <TitledHeader title="식당 정보"/>
        </>
    )
}

export default RestrauntInfoPage;