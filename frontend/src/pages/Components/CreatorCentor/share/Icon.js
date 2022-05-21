import styled from 'styled-components';

export const Icon = ({ iconName, fullwidth, ...rest }) => {
  const StyledIcon = styled(iconName)`
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    margin: ${props => props.margin};
    fullwidth: ${fullwidth};
  `;
  return <StyledIcon {...rest} />;
};
