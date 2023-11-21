//마이페이지(나) - 피그마 6번
import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { MyPageBox } from "../../styles/Login/MyPage.styled";

const MyPageForm = () => {
    const navigate = useNavigate();

    return (
        <MyPageBox>
            <button className="block" type="submit" onClick={() => navigate("/ModifyProfile")}>프로필 수정</button>
            <button className="block" type="submit" onClick={() => navigate("/ModifyInfoForm")}>회원정보 수정</button>
        </MyPageBox>
    )
}

export default MyPageForm;
