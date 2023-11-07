import styled from 'styled-components';
import styles from "../../styles/Main/MiniBoard.module.css";
import BoardLogo from "../../media/Main/BoardLogo.svg";
import PostTable from "../Post/PostTable";

export default function MiniBoard() {
    const BoardTitle = () => {
        return(
            <div className={styles.title}>
                <img src={BoardLogo}/>
                <h3 className={styles.title_txt}>게시판</h3>
            </div>
        );
    }

    const S = {
        Wrapper: styled.div`
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 348px;
            height: 356px;
            border-radius: 30px;
            background: #FFF;
            margin-left: 21px;
        `,
    }    

    return(
        <>
            <BoardTitle/>
            <S.Wrapper>
                <PostTable/>
            </S.Wrapper>
        </>

    );

}