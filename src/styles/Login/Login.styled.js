import styled from "styled-components";

const SignInBox = styled.div`
    background-color: #F1F1F1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
    margin: 50px;
    .bottom-signup {
        font-size: 14px;
        display: flex;
        gap: 10px;
        margin-top: 90px;
    }
    .title {
        font-size: 30px;
        font-weight: bold;
        color: #000;
        font-family: Noto Sans KR;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    .subtitle {
        font-size: 23px;
    }
`;

const SignInForm = styled.form`
    background-color: #F1F1F1; 
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 16px;

    input {
        border: 1px solid grey;
        width: 300px;
        height: 48px;
        border-radius: 3px;
        padding-left: 20px;
    }

    textarea {
        width: 320px;
        border: 0px;
        resize: none;
    }

    .textBtn {
        border: none;
        background-color: transparent;
        cursor: pointer;
    }

    .submitBtn {
        width: 327px;
        height: 56px;
        font-size: 16px;
        font-weight: 500;
        color: black;
        border: none;
        border-radius: 3px;
        background-color: ${(props) => props.color  || "#C9C9C9"};

        margin-top: 16px;    
    }

    .SocialLoginBtn {
        width: 50px;
        height: 50px;
        flex-shrink: 0;
        border-radius: 30px;
    }
`;

const FindPage = styled.form`
    .bottom-signup {
        font-size :14px;
        gap: 10px;
    }

    .LoginBtn {
        display: flex;
        background-color: #94dbf8;
        color: black;
    }

    .textBtn {
        border: none;
        background-color: transparent;
        cursor: pointer;
    }

    .registerBtn {
        color: #95ddff;
        border: none;
        background-color: transparent;
        cursor: pointer;
    }

    .underline {
        border: none;
        background-color: transparent;
        cursor: pointer;
        text-decoration: underline;
        padding: 10px 30px;
    }

    .modify-font {
        text-align: left;
        color: #000;
        font-family: Noto Sans KR;
        font-size: 26px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin:16px;
    }
`;

const SocialLoginContainer = styled.div`
    height: 50px;
`;

export {SignInBox, SignInForm, FindPage, SocialLoginContainer};