import React, {useState, useEffect} from "react";
import { ImageUploadLabel, SelfIntroductionBox, ProfilePicture, MyPageContainer, ProfileSection } from "../../styles/Login/MyPage.styled";
import { SignInForm, FindPage } from "../../styles/Login/Login.styled";
import axios from "axios";
import { FaStepForward, FaUserCircle } from "react-icons/fa";
import { getCookie, setCookie } from "../../Cookies";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
`;


const ModifyProfileForm = props => {
    const navigate = useNavigate();
    const accesstoken = getCookie("ACCESS_TOKEN");
    const formData = new FormData();
    const fileInput = React.useRef(null);

    const initData = Object.freeze({
        file:'',
        nickname: '',
        introduction : ''
    });

    const [data, updataData] = useState(initData);
    const [users, setUsers] = useState();
    const [currentUsers, setCurrentUsers] = useState();
    const [file, setFile] = useState(null);
    const [isFile, setIsFile] = useState(true);
    const [color, updataColor] = useState("#609966");

    useEffect(() => {
        if(data.nickname.length > 0 && data.introduction.length > 0 ) {
            updataColor("#609966");
        } else {
            updataColor("#A4D0A9");
        }
    }, [data])

    useEffect(()=>{
        axios.get('/members', //회원정보 불러오는 api
            {
                headers: {
                    Authorization: `Bearer ${getCookie("ACCESS_TOKEN")}`,
                }
            })
            .then((response) => {
                console.log(response.data);
                setCurrentUsers(response.data.data); //받아온 데이터 저장
            })
            .catch((error)=>{
                console.log(error);
            })
    }, []);

    const handleChange = e => {
        console.log(e.target.value);
        updataData({
            ...data, [e.target.name]: e.target.value.trim()
        })
    }

    const saveDB = () => { //자기소개 프로필 수정
        axios.put(`/members/${currentUsers.memberId}/modify`, {
            "nickname" : data.nickname,
            "introduction": data.introduction
        }, {
            headers: {
                Authorization: `Bearer ${accesstoken}`,
            }
        })
        .then((res) => { //요청 성공했을 경우
            console.log(res.data.data);
            alert(`${res.data.data.message}`);
            //alert("저장 되었습니다!");
            //console.log("저장 성공", res.data);
            navigate("/MyPage");
        })
        .catch(err => { //요청 실패했을 경우
            
            console.log(err);
            alert("정보 저장에 실패했습니다.");
        }
    );
    }

    const handleButtonClick = e => {
        fileInput.current.click();
    }

    const handleImage = e => {
        console.log(e.target.files[0]);
    }

    return (
        <>
        <MyPageContainer>
            <ProfileSection>
            
        <ProfilePicture imageUrl={users?.profileImage}>
                    {users?.profileImage ? (
                        <img className="profile-image" src="" alt="프로필 사진"/>
                    ) : (
                        <FaUserCircle className="profile-icon" />
                    )}
        </ProfilePicture>
        </ProfileSection>

        {isFile ? (
            <div>
            <Button onClick={handleButtonClick}>프로필 사진 업로드</Button>
            <input type = "file" 
                    style={{display: "none"}} 
                    onChange={handleImage}
                    ref={fileInput}
                    />
            </div>

        ) : (
            <div>
            <Button onClick={handleButtonClick}>프로필 사진 저장
            </Button>
            <input type = "file" 
                    style={{display: "none"}} 
                    onChange={handleImage}
                    ref={fileInput} />
            </div>
        )}
        
        <br/>
        <br/>
        </MyPageContainer>

        <SignInForm color={color}>
        { currentUsers &&
        <>
            <input
                type="text" 
                name="nickname" 
                placeholder="닉네임" 
                value={data.nickname || currentUsers.nickname}
                required 
                onChange={handleChange}/>
            <SelfIntroductionBox >
                <textarea
                type="text" 
                name="introduction" 
                placeholder="자기소개" 
                value={data.introduction || currentUsers.introduction}
                required 
                onChange={handleChange}
                />
            </SelfIntroductionBox>
        </>
        }
        
            <button className="submitBtn" type="button" onClick={saveDB}>저장</button>
        </SignInForm>
        </>
    )
}


export default ModifyProfileForm;