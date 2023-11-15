import styled from 'styled-components';
import styles from "../../styles/Main/MiniBoard.module.css";
import BoardLogo from "../../media/Main/BoardLogo.svg";
import PostTable from "../Post/PostTable";
import { Link } from "react-router-dom";

const S = {
    Wrapper: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 348px;
        height: 356px;
        border-radius: 30px;
        background: #FFF;
        margin-left: 21px;
        padding-top : 5px;
    `,
    DetailButton: styled.button`
        color: #A1A1A1;
        font-family: Noto Sans KR;
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin: 0 0 0 180px;
        white-space: nowrap;
        border: none;
    `
}   

export default function MiniBoard() {
    const BoardTitle = () => {
        return(
            <div className={styles.title}>
                <img src={BoardLogo}/>
                <span style={{
                    color: '#1C1C1C',
                    fontFamily: 'Noto Sans KR',
                    fontSize: '22px',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    lineHeight: 'normal',
                    margin: '18.72, 0, 18.72, 0',
                    whiteSpace: 'nowrap'
                }}>게시판</span>
                <Link to='/PostPage' style={{ textDecoration: "none", marginTop: '20px'}}>
                <S.DetailButton>자세히 보기</S.DetailButton>
                </Link>
            </div>
        );
    }

 

    return(
        <>
            <BoardTitle/>
            <S.Wrapper>
                <PostTable/>
                <PostTable/>
                <PostTable/>
                <PostTable/>
                <PostTable/>
                <PostTable/>
            </S.Wrapper>
        </>

    );

}