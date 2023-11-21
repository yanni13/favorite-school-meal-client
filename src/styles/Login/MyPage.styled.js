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

const ProfileSection = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 3px;
    width: 122.664px;
    height: 125px;
    flex-shrink: 0;
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
    flex-shrink: 0;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

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
    margin: 28px;
   

    button + button {
        margin-left:31px;
    }

    .block {
        width: 151px;
        height: 53px;
        flex-shrink: 0;
        border-radius: 10px;
        background: #D9D9D9;
        border: none;
        font-family: Noto Sans KR;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
`;

export {MyPageBox, ProfileSection, ProfileDetails, ProfilePicture, ButtonSection};
