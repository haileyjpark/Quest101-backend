import styled from 'styled-components';

// 컨테이너
// Section
export const listContainerStyled = styled.li`
  padding: 24px;
  border-bottom: ${props => props.theme.borderGray};

  &:nth-last-child(1) {
    border-bottom: none;
  }

  &:hover {
    background-color: ${props => props.theme.lightGray};
  }
`;

export const ContainerBoxStyled = styled.div`
  margin-bottom: 32px;
  border: ${props => props.theme.borderGray};
  border-radius: ${props => props.theme.borderRadius12};
`;

export const HeaderContainerRowStyled = styled.div`
  ${props => props.theme.flex('row', 'center', 'space-between')}
  padding: 20px 24px;
`;

export const HeaderContainerColumnStyled = styled.div`
  ${props => props.theme.flex('column', '', '')}
`;

// Aside
export const AsideContainerBoxStyled = styled(ContainerBoxStyled)`
  padding: 24px;
`;

// 타이포
export const MainTitleStyled = styled.h3`
  display: inline-block;
  font-size: ${props => props.theme.fontLarge};
  font-weight: ${props => props.theme.weightSemiBold};
`;

export const SubTitleStyled = styled.h4`
  font-size: ${props => props.theme.fontMedium};
  font-weight: ${props => props.theme.weightSemiBold};
  margin-bottom: 12px;
`;

export const FormLabelStyled = styled.span`
  display: inline-block;
  padding-bottom: 12px;
  color: ${props => props.theme.gray};
  font-size: ${props => props.theme.fontMicro};
`;

export const DescriptionStyled = styled.p`
  margin: 12px 0;
  font-size: ${props => props.theme.fontSmall};
  line-height: 1.4;
`;

export const PLabel = styled.p`
  margin-bottom: 12px;
  color: ${props => props.theme.black};
  font-size: ${props => props.theme.fontRegular};
  font-weight: ${props => props.theme.weightSemiBold};
`;

// 폼
// Input
export const InputContainerStyled = styled.div`
  ${props => props.theme.flex('column', '', '')};
`;

export const InputStyled = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 16px;
  border: ${props => props.theme.borderGray};
  border-radius: ${props => props.theme.borderRadius4};
  background-color: ${props => props.theme.white};
  color: ${props => props.theme.black};
  font-size: ${props => props.theme.fontRegular};
  line-height: 20px;
  letter-spacing: -0.15px;

  &:focus {
    border: ${props => props.theme.borderBlack};
  }
`;

export const SelectStyled = styled.select`
  width: 100%;
  height: 48px;
  padding: 0 48px 0px 16px;
  border: ${props => props.theme.borderGray};
  border-radius: ${props => props.theme.borderRadius4};
  background-image: url(/images/select-arrow.png);
  background-repeat: no-repeat;
  background-position: right 16px center;
  background-size: 18px;
  color: ${props => props.theme.black};
  font-size: ${props => props.theme.fontRegular};
  line-height: 20px;
  letter-spacing: -0.15px;
  appearance: none;

  &:focus {
    border: ${props => props.theme.borderBlack};
  }
`;

export const TextAreaStyled = styled.textarea`
  width: 100%;
  height: 800px;
  padding: 16px;
  border: ${props => props.theme.borderGray};
  border-radius: ${props => props.theme.borderRadius4};
  background-color: ${props => props.theme.white};
  color: ${props => props.theme.black};
  font-size: ${props => props.theme.fontRegular};
  line-height: 20px;
  letter-spacing: -0.15px;
  resize: none;

  &:focus {
    border: ${props => props.theme.borderBlack};
  }
`;

export const RequireMessageStyled = styled.span`
  display: inline-block;
  padding-top: 12px;
  color: ${props => props.theme.grays};
  font-size: ${props => props.theme.fontMicro};
`;

export const ErrorMessageStyled = styled.span`
  display: inline-block;
  padding-top: 12px;
  color: ${props => props.theme.red};
  font-size: ${props => props.theme.fontMicro};
`;

export const MessageWrapperStyled = styled.div`
  ${props => props.theme.flex('row', '', 'space-between')};
`;
