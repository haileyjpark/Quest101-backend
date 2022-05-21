import React from 'react';
import styled from 'styled-components';
import CoverMedias from './CoverMedias';

import * as CreatorStyled from '../../../../../../../../styles/CreatorCentor/CreatorStyled';
import CoverImageUpLoadBox from './CoverImageUpLoadBox';

const CoverGalleryForm = ({
  coverImage,
  detail_media,
  register,
  setCoverMediaImages,
  setCoverImage,
}) => {
  return (
    <Container>
      <CoverImageUpLoadBox
        coverImage={coverImage}
        register={register}
        setCoverImage={setCoverImage}
      />
      <MediaContainer>
        <Label>커버 갤러리</Label>
        <Description>
          페이지 상단 커버 영역에 사용할 이미지 또는 영상을 1개 이상
          추가해주세요.
        </Description>
        <CoverMedias
          register={register}
          detail_media={detail_media}
          setCoverMediaImages={setCoverMediaImages}
        />
      </MediaContainer>
    </Container>
  );
};

export default CoverGalleryForm;

const Description = styled(CreatorStyled.DescriptionStyled)``;

const Label = styled(CreatorStyled.FormLabelStyled)`
  ${props => props.theme.flex('column', '', '')};
  margin-top: 28px;
`;

const MediaContainer = styled.div``;

const Container = styled.div`
  ${props => props.theme.flex('column', '', '')};
`;
