import styled from "styled-components";

const DefaultWrapper = styled.div`
    display : flex;
    flex-direction: column;     
    width: 100%;
    height: 100%;
    justify-content: flex-start;
    align-items: center;
`;

const PostWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 348px;
    height: 730px;
    border-radius: 30px;
    background: #FFF;
    margin-top: 15px;
    padding-top : 5px;
`

export { DefaultWrapper, PostWrapper };