import { Link } from 'react-router-dom';
import styled from 'styled-components';
import close_button from '../../media/Menu/close_button.svg';

let UpperHeaderWrapper = styled.div`
display: flex;
justify-content: space-between;
width: 390px;
height: 44px;
background: #9DC08B;
`

let UpperheaderTitle = styled.a`
color: #1C1C1C;
font-family: Noto Sans KR;
font-size: 22px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-left: 20px;
margin-top: 12px;
`

let CloseButton = styled.img`
margin-right: 14px;
margin-top: 12px;
`

function UpperHeader() {   
    return (
        <>
            <UpperHeaderWrapper>
                <UpperheaderTitle>바로가기</UpperheaderTitle>
                <Link to='/'>
                    <CloseButton src={close_button}/>
                </Link>
            
            </UpperHeaderWrapper>
        </>
    );
}

export default UpperHeader;