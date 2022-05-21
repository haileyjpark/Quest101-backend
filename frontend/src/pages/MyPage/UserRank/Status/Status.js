import React from 'react';
import styled from 'styled-components';

const Status = props => {
  const { icon, status } = props;
  return (
    <StatusWrap>
      <Svg>{icon}</Svg>
      <StatusText>{status}</StatusText>
    </StatusWrap>
  );
};

const StatusWrap = styled.div`
  ${props => props.theme.flex('column', 'center', 'center')};
  margin-right: 26px;
`;

const Svg = styled.div`
  font-size: 20px;
  color: ${props => props.theme.white};
  opacity: 0.5;
`;

const StatusText = styled.p`
  margin-top: 3px;
  color: ${props => props.theme.white};
  font-size: ${props => props.theme.fontMicro};
  opacity: 0.5;
`;

export default Status;
