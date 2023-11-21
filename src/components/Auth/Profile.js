//마이페이지(남)
import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { ButtonSection, ProfileDetails, ProfilePicture } from "../../styles/Login/MyPage.styled";
import axios from "axios";
import { getCookie } from "../../Cookies";
import { FaUserCircle } from "react-icons/fa";
import { SignInBox } from "../../styles/Login/Login.styled";

const Profile = () => {
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
        
            <ProfilePicture imageUrl={users?.profileImage}>
                    {users?.profileImage ? (
                        <img className="profile-image" src={users.profileImage} alt="프로필 사진" />
                    ) : (
                        <FaUserCircle className="profile-icon" />
                    )}
                </ProfilePicture>
                <ProfileDetails>
                        <h3>{users?.id}</h3>
                        <p>{users?.age}</p>
                        <p>{users?.gen}</p>
                        <p>친구:{users?.friend}</p>
                        <p>매칭횟수:{users?.count}</p>
                </ProfileDetails>
                <ButtonSection>
                
                    <button className="block" type="submit" onClick={()=>navigate}>친구신청</button>
                    <button className="block" type="submit" onClick={()=>navigate}>회원신고</button>


                </ButtonSection>

                

                

        
        </SignInBox>
    )

}

export default Profile;