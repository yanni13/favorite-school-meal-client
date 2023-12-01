import React from "react";
import { SignInBox } from "../styles/Login/Login.styled";
import SearchPwForm from "../components/Auth/SearchPwForm";
import TitledHeader from "../components/Header/TitledHeader";

const SearchPwPage = () => {

    return (
        <>
        <TitledHeader title="비밀번호 찾기"/>

        <SignInBox>
            <h2 className="title">최애의 학식</h2>
            <h3 className="subtitle">아이디와 이메일을 입력해 주세요.</h3>
            <SearchPwForm/>

        </SignInBox>
        </>
    )
}

export default SearchPwPage;