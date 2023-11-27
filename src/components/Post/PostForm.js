import styled from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from 'react'; 
import { getCookie } from '../../Cookies';
import Divider from '../Divider';
import { useNavigate } from 'react-router';

const S = {
    Wrapper : styled.div`
        position: relative;
        display : flex;
        flex-direction : column;
        padding: 20px;
        justify-content: flex-start;
        gap: 3px;
    `,
    TitleInput : styled.input`
        width: 100%;
        color: black;
        font-family: 'Noto Sans KR';
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        border: none;
        outline: none;
    `,
    InfoWrapper : styled.div`
        display : flex;
        width: 100%;
        justify-content: flex-start;
        align-items: center;
        gap : 5px;
    `,
    InfoText : styled.a`
        color: #A1A1A1;
        font-family: Noto Sans KR;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    `,
    HeadCounterButton : styled.button`
        width: 25px;
        height: 25px;
        border-radius: 50%;
        border: 0;
        background-color: #d9d9d9;
        font-size: 20px;
        font-weight: 16;
        cursor: pointer;
        outline: none;
    `,
    TimeInput : styled.input`
        color: black;
        width: 95px;
        font-family: 'Noto Sans KR';
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        border: none;
        outline: none;
    `,
    ContentInput : styled.textarea`
        width: 100%;
        height: 550px;
        color: #000;
        font-family: 'Noto Sans KR';
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        border: none;
        outline: none;
        overflow: scroll;
        &::-webkit-scrollbar {
            display: none;
        }
        margin-top: 10px;
    `,
    SubmitButtonWrapper : styled.div`
        position: absolute;
        top: -62px;
        right: 0;
    `,
    SubmitButton : styled.button`
        width: 60px;
        height: 22px;
        border-radius: 20px;
        background: #609966;
        color: #000;
        font-family: Noto Sans KR;
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        border : none;
        cursor : pointer;
    `
}

const PostForm = ({ url }) => {
    const navigate = useNavigate();
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const [headCount, setHeadCount] = useState(0);
    const [meetingDateTime, setMeetingDateTime] = useState(["","",""]);
    const [currentDay, setCurrentDay] = useState('');
    const [dayVal, setDayVal] = useState('');

    const [currentTime, setCurrentTime] = useState('');
    useEffect(() => {
        // 현재 날짜를 가져오는 함수
        const getCurrentDate = () => {
          const date = new Date();
          const year = date.getFullYear();
          let month = (date.getMonth() + 1).toString();
          let day = date.getDate().toString();
    
          //한 자리 수인 경우 두 자리수로 변경
          month = month.length === 1 ? '0' + month : month;
          day = day.length === 1 ? '0' + day : day;

          return `${year}-${month}-${day}`;
        };
        const today = getCurrentDate();
        setCurrentDay(today);
        setDayVal(today);
        const temp = [...meetingDateTime];
        temp[0] = formatDate(today);
        setMeetingDateTime(temp);
      }, []);

    useEffect(() => {
        // 현재 시간을 가져오는 함수
        const getCurrentTime = () => {
          const date = new Date();
          let hours = date.getHours().toString();
          let minutes = date.getMinutes().toString();
    
          // 시와 분이 한 자리 수인 경우 두 자리수로 변경
          hours = hours.length === 1 ? '0' + hours : hours;
          minutes = minutes.length === 1 ? '0' + minutes : minutes;
    
          return `${hours}:${minutes}`;
        };
        const time = getCurrentTime();
        setCurrentTime(time);
    }, []);

    const formatDate = (date) => {
        const month = date.substring(5,7);
        const day = date.substring(8,10);
        const month_date = (month + "/" + day);
        return month_date;
    }

    const formatTime = (time) => {
        const hour = time.substring(0,2);
        const minute = time.substring(3,5);
        const hour_minute = (hour + ":" + minute);
        console.log(meetingDateTime);
        return hour_minute;
    }

    const increment = () => {
        setHeadCount(headCount + 1);
      };
    
      const decrement = () => {
        if (headCount > 0) {
          setHeadCount(headCount - 1);
        }
      };

    const handleClick = () => {
        const formattedDateTime = meetingDateTime[0] + " " + meetingDateTime[1] + " ~ " + meetingDateTime[2];
        const formattedData = {
            title: title,
            content: content,
            meetingDateTime: formattedDateTime,
            maxParticipant: headCount
        }
        console.log(formattedData);
        axios.post(url, formattedData, 
        {
            headers: {
                Authorization: `Bearer ${getCookie('ACCESS_TOKEN')}`
            }
        }).then((res) => {
            if (res.data.status === "success"){
                alert("글작성 완료");
                navigate(-1);
            }
            else {
                switch(res.data.data.code) {
                    case 400:
                        console.log("잘못된 요청");
                        break;
                    case 401:
                        console.log("권한 없음 로그인하셈");
                        break;
                    case 500:
                        console.log("서버 오류");
                        break;
                    default:
                        console.log("알 수 없는 에러");
                        break; 
                }
            }
        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <>
        <S.Wrapper>
            <S.TitleInput placeholder="제목"
            onChange={(e) => {setTitle(e.target.value);}}
            />
            <S.InfoWrapper>
                <S.InfoText>모집인원</S.InfoText>
                <S.HeadCounterButton onClick={decrement}>-</S.HeadCounterButton>
                <a style={{
                    display: "flex",
                    fontFamily: "Noto Sans KR",
                    fontSize: "12px",
                    textAlign: "center",
                    justifyContent: "center"}}>
                    {headCount}
                </a>
                <S.HeadCounterButton onClick={increment}>+</S.HeadCounterButton>
            </S.InfoWrapper>
            <S.InfoWrapper>
                <S.InfoText>날짜</S.InfoText>
                <S.TimeInput type='date' value={dayVal} min={currentDay}
                onChange={(e) => {
                    setDayVal(e.target.value);
                    const date = e.target.value;
                    const copy = [...meetingDateTime];
                    copy[0] = formatDate(date);
                    setMeetingDateTime(copy);
                }
                }></S.TimeInput>
            </S.InfoWrapper>
            <S.InfoWrapper>
                <S.InfoText>시간</S.InfoText>
                <S.TimeInput type='time' min={currentTime}
                onChange={(e) => {
                    const time = e.target.value;
                    const copy = [...meetingDateTime];
                    copy[1] = formatTime(time);
                    setMeetingDateTime(copy);
                }}></S.TimeInput>
                <S.InfoText>부터</S.InfoText>
                <S.TimeInput type='time' min={currentTime}
                onChange={(e) => {
                    const time = e.target.value;
                    const copy = [...meetingDateTime];
                    copy[2] = formatTime(time);
                    setMeetingDateTime(copy);
                }}></S.TimeInput>
                <S.InfoText>까지</S.InfoText>
            </S.InfoWrapper>
            <Divider/>
            <S.ContentInput placeholder="내용을 입력하세요."
            onChange={(e) => {setContent(e.target.value);}}/>
            <S.SubmitButtonWrapper>
                    <S.SubmitButton onClick={() => handleClick()}>글 작성</S.SubmitButton>
            </S.SubmitButtonWrapper>
        </S.Wrapper>
    </>
    );
}

export default PostForm;