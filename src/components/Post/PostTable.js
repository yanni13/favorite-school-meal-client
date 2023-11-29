import styled from 'styled-components';
import { useState } from 'react';
import comment_logo from '../../media/Post/comment_logo.svg';
import { Link } from 'react-router-dom';

const S = {
    Wrapper : styled.div`
        display : flex;
        flex-direction : row;
        justify-content : flex-start;  
        align-items : center;
    `,
    ProfileImage : styled.div`
        width : 40px;
        height : 40px;
        background-color: grey;
        border-radius: 50%;
        margin-left : 13px;
    `,
    MiddleWrapper : styled.div`
        display : flex;
        width: 235px;
        flex-direction: column;
        justify-content : flex-start;
        text-align : left;
        margin-left : 10px;
    `,
    TitleText : styled.div`
        text-overflow: ellipsis;
        color: #000;
        font-family: Noto Sans KR;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
`,
    ContentText : styled.a`
        white-space: nowrap;
        overflow:hidden;
        text-overflow: ellipsis;
        color: #A1A1A1;
        font-family: Noto Sans KR;
        font-size: 8px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin: 2px 0 2px 0;
    `,
    TimeText : styled.a`
        color: #A1A1A1;
        font-family: Noto Sans KR;
        font-size: 8px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    `,
    RightWrapper : styled.div`
        display : flex;
        flex-direction : column;
    `,
    CommentWrapper : styled.div`
        display : flex;
        margin: 20px 0 0 17px;
    `,
}

const OpenStatusBox = styled.div`
    width: 30px;
    height: 10px;
    border-radius: 5px;
    border: 0.5px solid #609966;
    background-color: #609966;
    color: #FFF;
    font-family: Noto Sans KR;
    font-size: 7px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

const CloseStatusBox = styled.div`
    background-color: #FF0000;
`


const PostTable = ({ PostId, WriterId, Title, Content, MatchingState, CreatedTime, CommentCount}) => {
    // 유저 프로필사진
    const url = '/PostDetailPage/' + PostId;
    return (
        <div style={{
            display : 'flex',
            flexDirection : 'column',
            justifyContent : 'center',
            marginTop : '5px'
        }}>
            <S.Wrapper>
                <S.ProfileImage/>
                <S.MiddleWrapper>    
                <S.TitleText>
                    <Link to={url} style={{ textDecoration : "none", color: "inherit" }}>{Title}</Link>
                </S.TitleText>
                <S.ContentText>{Content}</S.ContentText>
                    <S.TimeText>{CreatedTime}</S.TimeText>
                </S.MiddleWrapper>
                <S.RightWrapper>
                    {
                        (MatchingState === "CLOSED" ? 
                            <CloseStatusBox style={{marginRight: "20px"}}>마감</CloseStatusBox>
                        :   
                            <OpenStatusBox>진행중</OpenStatusBox>
                        )
                    }
                    <S.CommentWrapper>
                        <S.TimeText>{CommentCount}</S.TimeText>     
                        <img src={comment_logo}/>
                    </S.CommentWrapper>
                </S.RightWrapper>
            </S.Wrapper>
            <div style={{
                width : '315px',
                height : '1px',
                background: '#A1A1A1',
                margin: '7px 0 0 13px',
                }}/>
        </div>
    )

}

export default PostTable;