import pencil_logo from "../../media/Post/pencil_logo.svg";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const S = {
    Wrapper : styled.button`
        display : flex;
        flex-direction : row;
        justify-content : center;
        align-items : center;
        width: 110px;
        height: 40px;
        border-radius: 30px;
        border: 1px solid #D7D7D7;
        background: #FFF;
        cursor : pointer;
    `,
    WriteText : styled.div`
        color: #000;
        font-family: Noto Sans KR;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    `
}

/** props로 받는 type은 Restaurant or Board임.
 * RestaurantInfo 컴포넌트에서는 type = Restaurant & restaurnatId = 식당 id
 * PostTable 컴포넌트에서는 type = Post
 */
const PostButton = ( {type, restaurantId} ) => {
    const navigate = useNavigate();
    const url = type === "Restaurant" ?
        '/postAdd/' + restaurantId :
        '/postAdd/' + 0;

    const handleClick = () => {
        navigate(url);
    }

    return (
        <>
            <S.Wrapper onClick={handleClick}>
                <img src={pencil_logo}/>
                <S.WriteText>글 쓰기</S.WriteText>
            </S.Wrapper>
        </>
    )
}

export default PostButton;