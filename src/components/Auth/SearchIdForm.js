import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { SignInForm } from "../../styles/Login/Login.styled";

const SearchIdForm = () => {
    const navigate = useNavigate();

    const initData = Object.freeze({
        name:'',
        email: ''
    });

    const [data, updataData] = useState(initData);
    const [color, updataColor] = useState("#b8e8ff")

    useEffect(() => {
        if( data.name.length && data.email.length > 0) {
            updataColor("#609966");
        } else {
            updataColor("#A4D0A9");
        }
    }, [data])

    const handleChange = e => {
        console.log(e.target.value);
        updataData({
            ...data, [e.target.name]: e.target.value.trim()
        })
    }

    return (
        <SignInForm color={color}>
            <input
             type="text" 
             name="name" 
             placeholder="이름" 
             value={data.name}
             required 
             onChange={handleChange}/>
             <input
             type="text" 
             name="email" 
             placeholder="이메일" 
             value={data.email}
             required 
             onChange={handleChange}/>
            <button className="submitBtn" type="submit" onClick={() => navigate("/FindIdPage")}>로그인하기</button>
        </SignInForm>
    );
}

export default SearchIdForm;