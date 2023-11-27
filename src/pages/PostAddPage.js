import { DefaultParentWrapper, DefaultContentWrapper } from '../styles/DefaultWrapper';
import styled from 'styled-components';
import TitledHeader from '../components/Header/TitledHeader';
import PostForm from '../components/Post/PostForm';
import { useParams } from "react-router-dom";



const PostAddPage = () => {
    const routerParams = useParams();
    const restaurantId = routerParams.RestaurantId;

    const url = restaurantId === "0" ?
        '/posts' :
        '/restaurants/' + restaurantId + '/posts';
        console.log(url);   
    // 받은 routerParams 에 따라 axios 요청을 다르게 해야함.
    // 식당이 정해진 경우에는 /restaurants/:restaurantId/posts
    // 식당이 정해지지 않은 경우에는 /posts

    return(
        <>
            <TitledHeader title="글 작성"/>
            <DefaultParentWrapper>   
                <DefaultContentWrapper>
                    <PostForm url={url}/>
                </DefaultContentWrapper>
            </DefaultParentWrapper>
        </>
    
    )
}

export default PostAddPage;
