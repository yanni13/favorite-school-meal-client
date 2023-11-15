//마이페이지(나) - 피그마 6번
import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { MyPage } from "../../styles/Login/MyPage.styled";

const MyPageForm = () => {
    const navigate = useNavigate();

    return (
        <MyPage>
            <button className="block" type="submit" onClick={() => navigate("/ModifyInfoForm")}>프로필 수정</button>
        </MyPage>
    )
}

export default MyPageForm;
