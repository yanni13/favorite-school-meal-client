import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import write_logo from '../../media/Post/write_logo.svg';
import axios from 'axios';
import { getCookie } from '../../Cookies';


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
    // id 기반 댓글 POST 요청하기
    const [content, setContent] = useState();
    const url = '/posts/' + id + '/comments';
    const navigate = useNavigate();

    const handleCommentSubmit = () => {
        axios.post(url, {
            content : content,
        }, {
            headers : {
                Authorization: `bearer ${getCookie("ACCESS_TOKEN")}`,
            }
        }).then((res) => {
            // 임시로 router로 댓글 업데이트 구현
            // CommentTable 컴포넌트만 리렌더링 하도록 코드 변경 필요.
            navigate(0);
            console.log(res.data.data);
        }).catch((err) => {
            alert(err);
        });
    }

    return (
        <>
            <S.Wrapper>
                <S.CommentInput 
                value= {content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="댓글을 입력하세요."
                />
                <button style={{
                    border : 'none',
                    background : 'none',
                }}
                onClick={handleCommentSubmit}
                >
                    <img src={write_logo}/>
                </button> 
            </S.Wrapper>
        </>
    )
}

export default CommentForm;