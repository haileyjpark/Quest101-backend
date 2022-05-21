import React from 'react';
import { useLocation } from 'react-router-dom';

import { BreadCrumbNav } from '../../share/BreadCrumbNav';

import styled from 'styled-components';
import * as CreatorStyled from '../../../../../styles/CreatorCentor/CreatorStyled';
import { Button } from '../../share/Button';
import { TabNav } from '../../share/TabNav';
import { Icon } from '../../share/Icon';

import { MdKeyboardArrowRight } from 'react-icons/md';

const CreatorEditHeader = props => {
  const { pathname } = useLocation();

  return (
    <Container>
      <BreadCrumbNav>
        <BreadCrumbNav.BreadCrumb pathname="/creator" isActive={false}>
          목록
          <Icon iconName={MdKeyboardArrowRight} size={24} margin={0} />
        </BreadCrumbNav.BreadCrumb>
        <BreadCrumbNav.BreadCrumb pathname={pathname} isActive={true}>
          내 클래스
        </BreadCrumbNav.BreadCrumb>
      </BreadCrumbNav>
      <TitleAndPreview>
        <Title>원포인트 클래스 정보 작성</Title>
        <Button color="white" bgColor="black">
          작성 화면 미리보기
        </Button>
      </TitleAndPreview>
      <TabNav>
        <TabNav.Tab isActive={true} width={56}>
          기본 정보
        </TabNav.Tab>
        <TabNav.Tab isActive={false}>동영상</TabNav.Tab>
      </TabNav>
    </Container>
  );
};

export default CreatorEditHeader;

const Title = styled(CreatorStyled.MainTitleStyled)``;

const TitleAndPreview = styled(CreatorStyled.HeaderContainerRowStyled)`
  padding: 20px 0;
`;

const Container = styled(CreatorStyled.HeaderContainerColumnStyled)``;
