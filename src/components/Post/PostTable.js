import styled from 'styled-components';
import { useState } from 'react';
import comment_logo from '../../media/Post/comment_logo.svg';

const S = {
    Wrapper : styled.div`
        display : flex;
        flex-direction : row;
        justify-content : flex-start;  
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
    TitleText : styled.a`
        text-overflow: ellipsis;
        color: #000;
        font-family: Noto Sans KR;
        font-size: 12px;
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
        font-size: 7px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin: 3px 0 3px 0;
    `, 
    TimeText : styled.a`
        color: #A1A1A1;
        font-family: Noto Sans KR;
        font-size: 7px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    `,
    RightWrapper : styled.div`
        display : flex;
        flex-direction : column;
    `,
    StatusBox : styled.div`
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
    `,
    CommentWrapper : styled.div`
        display : flex;
        margin: 20px 0 0 17px;
    `,


}

const PostTable = () => {
    const [data, setData] = useState({
        title : "글제목 입니다.",
        content : "글내용 입니다. 하지만 글내용을 이렇게 많이넣었을때는  ellipsis를 통해  점점점 처리를 해버릴겁니다."
    });

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
                    <S.TitleText>{data.title}</S.TitleText>
                    <S.ContentText>{data.content}</S.ContentText>
                    <S.TimeText>15분전</S.TimeText>
                </S.MiddleWrapper>
                <S.RightWrapper>
                        <S.StatusBox>status</S.StatusBox>
                        <S.CommentWrapper>
                            <S.TimeText>3</S.TimeText>     
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