import { DefaultParentWrapper, DefaultContentWrapper } from '../styles/DefaultWrapper';
import styled from 'styled-components';
import TitledHeader from '../components/Header/TitledHeader';
import PostAdd from '../components/Post/PostForm';



const PostAddPage = () => {
    

    return(
        <>
            <TitledHeader title="글 작성"/>
            <DefaultParentWrapper>   
                <DefaultContentWrapper>
                    <PostAdd/>
                </DefaultContentWrapper>
            </DefaultParentWrapper>
        </>
    
    )
}

export default PostAddPage;
