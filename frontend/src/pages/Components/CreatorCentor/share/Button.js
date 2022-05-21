import styled, { css } from 'styled-components';

const fullWidthStyle = css`
  ${props =>
    props.fullwidth &&
    css`
      width: 100%;
    `}
`;

const StyledButton = styled.button`
  ${props => props.theme.flex()}
  display: inline-flex;
  padding: 0.8rem 1rem;
  color: ${props => props.theme[props.color]};
  border-radius: 4px;
  background-color: ${props => props.theme[props.bgColor]};
  font-weight: ${props => props.theme.weightSemiBold};

  ${fullWidthStyle}
`;

export const Button = ({ children, ...rest }) => (
  <StyledButton {...rest}>{children}</StyledButton>
);
