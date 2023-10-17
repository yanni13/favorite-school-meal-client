import Header from '../components/Header/Header';
import MiniBoard from '../components/Main/MiniBoard';
import MiniMap from '../components/Main/MiniMap';

const MainPage = () => {
    return (
        <>            
            <div styles={{
                display: "block",
                width: "348px",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Header/>
                <MiniMap/>
                <MiniBoard/>
            </div>
        </>
        
    );
}

export default MainPage;