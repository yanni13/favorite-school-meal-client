import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { SignInForm } from "../../styles/Login/Login.styled";
import axios from "axios";
import { getCookie } from "../../Cookies";

const FindIdForm = () => {
    const navigate = useNavigate();

    const initData = Object.freeze({
        nickname: '',
    });
    const [data, updataData] = useState(initData);
    const [color, updataColor] = useState("#b8e8ff")
    const [users, setUsers] = useState();

    useEffect(()=>{
        axios.get('/users/login/auth/',
            {
                headers: {
                Authorization: `Bearer ${getCookie("ACCESS_TOKEN")}`,
                }
            })
            .then((response) => {
                console.log(response.data);
                setUsers(response.data); //받아온 데이터 저장
                
            })
            .catch((error)=>{
            console.log(error);
            alert("일치하는 정보가 없습니다.");
        })

    }, []);

    useEffect(() => {
        if(data.nickname.length > 0) {
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
            {users ? (
                <>
                    <p>{users.id.slice(0,4) + "*".repeat(users.id.length-4)}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
             
            <button className="submitBtn" type="submit" onClick={handleSubmit => navigate("/LoginPage")}>로그인하기</button> 
        </SignInForm>
    );
}

export default FindIdForm;
