//마이페이지(남)
import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { PRBox, PostBox, ButtonSection, ProfileDetails, ProfilePicture } from "../../styles/Login/MyPage.styled";
import axios from "axios";
import { getCookie } from "../../Cookies";
import { FaUserCircle } from "react-icons/fa";
import { SignInBox } from "../../styles/Login/Login.styled";
import PostTable from "../Post/PostTable";

const Profile = () => {
    const navigate = useNavigate();

    const [users, setUsers] = useState();
    const [isRequesting, setIsRequseting] = useState(false);

    useEffect(()=>{
        axios.get('', //프로필 정보 가져오는 axios
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

    const handleFriendRequest = async () => { //친구신청 정보 백엔드에 넘겨줌
        try {
            setIsRequseting(true);

            const requestData = {

            };

            //const responseData = await sendFriendRequest(requestData);
            alert('친구 신청이 성공적으로 완료되었습니다.');
        }  catch(err) {
            console.err('Error handling friend request:', err.message);
        } finally {
            setIsRequseting(false);
        }
    };

    const handleMemberReport = (e) => { //회원신고 axios

    }

    

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
                    <button className="block" type="submit" onClick={handleFriendRequest} disabled={isRequesting}>{isRequesting ? '신청 중...' : '친구 신청'}</button>
                    <button className="block" type="submit" onClick={handleMemberReport}>회원신고</button>
                </ButtonSection>

                <PRBox>
                    {/*닉네임, 자기소개, 나이, 성별 */}
                </PRBox>

                <h3 className="subtitle">최근에 작성한 게시글</h3>

                <PostBox>
                    <PostTable/>
                </PostBox>
        </SignInBox>
    )

}

export default Profile;