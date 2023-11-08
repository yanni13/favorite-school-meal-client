import React from "react";
import { useNavigate } from "react-router-dom";
import { SignInBox, FindPage } from "../styles/Login/Login.styled";
import SearchIdForm from "../components/Auth/SearchIdForm";

const SearchIdPage = () => {
    const navigate = useNavigate();

    return (
        <SignInBox>
            <h2 className="title">최애의 학식</h2>
            <h3 className="subtitle">이름과 이메일을 입력해주세요.</h3>
            <SearchIdForm/>

            <br/>
            
            <FindPage>
            <p>계정이 없으신가요? 
            <button className="underline" onClick={() => navigate("/JoinPage")}>가입하기</button>
            </p>
            </FindPage>

        </SignInBox>
    )
}

export default SearchIdPage;