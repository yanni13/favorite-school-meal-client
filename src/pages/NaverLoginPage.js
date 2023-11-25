import React from "react";
import axios from "axios";

const NaverLoginPage = () => {

    // let params = new URL(document.locaiton).searchParams;
    // let code = params.get("code");
    // let state = params.get("state");

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