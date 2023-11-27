import { Link } from 'react-router-dom';
import styles from '../../styles/Header/Header.module.css'
import styled from 'styled-components';
import Logo from '../Logo';
import menu_button from '../../media/Header/menu_button.svg'

const S = {
    LoginButton : styled.button`
        border : none;
        width: 60px;
        height: 22px;
        border-radius: 20px;
        color: #000;
        font-family: Noto Sans KR;
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        background: #609966;
        margin-right : 10px;
    `
}

function GuestHeader(){
    return (
        <>
            <div className={styles.container}>
                <Link to='/MenuPage' style={{
                    margin: '15px'
                }}>
                        <img src={menu_button}/>
                    
                </Link>
                <Logo/>
                <Link to= '/LoginPage'>
                    <S.LoginButton>로그인</S.LoginButton>
                </Link>
                
            </div>
        </>
    );
}

export default GuestHeader;