import React from "react";
import { useNavigate } from "react-router-dom";
import { SignInBox } from "../styles/Login/Login.styled";
import SearchPwForm from "../components/Auth/SearchPwForm";


const SearchPwPage = () => {
    const navigate = useNavigate();

    return (
        <SignInBox>
            <h2 className="title">최애의 학식</h2>
            <h3 className="subtitle">아이디와 이메일을 입력해 주세요.</h3>
            <SearchPwForm/>
        </SignInBox>
    )
}

export default SearchPwPage;