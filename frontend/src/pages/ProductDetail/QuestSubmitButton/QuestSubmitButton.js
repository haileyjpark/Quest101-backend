import React from 'react';
import styled from 'styled-components';

const QuestSubmitButton = props => {
  const { addToCart } = props;
  return <ButtonContainer onClick={addToCart}>클래스 신청하기</ButtonContainer>;
};

const ButtonContainer = styled.button.attrs({
  type: 'button',
})`
  width: 100%;
  padding: 15px 0;
  border-radius: 3px;
  background-color: ${props => props.theme.orange};
  color: ${props => props.theme.white};
  font-size: ${props => props.theme.fontSemiMedium};
  font-weight: ${props => props.theme.weightBold};
  text-align: center;

  &:hover {
    background-color: #cc4500;
    transition: 0.2s;
  }
`;

export default QuestSubmitButton;
