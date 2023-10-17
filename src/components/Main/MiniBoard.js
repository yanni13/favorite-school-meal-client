import styles from "../../styles/Main/MiniBoard.module.css";
import BoardLogo from "../../media/Main/BoardLogo.svg";


export default function MiniBoard() {
    const BoardTitle = () => {
        return(
            <div className={styles.title}>
                <img src={BoardLogo}/>
                <h3>게시판</h3>
            </div>
        );
    }

    const BoardContent = () => {
        return(
            <>
                <div>
                    게시판 내용~
                </div>
            </>
        );
    }

    return(
        <>
                <BoardTitle/>
                <BoardContent/>
        </>

    );

}