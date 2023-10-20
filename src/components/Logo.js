import styles from '../styles/Logo.module.css';
import logo_title from '../media/Header/title_img.svg';
import logo_img from '../media/Header/logo_img.svg';


export default function Logo(){
    return(
        <>                
            <div className={styles.profile_box}>
                <img src={logo_img}/>
                <img src={logo_title}/>
            </div> 
        </>
    );
}