import styled from 'styled-components';

export const TabNavStyled = styled.div`
  margin-left: ${props => props.marginLeft}px;
  padding: 28px 0;
`;

export const TabNav = ({ marginLeft, children }) => (
  <TabNavStyled marginLeft={marginLeft}>{children}</TabNavStyled>
);
TabNav.Tab = styled.button`
  position: relative;
  display: inline-block;
  margin-right: 24px;
  color: ${props => (props.isActive ? props.theme.black : props.theme.gray)};
  font-size: ${props => props.theme.fontRegular};
  font-weight: ${props => props.theme.weightSemiBold};

  ${props => !props.isActive} &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -12px;
    width: ${props => props.width}px;
    height: 4px;
    transform: translateX(-50%);
    background-color: ${props => props.theme.black};
  }
`;
