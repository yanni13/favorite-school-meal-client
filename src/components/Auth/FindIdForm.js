import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { SignInForm } from "../../styles/Login/Login.styled";
import axios from "axios";
import { getCookie } from "../../Cookies";

const FindIdForm = () => {
    const navigate = useNavigate();
    const token = getCookie("ACCESS_TOKEN");

    const initData = Object.freeze({
        fullname: '',
        email:'',
    });
    const [data, updataData] = useState(initData);
    const [color, updataColor] = useState("#b8e8ff")
    const [users, setUsers] = useState();

    useEffect(()=>{
        axios.get('/members/find-username', {
            "fullname":data.fullname,
            "email":data.email,
            })
            .then((response) => {
                console.log(response.data.data);
                setUsers(response.data.data); //받아온 데이터 저장
                
            })
            .catch((error)=>{
                console.log(error);
                alert("일치하는 정보가 없습니다.");
        })
    }, []);

    useEffect(() => {
        if(data.fullname.length > 0) {
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
                <br/>
                <h2 className="subtitle">{users.username}</h2>
                <br/>
                </>
            ) : (
                <p>Loading...</p>
            )}
             <br/>
            <button className="submitBtn" type="button" onClick={() => navigate("/LoginPage")}>로그인하기</button> 
        </SignInForm>
    );
}

export default FindIdForm;
