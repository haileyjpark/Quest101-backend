import React from 'react';

import { Icon } from './Icon';

import styled from 'styled-components';
import { AiFillInfoCircle } from 'react-icons/ai';

const HelperBox = () => (
  <Container>
    <TitleWapper size="fontRegular" color="black" weight="weightSemiBold">
      <Icon iconName={AiFillInfoCircle} size={18} margin="0 4px 0 0" />
      <Title>커버 이미지가 어디에 사용되나요?</Title>
    </TitleWapper>
    페이지 상단 커버 영역에 사용할 이미지 또는 영상을 1개 이상 추가해주세요.
    <br />
    <br />
    4:3의 가로형 이미지를 추천합니다.
  </Container>
);

export default HelperBox;

const Container = styled.div`
  width: 248px;
  height: 120px;
  margin-left: 24px;
  border-radius: 4px;
  padding: 16px;
  background-color: ${props => props.theme.lightGray};
  font-size: ${props => props.theme.fontMicro};
  line-height: 1.4;
`;

const Title = styled.p`
  display: inline-block;
`;

const TitleWapper = styled.div`
  ${props => props.theme.flex('row', 'center', '')};
  margin-bottom: 12px;
  color: ${props => props.theme.black};
  font-size: ${props => props.theme.fontSmall};
  font-weight: ${props => props.theme.weightSemiBold};
`;
