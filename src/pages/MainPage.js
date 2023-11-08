import Header from '../components/Header/Header';
import MiniBoard from '../components/Main/MiniBoard';
import MiniMap from '../components/Main/MiniMap';
import styled from 'styled-components';

const MainPage = () => {

    const S = {
        Wrapper: styled.div`
            display: block;
            width: 348px;
            height: 100%;
            background: #F9F9F9;
            justify-content: center;
            align-items: center;
        `,

    }
    return (
        <>            
            <div styles={{
                display: "flex",
                flexDirection: "column",
                width: "348px",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#00000",
            }}>
                <Header/>
                <MiniMap/>
                <MiniBoard/>
            </div>
        </>
        
    );
}

export default MainPage;