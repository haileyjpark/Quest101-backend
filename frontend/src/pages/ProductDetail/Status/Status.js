import React from 'react';
import styled from 'styled-components';

const Status = props => {
  const { icon, status, number } = props;
  return (
    <StatusBox>
      <Svg>{icon}</Svg>
      <StatusText>{status}</StatusText>
      <StatusNumber>{number}</StatusNumber>
    </StatusBox>
  );
};

const StatusBox = styled.div`
  ${props => props.theme.flex('row', 'center', 'flex-start')};
  width: 100%;
`;

const Svg = styled.div`
  margin-right: 10px;
  font-size: 20px;
  color: ${props => props.theme.darkGray};
`;

const StatusText = styled.div`
  margin-right: 5px;
  font-size: ${props => props.theme.fontRegular};
  color: ${props => props.theme.darkGray};
`;

const StatusNumber = styled.div`
  font-size: ${props => props.theme.fontRegular};
  color: ${props => props.theme.darkGray};
`;

export default Status;
