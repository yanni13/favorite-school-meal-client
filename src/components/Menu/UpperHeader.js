import styled from 'styled-components';

function UpperHeader() {
    let wrapper = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 390px;
        height: 64px;
        background: #9DC08B;
    `

    let title = styled.a`
        color: #1C1C1C;
        font-family: Noto Sans KR;
        font-size: 22px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        `
    return (
        <>
            <wrapper>
                <title>바로가기</title>
            </wrapper>
        </>
    );
}

export default UpperHeader;