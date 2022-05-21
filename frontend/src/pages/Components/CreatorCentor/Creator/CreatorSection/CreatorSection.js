import React, { useEffect, useState } from 'react';

import ClassList from './ClassList';

import styled from 'styled-components';
import * as CreatorStyled from '../../../../../styles/CreatorCentor/CreatorStyled';
import { AiOutlinePlus } from 'react-icons/ai';
import { API_JUNGHUN } from '../../../../../config';

import { Button } from '../../share/Button';
import { Icon } from '../../share/Icon';
import { TabNav } from '../../share/TabNav';

const CreatorSection = () => {
  const [ClassListDatas, setClassListDatas] = useState([]);
  const [loading, setLoading] = useState(true);

  //백엔드 통신용
  useEffect(() => {
    (async () => {
      const response = await fetch(API_JUNGHUN.CLASS_COURSES, {
        headers: {
          Authorization: localStorage.getItem('kakao_token'),
        },
      });
      const json = await response.json();
      setClassListDatas(json.results);
      setLoading(false);
    })();
  }, []);

  // 프론트 테스트 통신용
  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch('/data/creatorClassListMockdata.json', {
  //       headers: {
  //         Authorization:
  //           localStorage.getItem('kakao_token'),
  //       },
  //     });
  //     const json = await response.json();
  //     setClassListDatas(json);
  //     setLoading(false);
  //   })();
  // }, []);

  const handleDeleteClass = classItem => {
    setClassListDatas(ClassListDatas =>
      ClassListDatas.filter(item => item.id !== classItem.id)
    );
  };

  const handleAddClass = () => {
    fetch(API_JUNGHUN.CLASS_COURSES, {
      method: 'PUT',
      headers: {
        Authorization: localStorage.getItem('kakao_token'),
      },
    })
      .then(res => res.json())
      .then(result => {
        setClassListDatas(prev => [
          ...prev,
          {
            id: result.courseId,
            name: null,
            thumbnail_image_url: null,
            detail_media: null,
            description: null,
            sub_category: null,
            category: null,
            healthStat: 0,
            intellectStat: 0,
            charmStat: 0,
            artStat: 0,
            status: null,
            level: null,
            user_name: null,
            user_profile_image: null,
            user_phone_number: null,
            user_description: null,
            social_account: null,
          },
        ]);
        alert('새 클래스를 생성했습니다.');
      })
      .catch(error => alert('클래스 생성에 실패했습니다.'));
  };

  return (
    <Container>
      <Header>
        <Title>내 클래스 목록</Title>
        <Button
          color="gray"
          bgColor="white"
          type="button"
          onClick={handleAddClass}
        >
          <Icon iconName={AiOutlinePlus} size={18} margin="0 8px 0 0" />
          새로운 클래스
        </Button>
      </Header>
      <TabNav marginLeft={24}>
        <TabNav.Tab isActive={true} width={92}>
          원포인트 클래스
        </TabNav.Tab>
      </TabNav>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : ClassListDatas?.length > 0 ? (
        <ClassList
          ClassListDatas={ClassListDatas}
          onDeleteClass={handleDeleteClass}
        />
      ) : (
        <EmptyMent>내 클래스가 없습니다.</EmptyMent>
      )}
    </Container>
  );
};
export default CreatorSection;

const EmptyMent = styled.p`
  margin: 82px 0 102px 0;
  color: ${props => (!props.isOpend ? props.theme.gray : props.theme.darkGray)};
  font-size: ${props => props.theme.fontRegular};
  text-align: center;
`;

const Loader = styled.div`
  text-align: center;
  padding: 32px 0;
`;

const Title = styled(CreatorStyled.MainTitleStyled)``;

const Header = styled(CreatorStyled.HeaderContainerRowStyled)`
  border-bottom: ${props => props.theme.borderGray};
`;

const Container = styled(CreatorStyled.ContainerBoxStyled)``;
