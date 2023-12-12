import React, {useState, useEffect} from "react";
import { ImageUploadLabel, SelfIntroductionBox, ProfilePicture, MyPageContainer, ProfileSection } from "../../styles/Login/MyPage.styled";
import { SignInForm, FindPage } from "../../styles/Login/Login.styled";
import axios from "axios";
import { FaStepForward, FaUserCircle } from "react-icons/fa";
import { getCookie, setCookie } from "../../Cookies";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CustomProfileImage = styled.div`
    width: 125px;
    height: 125px;
    border-radius: 50%;
    overflow: hidden;

    image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    svg{
        width: 100%;
        height: 100%;
    }

`
const Button = styled.div` 
    border-radius: 7px;
    background: #A4D0A9;
    width: 199px;
    height: 39px;
    flex-shrink: 0;
    display: center;
    margin: auto;
    padding: 4px;
    color: #000;
    font-family: Noto Sans KR;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
    margin-bottom : 20px;
`;

const ProfileInput = styled.input`
    width: 150px;
    font-family: Noto Sans KR;
    font-size: 10px;
    font-weight: 400;
`;

const ProfileInputText = styled.div`
    border-radius: 7px;
    background: #A4D0A9;
    width: 199px;
    height: 50px;
    flex-shrink: 0;
    margin: 0 auto 0 auto;
    display: flex;
    flex-direction: column;
    justify-content : center;
    align-items: center;
    color: #000;
    font-family: Noto Sans KR;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
    margin-bottom : 20px;
`

const ModifyProfileForm = (props) => {
    const navigate = useNavigate();
    const accesstoken = getCookie("ACCESS_TOKEN");
    const formData = new FormData();

    const [currentUsers, setCurrentUsers] = useState();
    const [color, updateColor] = useState("#609966");
    const [tempImage, setTempImage] = useState();
    
    const [image, setImage] = useState();

    useEffect(()=>{
        axios.get('/members', //회원정보 불러오는 api
            {
                headers: {
                    Authorization: `Bearer ${getCookie("ACCESS_TOKEN")}`,
                }
            })
            .then((response) => {
                console.log(response.data.data);
                setCurrentUsers(response.data.data);
            })
            .catch((error)=>{
                console.log(error);
            })
    }, []);

    useEffect(() => {
        if(currentUsers && currentUsers.nickname && currentUsers.introduction) {
            updateColor("#609966");
        } else {
            updateColor("#A4D0A9");
        }
    }, [currentUsers])

    const handleChange = e => {
        setCurrentUsers((prev) =>  ({
            ...prev, 
            [e.target.name] : e.target.value
        }));
    }

    const saveDB = () => { //자기소개 프로필 수정
        axios.put(`/members/${currentUsers.memberId}/modify`, {
            "nickname" : currentUsers.nickname,
            "introduction": currentUsers.introduction
        }, {
            headers: {
                Authorization: `Bearer ${accesstoken}`,
            }
        })
        .then((res) => { //요청 성공했을 경우
            console.log(res.data.data);
            alert(`${res.data.data.message}`);
            navigate("/MyPage");
        })
        .catch(err => { //요청 실패했을 경우
            console.log(err);
            alert("정보 저장에 실패했습니다.");
        }
    );
    }


    const handleImageChange = e => {
        setImage(e.target.files[0]);
        // 아래는 사용자 이미ㅣㅈ state 변경
        const temp = URL.createObjectURL(e.target.files[0]); 
        setTempImage(temp);
    }

    const handleImageSubmit = async (e) => {
        e.preventDefault();
        // formData에 이미지를 append 하는 로직을 handleImageSubmit에 넣었다.
        // handleImageChange에서 append 해주니 이미지가 안넘어가서 이렇게 했다.
        formData.append('file', image);
        try {
            const response = await axios.post(`members/${currentUsers.memberId}/profile-image`,formData,{
                headers: {
                  Authorization: `Bearer ${accesstoken}` // 액세스 토큰을 헤더에 추가
                }
            }).then((res) => {
                console.log(res.data.data);
                if (res.data.data.code === 400) {
                    alert(".jpg 형식의 파일을 선택해 주세요.");
                    navigate("/MyPage");
                    return;
                }
                alert("저장 되었습니다!");
                navigate("/MyPage"); 
            });
        } catch (err) {
            console.log(err);
            alert("프로필 저장에 실패했습니다.");
        }
    }

    

    return (
        <>
        <MyPageContainer>
            <ProfileSection>
                {currentUsers &&
                    (tempImage ? 
                    <img src={tempImage}/> :
                    <img src={`https://api.favorite-school.me/api/v1${currentUsers.profileImageEndpoint}`}/>
                    )
                }
            </ProfileSection>      

        {tempImage ? 
        (
            <>
                <Button onClick={handleImageSubmit}>프로필 사진 저장</Button>
            </>
        ) :
        (
            <>
                <ProfileInputText>변경할 프로필 사진 선택
                    <ProfileInput type="file" accept="image/*" onChange={handleImageChange}/>
                </ProfileInputText>
                
            </>                
        ) 
        }
        </MyPageContainer>




        <SignInForm color={color}>
        { currentUsers &&
        <>
            <input
                type="text" 
                name="nickname" 
                placeholder="닉네임" 
                value={currentUsers.nickname}
                required 
                onChange={handleChange}/>
            <SelfIntroductionBox >
                <textarea
                type="text" 
                name="introduction" 
                placeholder="자기소개" 
                value={currentUsers.introduction}
                required 
                onChange={handleChange}
                />
            </SelfIntroductionBox>
        </>
        }
            <button className="textBtn" type="button" onClick={() => navigate("/ResetPwPage")}>비밀번호 변경</button>

            <button className="submitBtn" type="button" onClick={saveDB}>저장</button>
        </SignInForm>
        </>
    )

}

export default ModifyProfileForm;