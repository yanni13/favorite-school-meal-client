import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import write_logo from '../../media/Post/write_logo.svg';

const S = {
    Wrapper : styled.div`
        display : flex;
        align-items : center;
        justify-content : center;
    `,
    CommentInput : styled.input`
        width: 282px;
        height: 40px;
        border-radius: 30px;
        border: 1px solid #D7D7D7;
        background: #FFF;
    `,
}

const CommentForm = ({ id }) => {
    return (
        <>
            <S.Wrapper>
                <S.CommentInput placeholder="댓글을 입력하세요."/>
                <Link to="/">
                    <img src={write_logo}/>
                </Link> 
            </S.Wrapper>
            
        </>
    )
}

export default CommentForm;