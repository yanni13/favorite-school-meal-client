//마이페이지(남)
import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { PRBox, PostBox, ButtonSection, ProfileDetails, ProfilePicture } from "../../styles/Login/MyPage.styled";
import axios from "axios";
import { getCookie } from "../../Cookies";
import { FaUserCircle } from "react-icons/fa";
import { SignInBox } from "../../styles/Login/Login.styled";
import PostTable from "../Post/PostTable";
import MiniBoard from "../Main/MiniBoard";

const Profile = () => {
    const navigate = useNavigate();

    const initData = Object.freeze({
        introduction: '',
    });

    const [data, updataData] = useState(initData);

    const [users, setUsers] = useState();
    const [isRequesting, setIsRequseting] = useState(false);

    useEffect((memberId)=>{
        axios.get('/members/' + memberId, //프로필 정보 가져오는 axios
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
        e.preventDefault();

        const confirmed = window.confirm('정말로 신고하시겠습니까?');

        if(confirmed) { //사용자가 확인을 눌렀을 때 로직

        axios.post('/reports', {

            "reportedMemberId": users.username,
            "content": "염동스님이 나를 두번번 짜증나게함.",
            "reportType": "PROFILE"

            .then(res => {
                console.log("회원이 신고되었습니다.", res.data);
                alert("회원신고가 성공적으로 진행되었습니다.");
            })
            .catch(err => {
                console.err("회원신고 중 오류 발생", err.data)
            })
        })
    }
    }

    const SelfPR = (e) => { //자기소개 가져오는 부분
        
        axios.get('', {

        })
          
        .then(res => {

        })
        .catch(err => {
            
        })
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
                        <h3>{users?.fullname}</h3>
                        <p>{users?.age}</p>
                        <p>{users?.gender}</p>

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
                    <MiniBoard/>
                </PostBox>
        </SignInBox>
    )

}

export default Profile;