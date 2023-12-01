import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { setCookie } from "../Cookies";
import { useNavigate } from "react-router-dom";

const NaverLoginPage = () => {

    const code = new URL(window.location.toString()).searchParams.get("code");
    const state = new URL(window.location.toString()).searchParams.get("state");
    const navigate = useNavigate();

    useEffect(() => {
        console.log(typeof(code))
        console.log(typeof(state))
    //         axios.get(`oauth/naver/callback?code=${code}&state=${state}`).then((res) => {
    //             console.log(res);

    //         }).catch((err) => {
    //             console.log(err);
    //         })
    // });
        axios.post('oauth/sign/naver',{
            "oauthSignUpRequest": {
                "fullname": "qqwe",
                "personalNumber": "qwer"
            },
            "oauthSignInRequest": {
                "authorizeCode" : code.toString(),
                "state" : state.toString()
            }
        }).then((res) => {
            console.log(res);
            setCookie("ACCESS_TOKEN", `${res.data.data.access_token}`);
            navigate("/");
        }).catch((err) => {
            console.log(err);
        });
    },[])

    /*const naver = async() => {
        try {
            const result = await axios.get(
                `http://localhost:3000/NaverLoginPage//api/v1/oauth/sign/{Naver}?code=${code}&state=${state}`
            );
        } catch (error) {
            console.log("error", error);
        }
    }*/

    /*const naver = (e) => {
        axios.post(
            `http://localhost:3000/NaverLoginPage//api/v1/oauth/sign/{Naver}?code=${code}&state=${state}`
        )
        .then(res => {
            const result = res.data;
            console.log("result", result);
        })
        .catch(err => {
            console.log("error", err);
        });
    };*/
}



export default NaverLoginPage;