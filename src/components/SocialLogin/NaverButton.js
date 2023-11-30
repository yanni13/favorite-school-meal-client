import React from 'react';
import navericon from "../../assets/naver.png"
import styled from 'styled-components';

const S = styled.div`
    .button-class {
        border: 0;
        background-color: transparent;

    }
`;
const NaverButton = ({ onClick }) => {
    
  return (
    <S>
    
        <button className="button-class" onClick={onClick}>
            <img src={navericon} alt= "Naver icon" width="50px"/>
        </button>
    
    </S>
  );
};

export default NaverButton;
