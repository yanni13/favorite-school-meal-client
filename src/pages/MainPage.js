import LoggedInHeader from '../components/Header/LoggedInHeader';
import GuestHeader from '../components/Header/GuestHeader';
import MiniBoard from '../components/Main/MiniBoard';
import MiniMap from '../components/Main/MiniMap';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { getCookie } from '../Cookies';

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

const MainPage = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [userInfo, setUserInfo] = useState();
    const token = getCookie("ACCESS_TOKEN");

    useEffect(() => {
        const responseData = axios.get('/members',{
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }).then((res) => {
            setIsLogin(true);
            setUserInfo(res.data.data);
        })
        .catch((e)=> {
            setIsLogin(false);
        })
    },[]);

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
                {/* userInfo 값내부에 profileimage 사용하기 */}
                {isLogin 
                ? <LoggedInHeader userInfo={userInfo}/>  
                : <GuestHeader/>
                }
                <MiniMap/>
                <MiniBoard/>
            </div>
        </>
        
    );
}

export default MainPage;