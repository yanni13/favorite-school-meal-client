import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import comment_logo from '../../media/Post/comment_logo.svg';
import clock_logo from '../../media/Map/clock_logo.svg';
import Divider from '../Divider';
import CommentForm from '../Comment/CommentForm';
import CommentTable from '../Comment/CommentTable';
import { getCookie } from '../../Cookies';

const S = {
    Wrapper : styled.div`
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: flex-start;
        align-items: flex-start;
        overflow: scroll;
        &::-webkit-scrollbar {
            display: none;
        }
        padding: 19px;
    `,
    ProfileWrapper : styled.div`
        display : flex;
        flex-direction : row;
        justify-content : space-between;
        align-items : flex-start;
        width: 100%;
    `,
    ProfileImage : styled.div`
        width : 50px;
        height : 50px;
        border-radius: 50%;
        background-color: grey;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;
        }
    `,
    ProfileMiddleWrapper : styled.div`
        display : flex;
        flex-direction : column;
        justify-content : flex-start;
        align-items : flex-start;
        margin-left : 11px; 
    `,
    ProfileName : styled.div`
        color: #000;
        font-family: Noto Sans KR;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    `,
    TimeText : styled.div`
        color: #A1A1A1;
        font-family: Noto Sans KR;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    `,
    TitleText : styled.a`
        display : flex;
        text-align: left;
        color: #000;
        font-family: Noto Sans KR;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin: 6px 0 6px;
    `,
    ContentText : styled.a`
        color: #000;
        font-family: Noto Sans KR;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        word-wrap : break-word;
    `,
    UnderBarWrapper : styled.div` 
        width: 100%;
        display : flex;
        justify-content : space-between;
        align-items : center;
        margin-top: 6px;
    `,
    CommentFormWrapper : styled.div`
        background-color: white;
        position : absolute;
        bottom : 30px;
        left: 50%;
        transform: translateX(-50%);
        width: 348px;
        border-radius : 30px;
    `
}

const RequestButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 44px;
    border-radius: 20px;
    background: #609966;
    border : none;
    margin-left : auto;
    cursor : pointer;
`;

const RequestButtonText = styled.a`
    color: #fff;
    text-align: center;
    font-family: Noto Sans KR;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

const CompleteButton = styled(RequestButton)`
    background: #FF0000;
`

const OpenStatusBox = styled.div`
    width: 45px;
    height: 15px;
    border-radius: 5px;
    background: #609966;
    color: #FFF;
    font-family: Noto Sans KR;
    font-size: 9px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left : 5px;
`;

const CloseStatusBox = styled(OpenStatusBox)`
    background: #FF0000;
`;

const PostDetail= () => {
    const navigate = useNavigate();
    const id = useParams();
    const [data, setData] = useState();
    const [userData, setUserData] = useState(); 
    const token = getCookie("ACCESS_TOKEN");
    const [commentData, setCommentData] = useState();
    const [loggedInUser, setLoggedInUser] = useState();
    const [isMine, setIsMine] = useState();

    useEffect(() => {
        axios.get('/posts/' + id.PostId).then((res) => {
            setData(res.data.data);
            const memberId = res.data.data.memberId;
            axios.get(`/members/${memberId}`).then((userDataRes) => {
                console.log(userDataRes.data.data);
                setUserData(userDataRes.data.data);
            }).catch((userDataError) => {
                console.error(userDataError);
            });
        }).catch((error) => {
            console.error(error);
        });

        axios.get(`/posts/${id.PostId}/comments`).then((res) => {
            console.log(res.data.data);
            setCommentData(res.data.data);
        }).catch((err) => {
            console.log(err);
        })

        axios.get('/members',{
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }).then((res) => {
            console.log(res.data.data);
            setLoggedInUser(res.data.data.memberId);
        }).catch((err) => {
            console.log(err);
        });

    }, []);

    useEffect(() => {
        if (loggedInUser && data){
            if (loggedInUser === data.memberId) {
                setIsMine(true);
            }
        }
    },[data, loggedInUser]);
    

    const ApplyMatching = () => {
        if (loggedInUser) {
            axios.post(`/posts/${id.PostId}/apply-matching`,null,{
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }).then((res) => {
                console.log(res);
                switch (res.data.data.code){
                    case 403:
                        alert("이미 신청한 글입니다.");
                        break;
                    default:
                        alert("신청 완료되었습니다.");
                }
            })
        } else {
            alert("로그인이 필요합니다.");
        }  
    };

    const CompleteMatching = () => {
        axios.patch(`/posts/${id.PostId}/complete-matching`,null,{
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }).then((res) => {
            console.log(res.data)
        })
    };
    
    return(
        <>
        {(userData && data) && 
            <>
            <S.Wrapper>
                <S.ProfileWrapper>
                    <S.ProfileImage>
                    {userData && <img src={`https://api.favorite-school.me/api/v1${userData.profileImageEndpoint}`}/>}
                    </S.ProfileImage>
                    <S.ProfileMiddleWrapper>
                        {userData && 
                            <S.ProfileName>{userData.nickname}</S.ProfileName>
                        }
                        <S.TimeText>{data.createdAt}</S.TimeText>
                    </S.ProfileMiddleWrapper>
                    {isMine && data.matching.matchingStatus !== "CLOSED" ?
                        <>
                            <CompleteButton onClick={CompleteMatching}>
                                <RequestButtonText>마감하기</RequestButtonText>
                                <RequestButtonText>{data.matching.approvedParticipant}/{data.matching.maxParticipant}</RequestButtonText>
                            </CompleteButton>
                        </> :
                        <>
                            <RequestButton onClick={ApplyMatching}>
                                <RequestButtonText>요청하기</RequestButtonText>
                                <RequestButtonText>{data.matching.approvedParticipant}/{data.matching.maxParticipant}</RequestButtonText>
                            </RequestButton>
                        </>
                    }
                </S.ProfileWrapper>
                <S.TitleText>{data.title}</S.TitleText>
                <S.ContentText>{data.content}</S.ContentText>

                <S.UnderBarWrapper> 
                    <img src={comment_logo} alt="comment_logo" style={{width: "20px", height: "20px", marginRight : "5px"}}/>
                    <S.TimeText>{data.commentCount}</S.TimeText>
                    {
                        (data.matching.matchingStatus === "CLOSED" ? 
                            <CloseStatusBox>마감</CloseStatusBox>
                        :   
                            <OpenStatusBox>진행중</OpenStatusBox>
                        )
                    }
                        <img src={clock_logo} alt="clock_logo" style={{width: "20px", height: "20px", marginRight : "5px", marginLeft : "auto"}}/>
                        <S.TimeText>{data.matching.meetingDateTime}</S.TimeText>
                </S.UnderBarWrapper>
                <Divider/>
                {commentData && commentData.map((comment) => (
                    <CommentTable comment={comment}/>
                ))}
            
            </S.Wrapper>
            <S.CommentFormWrapper>
                <CommentForm id={data.postId}/>
            </S.CommentFormWrapper>
            </>
        }
        </>
    )
};

export default PostDetail;
