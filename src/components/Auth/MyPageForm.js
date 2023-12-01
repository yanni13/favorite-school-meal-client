//마이페이지(나) - 피그마 6번
import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getCookie } from "../../Cookies";
import { FaUserCircle } from "react-icons/fa";
import { ProfileSection, ProfileDetails, ProfilePicture, ButtonSection } from "../../styles/Login/MyPage.styled";
import { MyPageContainer } from "../../styles/Login/MyPage.styled";

const MyPageForm = () => {
    const navigate = useNavigate();
    //const userId = useParams();
    const token = getCookie("ACCESS_TOKEN");
    const [users, setUsers] = useState();
    const [name, setName] = useState("");
    const [currentUsers, setCurrentUsers] = useState();

    
    useEffect(()=>{
        axios.get('/members', //회원정보 불러오는 api
            {
                headers: {
                Authorization: `Bearer ${token}`,
                }
            })
            .then((response) => {
                console.log(response.data);
                setCurrentUsers(response.data.data); //받아온 데이터 저장
                //setName("");
            })
            .catch((error)=>{
                console.log(error);
            })
    }, []);

    const deleteMember = (e) => { //회원탈퇴 백엔드에 넘겨주는 로직
        const confirmed = window.confirm('정말로 탈퇴하시겠습니까?');

        if(confirmed) { //네를 눌렀음
            axios.delete(`/api/v1/members/`, { //회원신고 api 연결 
            })
            .then(res => {
                console.log(res.data);
                alert("탈퇴완료 되었습니다.");
                navigate("/");
            })
            .catch(err => {
                console.log(err.message);
                alert("네트워크 오류로 탈퇴 처리에 실패하였습니다.");
            })
        }
    }

    return (
        <MyPageContainer>
            <ProfileSection>
                <ProfilePicture imageUrl={currentUsers?.profileImage}>
                    {currentUsers?.profileImage ? (
                        <img className="profile-image" src={currentUsers.profileImage} alt="프로필 사진" />
                    ) : (
                        <FaUserCircle className="profile-icon" />
                    )}
                </ProfilePicture>
                
                </ProfileSection>
                <h3 className="UserName">{currentUsers?.fullname}</h3>
                <ButtonSection>
                        <button className="block" type="submit" onClick={() => navigate("/ModifyProfile")}>프로필 수정</button>
                        <button className="block" type="submit" onClick={deleteMember}>회원 탈퇴하기</button>
                </ButtonSection>
                
                </MyPageContainer>
    )
}

export default MyPageForm;
