import React from 'react';
import styled from 'styled-components';
import { AsideContainerBoxStyled } from '../../../../styles/CreatorCentor/CreatorStyled';

const GuideAsideStyled = styled(AsideContainerBoxStyled)``;

const GuideAside = ({ children }) => {
  return <GuideAsideStyled>{children}</GuideAsideStyled>;
};

GuideAside.GoToInfo = styled.a`
  display: inline-block;
  margin-top: 24px;
  color: ${props => props.theme.blue};
  font-size: ${props => props.theme.fontRegular};
  font-weight: ${props => props.theme.weightSemiBold};
`;

GuideAside.Description = styled.p`
  margin: 12px 0;
  font-size: ${props => props.theme.fontSmall};
  line-height: 1.4;
`;

GuideAside.SubTitle = styled.p`
  padding-top: 20px;
  font-size: ${props => props.theme.fontRegular};
  font-weight: ${props => props.theme.weightSemiBold};
`;

GuideAside.Title = styled.h4`
  margin-bottom: 12px;
  font-size: ${props => props.theme.fontMedium};
  font-weight: ${props => props.theme.weightSemiBold};
`;

export default GuideAside;
