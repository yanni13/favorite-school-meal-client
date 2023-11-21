import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import { DefaultWrapper, PostWrapper } from '../styles/DefaultWrapper';
import TitledHeader from '../components/Header/TitledHeader';
import PostDetail from '../components/Post/PostDetail';


const PostDetailPage = () => {
    const routerParams = useParams();
    // {routerParams(id)값을 활용한 axios 요청으로 데이터 들고오자}
    return(
        <>
            <DefaultWrapper>
            <TitledHeader title="게시판"></TitledHeader>
                <PostWrapper>
                    <PostDetail id={routerParams}/>
                </PostWrapper>
            </DefaultWrapper>
        </>
    )
}

export default PostDetailPage;