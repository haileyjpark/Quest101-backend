import React from 'react';
import { Link } from 'react-router-dom';

import { ThumbnailBasicBox } from '../../share/Thumbnail';

import styled from 'styled-components';
import * as CreatorStyled from '../../../../../styles/CreatorCentor/CreatorStyled';
import { Button } from '../../share/Button';
import { Icon } from '../../share/Icon';
import { AiFillDelete } from 'react-icons/ai';
import { API_JUNGHUN } from '../../../../../config';

const ClassItem = ({ projectData, onDeleteClass }) => {
  const { id, thumbnail_image_url, status, name } = projectData;

  const handleDeleteClass = (e, id) => {
    e.preventDefault();

    fetch(API_JUNGHUN.CLASS_COURSES, {
      method: 'DELETE',
      headers: {
        Authorization: localStorage.getItem('kakao_token'),
      },
      body: JSON.stringify({
        course_id: id,
      }),
    })
      .then(res => res.json())
      .then(result => {
        result.message === 'DELETE_SUCCESS' && onDeleteClass(projectData);
        alert('클래스를 삭제했습니다.');
      })
      .catch(error => alert('클래스 삭제에 실패했습니다.'));
  };

  return (
    <Container>
      <GotoEdit to={`${id}/edit`} state={{ projectData: projectData }}>
        <ThumbnailBasicBox
          src={thumbnail_image_url ?? 'images/photo-potrait.svg'}
        />
        <CardContent>
          <Info>
            <TitleAndStatus>
              <Title>{name ?? '제목을 입력해주세요.'}</Title>
              <Status status={status ?? '클래스 준비'}>
                {status ?? '클래스 준비'}
              </Status>
            </TitleAndStatus>
            <DeleteButton tpye="button" onClick={e => handleDeleteClass(e, id)}>
              <Icon iconName={AiFillDelete} size={24} margin={0} />
            </DeleteButton>
          </Info>
          <Button color="black" bgColor="lightGray" tpye="button">
            자세히 보기
          </Button>
        </CardContent>
      </GotoEdit>
    </Container>
  );
};

export default ClassItem;

const DeleteButton = styled.button``;

const Status = styled.div`
  display: inline-block;
  padding: 8px;
  margin-top: 12px;
  color: ${props => {
    if (props.status === '클래스 준비') return '#fd3049';
    else if (props.status === '클래스 검토중') return '#ff9713';
    else if (props.status === '클래스 운영') return '#22bb20';
  }};
  border-radius: 3px;
  background-color: ${props => {
    if (props.status === '클래스 준비') return '#fff3f4';
    else if (props.status === '클래스 검토중') return '#fffbf3';
    else if (props.status === '클래스 운영') return '#f5fff3';
  }};
  font-size: ${props => props.theme.fontRegular};
  font-weight: ${props => props.theme.weightSemiBold};
`;

const Title = styled(CreatorStyled.SubTitleStyled)``;

const TitleAndStatus = styled.div``;

const Info = styled.div`
  ${props => props.theme.flex('row', 'flex-start', 'space-between')}
`;

const CardContent = styled.div`
  flex: 1 1 0%;
  ${props => props.theme.flex('column', '', 'space-between')}
`;

const GotoEdit = styled(Link)`
  ${props => props.theme.flex('row', '', '')}
`;

const Container = styled(CreatorStyled.listContainerStyled)`
  ${Button} {
    background-color: #c1c1c1;
  }
`;
