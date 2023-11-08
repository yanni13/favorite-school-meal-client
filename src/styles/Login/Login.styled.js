import styled from "styled-components";

const SignInBox = styled.div`
    height: 100vh;
    background-color: #F5F5F5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 36px;
    .bottom-signup {
        font-size: 14px;
        display: flex;
        gap: 10px;
        margin-top: 90px;
    }
    .title {
        font-size: 30px;
        font-weight: bold;
    }
    .subtitle {
        font-size: 23px;
    }
`;

const SignInForm = styled.form`
    background-color: #F5F5F5; 
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 16px;

    input {
        border: 1px solid grey;
        width: 275px;
        height: 48px;
        border-radius: 3px;
        padding-left: 20px;
    }

    .submitBtn {
        width: 295px;
        height: 56px;
        font-size: 16px;
        font-weight: 500;
        color: black;
        border: none;
        border-radius: 3px;
        background-color: ${(props) => props.color  || "#C9C9C9"};

        box-shadow: 0px 2px 12px -3px rgba(0, 0, 0, 0.1);
        margin-top: 16px;    
    }
`;

const FindPage = styled.form`
    .bottom-signup {
        font-size :14px;
        gap: 10px;
    }

    .LoginBtn {
        display: flex;
        backgroundcolor: #94dbf8;
        fontcolor: black;
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
`;

export {SignInBox, SignInForm, FindPage};