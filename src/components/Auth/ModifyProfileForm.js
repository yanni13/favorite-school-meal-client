import React, {useState, useEffect} from "react";
import { ImageUploadLabel, SelfIntroductionBox, ProfilePicture, MyPageContainer, ProfileSection } from "../../styles/Login/MyPage.styled";
import { SignInForm, FindPage } from "../../styles/Login/Login.styled";
import axios from "axios";
import { FaUserCircle } from "react-icons/fa";
import { getCookie, setCookie } from "../../Cookies";


const ModifyProfileForm = () => {

    const initData = Object.freeze({
        nickname: '',
        selfIntroduce : ''
    });

    const [data, updataData] = useState(initData);
    const [users, setUsers] = useState();
    const [currentUsers, setCurrentUsers] = useState();

    const [color, updataColor] = useState("#609966");
    const [imgFile, setImgFile] = useState("");
    //const imgRef = useRef(null);

    

    useEffect(() => {
        if(data.nickname.length > 0 && data.selfIntroduce.length > 0 ) {
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
                //setName("");
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
        const accesstoken = getCookie("ACCESS_TOKEN");

        axios.put(`/members/${currentUsers.id}`, {
            "nickname" : data.nickname,
            "introduction": data.selfIntroduce
        }, {
            headers: {
                Authorization: `Bearer ${accesstoken}`,
                //'Content-Type': 'application/json'
            }
        })
        .then((res) => { //요청 성공했을 경우
            console.log(res.data.data);
            alert(`${res.data.data.message}`);
            //alert("저장 되었습니다!");
            //console.log("저장 성공", res.data);
            navigator("/MyPage");
        })
        .catch(err => { //요청 실패했을 경우
            if(err.response && err.response.status == 401) {
                refreshToken()
                
                .then(newAccessToken => {
                    axios.put(`/members`, {
                        "introduction": data.selfIntroduce
                    }, {
                        headers: {
                            Authorization: `Bearer ${newAccessToken}`,
                            'Content-Type': 'application/json'
                        }
                    });
                })
                .then(res => {
                    console.log("저장 성공 (리프레시 후)", res.data);
                    alert("저장 되었습니다!");
                })
                .catch(refreshErr => {
                    console.log("리프레시 실패", refreshErr);
                    alert("토큰 갱신에 실패했습니다.");
                });
        } else {
            console.log(err);
            alert("정보 저장에 실패했습니다.");
        }
    });
}

const refreshToken = () => {
    const refreshTokenValue = getCookie("REFRESH_TOKEN");

    axios.post('/auth/refresh-token', {
        refreshToken: refreshTokenValue,
    }, {
        headers: {
            Authorization: `Bearer ${refreshTokenValue}`,
            'Content-Type': 'application/json',
        }
    })
    .then(res => {
        const newAccessToken = res.data.accesstoken;
        setCookie("ACCESS_TOKEN", newAccessToken);
        console.log(newAccessToken);
        return newAccessToken;
    })
}

    return (
        <>
        <MyPageContainer>
            <ProfileSection>

            
        <ProfilePicture imageUrl={users?.profileImage}>
                    {users?.profileImage ? (
                        <img className="profile-image" src={users.profileImage} alt="프로필 사진"/>
                    ) : (
                        <FaUserCircle className="profile-icon" />
                    )}
        </ProfilePicture>
        </ProfileSection>
        </MyPageContainer>
        <ImageUploadLabel>
            <label htmlFor="profileImg">프로필 이미지 추가</label>
        
        <input
            type="file"
            accept = "image/*"
            id="profileImg"
            style={{display: "none"}}
        />
        </ImageUploadLabel>

        
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
                name="selfIntroduce" 
                placeholder="자기소개" 
                value={currentUsers.selfIntroduce}
                required 
                onChange={handleChange}
                />
            </SelfIntroductionBox>
        </>
        }
        
        
            <button className="submitBtn" type="submit" onClick={saveDB}>저장</button>
        </SignInForm>
        </>
    )

}

export default ModifyProfileForm;
