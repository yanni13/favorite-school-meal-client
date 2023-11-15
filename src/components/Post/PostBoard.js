import PostTable from "./PostTable";
import styled from "styled-components";

const S = {
    Wrapper : styled.div`
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 780px;
        justify-content: center;
        align-items: center;
    `,
    PostWrapper : styled.div`
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 348px;
        height: 95%;
        border-radius: 30px;
        background: #FFF;
        padding-top : 5px;
        overflow: scroll;
            &::-webkit-scrollbar {
                display: none;
        }
    `, 
}

const PostBoard = () => {
    return(
        <>
            <S.Wrapper>
                <S.PostWrapper>
                    <PostTable/>
                    <PostTable/>
                    <PostTable/>
                    <PostTable/>
                    <PostTable/>
                    <PostTable/>
                    <PostTable/>
                    <PostTable/>
                    <PostTable/>
                    <PostTable/>
                    <PostTable/>
                    <PostTable/>
                    <PostTable/>
                    <PostTable/>
                    <PostTable/>
                </S.PostWrapper>
            </S.Wrapper>
        </>
    )
}

export default PostBoard;