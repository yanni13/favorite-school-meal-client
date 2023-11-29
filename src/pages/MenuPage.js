import UpperHeader from "../components/Menu/UpperHeader";
import LowerHeader from "../components/Menu/LowerHeader";
import AlarmBoard from "../components/Menu/AlarmBoard";
import MenuButton from "../components/Menu/MenuButton";
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { getCookie } from '../Cookies';

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

const MenuPage = () => {
    const token = getCookie("ACCESS_TOKEN");
    const [isLogin, setIsLogin] = useState(null);
    const [userInfo, setUserInfo] = useState();

    useEffect(() => {
        const responseData = axios.get('/members',{
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }).then((res) => {
            console.log(res.data.data);
            setIsLogin(true);
            setUserInfo(res.data.data);
        })
        .catch((e)=> {
            console.log(e);
            setIsLogin(false);
        })
    },[]);

    return (
        <>
        {isLogin !== null &&
            <>
                <UpperHeader isLogin={isLogin}/>
                <LowerHeader isLogin={isLogin} userInfo={userInfo}/>
                <S.AlarmWrapper>
                    <AlarmBoard isLogin={isLogin}/>
                </S.AlarmWrapper>
                <MenuButton isLogin={isLogin}/>
            </>
        }
        </>
    );
}

export default MenuPage;