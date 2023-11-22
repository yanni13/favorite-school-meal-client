import { DefaultParentWrapper, DefaultContentWrapper } from '../styles/DefaultWrapper';
import styled from 'styled-components';
import TitledHeader from '../components/Header/TitledHeader';
import PostAdd from '../components/Post/PostForm';



const PostAddPage = () => {
    

    return(
        <>
            <DefaultParentWrapper>
                <TitledHeader title="글 작성"/>
                <DefaultContentWrapper>
                    <PostAdd/>
                </DefaultContentWrapper>
            </DefaultParentWrapper>
        </>
    
    )
}

export default PostAddPage;
