import React from 'react';
import styled from 'styled-components';

const HeartButton = props => {
  const { text, icon, number } = props;
  return (
    <HeartButtonContainer>
      <p>{icon}</p>
      <HeartButtonText>{text ? text : number}</HeartButtonText>
    </HeartButtonContainer>
  );
};

const HeartButtonContainer = styled.div`
  ${props => props.theme.flex('row', 'center', 'center')};
  height: 40px;
  padding: 0px 20px 0px 20px;
  border-radius: 3px;
  color: ${props => props.theme.black};
  background-color: ${props => props.theme.lightGray};
  font-size: ${props => props.theme.fontRegular};

  &:hover {
    background-color: ${props => props.theme.gray};
    transition: 0.3s;
  }
`;

const HeartButtonText = styled.span`
  margin-left: 5px;
  font-size: ${props => props.theme.fontRegular};
`;

export default HeartButton;
