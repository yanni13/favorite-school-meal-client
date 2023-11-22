import styled from "styled-components";

const MyPageBox = styled.div`
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
    justify-content: right;
    
   
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

export {MyPageBox, SelfIntroductionBox, ProfileSection, ProfileDetails, ProfilePicture, ButtonSection};
