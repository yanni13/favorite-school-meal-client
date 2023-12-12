import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { SignInForm } from "../../styles/Login/Login.styled";
import axios from "axios";

const SearchIdForm = () => {
    const navigate = useNavigate();

    const initData = Object.freeze({
        fullname:'',
        email: ''
    });
    const [users, setUsers] = useState();
    const [data, updataData] = useState(initData);
    const [color, updataColor] = useState("#b8e8ff")

    useEffect(() => {
        if( data.fullname.length > 0 && data.email.length > 0) {
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

    const FindId = (e) => {

        axios.get('/members/find-username', { 
            params: {
            "fullname": data.fullname,
            "email": data.email,
            }
        })
        .then((res) => {
            console.log(res);
            console.log(res.data.data.username);
            setUsers(res.data.data.username); //받아온 데이터 저장
            alert("회원님의 아이디는 다음과 같습니다.");
            <h2 className="subtitle">{users.username}</h2>

            // {users ? (
            //     <>
            //     <br/>
            //     <h2 className="subtitle">{users.username}</h2>
            //     <br/>
            //     </>
            // ) : (
            //     <p>Loading...</p>
            // )}
        })
        .catch((error) => {
            if (error.response) {
                console.log("Error status:", error.response.status);
                console.log("Error data:", error.response.data);
                alert("다시 입력해주세요");
            } else {
                console.log("Error:", error.message);
            }
        });
    };

    return (
        <SignInForm color={color}>
            <input
             type="text" 
             name="fullname" 
             placeholder="이름" 
             value={data.fullname}
             required 
             onChange={handleChange}/>
             <input
             type="text" 
             name="email" 
             placeholder="이메일" 
             value={data.email}
             required 
             onChange={handleChange}/>
            

            <button className="submitBtn" type="button" onClick={(FindId)}>다음</button> 
        </SignInForm>
    );
}

export default SearchIdForm;