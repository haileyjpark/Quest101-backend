import { useState } from 'react';
import styled from 'styled-components';

export const ThumbnailImgageBase = styled.div`
  width: 268px;
  height: 182px;
  padding: 20px 40px;
  border-radius: ${props => props.theme.borderRadius4};
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
`;

export const ThumbnailBoxStyled = styled.div`
  margin-right: 20px;
  border: ${props => props.theme.borderGray};
  border-radius: ${props => props.theme.borderRadius4};
`;

export const ThumbnailBasicBox = ({ src, visibility }) => {
  const [thumbImage, setThumbImage] = useState(
    src
      ? src.match(/haileysbucket+/)
        ? `http://${src}`
        : src
      : '/images/photo-edit-cover.svg'
  );
  return (
    <ThumbnailBoxStyled>
      <ThumbnailImgageBase src={thumbImage} />
    </ThumbnailBoxStyled>
  );
};
