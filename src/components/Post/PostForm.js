import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react'; 
import Divider from '../Divider';

const S = {
    Wrapper : styled.div`
        display : flex;
        flex-direction : column;
        padding: 20px;
        justify-content: flex-start;
    `,
    TitleInput : styled.input`
        width: 100%;
        color: #A1A1A1;
        font-family: 'Noto Sans KR';
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        border: none;
        outline: none;
    `,
    InfoWrapper : styled.div`
        display : flex;
        width: 100%;
        justify-content: flex-start;
    `,
    InfoText : styled.a`
        color: #A1A1A1;
        font-family: Noto Sans KR;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    `,
    HeadCounterButton : styled.button`
        width: 25px;
        height: 25px;
        border-radius: 50%;
        border: 0;
        background-color: #d9d9d9;
        font-size: 20px;
        font-weight: 16;
        cursor: pointer;
        outline: none;
    `,
    TimeInput : styled.input`
            width: 100%;
            color: #A1A1A1;
            font-family: 'Noto Sans KR';
            font-size: 13px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            border: none;
            outline: none;
    `,
    ContentInput : styled.textarea`
        width: 100%;
        height: 550px;
        color: #000;
        font-family: 'Noto Sans KR';
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        border: none;
        outline: none;
        overflow: scroll;
        &::-webkit-scrollbar {
            display: none;
        }
        margin-top: 10px;
    `,
}

const PostForm = () => {
    const [headCount, setHeadCount] = useState(0);

    const increment = () => {
        setHeadCount(headCount + 1);
      };
    
      const decrement = () => {
        if (headCount > 0) {
          setHeadCount(headCount - 1);
        }
      };

    return (
        <>
        <S.Wrapper>
            <S.TitleInput placeholder="제목"></S.TitleInput>
            <S.InfoWrapper>
                <S.InfoText>모집인원</S.InfoText>
                <S.HeadCounterButton onClick={decrement}>-</S.HeadCounterButton>
                <a style={{display: "flex",fontFamily: "Noto Sans KR", fontSize: "12px", textAlign: "center", justifyContent: "center"}}>{headCount}</a>
                <S.HeadCounterButton onClick={increment}>+</S.HeadCounterButton>
            </S.InfoWrapper>
            <S.InfoWrapper>
                <S.InfoText>시간</S.InfoText>
                <S.TimeInput placeholder="시작" type='time'></S.TimeInput>
            </S.InfoWrapper>

            <Divider/>

            <S.ContentInput placeholder="내용을 입력하세요."></S.ContentInput>

        </S.Wrapper>
        </>
        
        
    );
}

export default PostForm;