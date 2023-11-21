//마이페이지(나) - 피그마 6번
import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getCookie } from "../../Cookies";
import { FaUserCircle } from "react-icons/fa";
import { ProfileSection, ProfileDetails, ProfilePicture, ButtonSection } from "../../styles/Login/MyPage.styled";
import { SignInBox } from "../../styles/Login/Login.styled";

const MyPageForm = () => {
    const navigate = useNavigate();

    const [users, setUsers] = useState();
    
    useEffect(()=>{
        axios.get('',
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
        })

    }, []);

    return (
        <SignInBox>
            <ProfileSection>
                <ProfilePicture imageUrl={users?.profileImage}>
                    {users?.profileImage ? (
                        <img className="profile-image" src={users.profileImage} alt="프로필 사진" />
                    ) : (
                        <FaUserCircle className="profile-icon" />
                    )}
                </ProfilePicture>

                    <ProfileDetails>
                        <h3>{users?.id}</h3>
                        <p>{users?.email}</p>
                    
                    </ProfileDetails>
                </ProfileSection>
                <ButtonSection>
                    
                        <button className="block" type="submit" onClick={() => navigate("/ModifyProfile")}>프로필 수정</button>
                        <button className="block" type="submit" onClick={() => navigate("/ModifyInfoPage")}>회원정보 수정</button>
                    
                </ButtonSection>
        </SignInBox>
    )
}

export default MyPageForm;
