import UpperHeader from "../components/Menu/UpperHeader";
import LowerHeader from "../components/Menu/LowerHeader";
import AlarmBoard from "../components/Menu/AlarmBoard";
import styled from 'styled-components';

const MenuPage = () => {
    const S ={
        AlarmWrapper : styled.div`
        display: flex;
        width: 100%;
        height: 324px;
        background-color: #D9D9D9;
        justify-content: center;
        align-items: center;
        `
    }

    return (
        <>
            <UpperHeader/>
            <LowerHeader/>
            <S.AlarmWrapper>
                <AlarmBoard/>
            </S.AlarmWrapper>
        </>
    );
}

export default MenuPage;