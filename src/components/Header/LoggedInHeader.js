import { Link } from 'react-router-dom';
import styles from '../../styles/Header/Header.module.css'
import styled from 'styled-components';
import Logo from '../Logo';
import menu_button from '../../media/Header/menu_button.svg'

const S = {
    ProfileImg : styled.div`
        width: 42px;
        height: 42px;
        border-radius: 50%;
        margin-right: 13px;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;
        }
    `
}

function LoggedInHeader({ userInfo }){



    return (
        <>
            <div className={styles.container}>
                <Link to='/MenuPage' style={{
                    margin: '15px'
                }}>
                        <img src={menu_button}/>
                    
                </Link>
                
                <Logo/>
                <S.ProfileImg>
                    <img src={`https://api.favorite-school.me/api/v1${userInfo.profileImageEndpoint}`}/>
                </S.ProfileImg>
            </div>
        </>
    );
}

export default LoggedInHeader;