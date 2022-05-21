import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const BreadCrumbNavStyled = styled.div`
  ${props => props.theme.flex('row', 'center', '')}
`;

export const BreadCrumbNav = ({ children }) => (
  <BreadCrumbNavStyled>{children}</BreadCrumbNavStyled>
);

BreadCrumbNav.BreadCrumb = styled(Link).attrs(props => ({
  to: props.pathname,
}))`
  ${props => props.theme.flex('row', 'center', 'center')}
  color:${props => (props.isActive ? props.theme.black : props.theme.gray)};
  font-weight: ${props =>
    props.isActive ? props.theme.weightBold : props.theme.weightRegular};
`;
