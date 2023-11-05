import { Link } from 'react-router-dom';
import styles from '../../styles/Header/Header.module.css'
import Logo from '../Logo';

import menu_button from '../../media/Header/menu_button.svg'

function Header(){
    return (
        <>
            <div className={styles.container}>
                <Link to='/MenuPage'>
                    <a className={styles.menu_button}>
                        <img src={menu_button}/>
                    </a>
                </Link>
                
                <Logo/>
                <div className={styles.profile_img}>hi</div>
            </div>
        </>
    );
}

export default Header;