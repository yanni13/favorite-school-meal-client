import styled from "styled-components";


const MyPageContainer = styled.div`
    justify-content: flex-start;
    text-align: center;
    .UserName {
        font-size: 30px;
        font-style: bold;
    }


`;


const MyPageBox = styled.div`
    flex-direction: column;
    justify-content: flex-start;
    display:flex;   
    align-items: center;
    width: 339px;
    height: 389px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #FFF;
    margin: 26px;
`;

const SelfIntroductionBox = styled.div`
    display: flex;
    width: 320px;
    height: 173px;
    margin: 15px;
    flex-shrink: 0;
    border-radius: 7px;
    border: 1px solid rgba(151, 151, 151, 0.80);
    background: #FFF;
    padding: 5px;
`;

const ProfileSection = styled.div`
    display: flex;
    align-items: center;
    width: 122.664px;
    height: 125px;
    justify-content: center;
    margin: 50px 138px 50px
`;

const RecentPostForm = styled.div`
    display:grid;
    height: 55px;
    background: #609966;

    .underline {
        weight: 100%;
        height: 1px;
        float: left;
        text-decoration: underline;
        text-underline-position: under;
        background: #DADADA;
    }
`
const PRBox = styled.div`
    display: inline-flex;
    height: 50px;
    padding: 0px 169px 100px;
    flex-shrink: 0;
    float: left;
    border-radius: 7px;
    background: #FFF;
    margin-top: -20px;
    flex-direction: column;
    justify-content: flex-start;  
    align-items: center;
`;
const PostBox = styled.div`
    display: inline-flex;
    flex-shrink: 0;
    float: left;
    border-radius: 7px;
    background: #FFF;
    flex-direction: column;
    justify-content: flex-start;  
    align-items: center;
`;

const ProfileDetails = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`;

const ProfilePicture = styled.div`
    width: 122.664px;
    height: 125px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;

    .profile-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .profile-icon {
        font-size: 122.664px;
        color: #ccc;
        margin: auto;
    }
`;

const ButtonSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
    color: #000;
    font-family: Noto Sans KR;
    font-style: normal;
    

    button + button {
        margin-left:31px;
    }

    .block {
        width: 144px;
        height: 39px;
        flex-shrink: 0;
        border-radius: 10px;
        background: #EDF1D6;
        border: 1px solid gray;
        font-family: Noto Sans KR;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
`;



export {MyPageContainer,MyPageBox, SelfIntroductionBox, ProfileSection,PRBox,PostBox,ProfileDetails, ProfilePicture, ButtonSection, RecentPostForm};
