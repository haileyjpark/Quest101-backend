import React, { useRef, useState } from 'react';

import { Icon } from '../../../../../share/Icon';

import styled from 'styled-components';
import { BiMenu } from 'react-icons/bi';

export const CoverUpLoadBoxStyled = styled.div`
  ${props => props.theme.flex('column', 'center', 'center')};
  position: relative;
  width: 100%;
  height: 240px;
  border: ${props => props.theme.borderGray};
  border-radius: ${props => props.theme.borderRadius4};
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
`;

const MediaUpLoadBox = ({ coverMedia, register, setCoverMediaImages }) => {
  const [thumbImage, setThumbImage] = useState(
    coverMedia?.url
      ? coverMedia.url.match(/haileysbucket+/)
        ? `http://${coverMedia.url}`
        : coverMedia.url
      : '/images/photo-edit-cover-mediea.svg'
  );

  const coverMediaRef = useRef(null);
  const { ref, ...rest } = register('coverMediaRef');

  const handleUpLoadMedia = e => {
    if (!!coverMediaRef.current.value) {
      const src = URL.createObjectURL(e.target.files[0]);
      setCoverMediaImages(prev => [...prev, e.target.files[0]]);
      setThumbImage(src);
    }
    return;
  };

  return (
    <CoverUpLoadBoxStyled
      onClick={() => {
        coverMediaRef.current.click();
      }}
      bgImage={thumbImage}
    >
      <ThumbnailBasicBox
        src="/images/photo-edit-cover.png"
        display={thumbImage ? 'none' : 'inline-block'}
      />
      <DragIcon iconName={BiMenu} size={18} margin="8px" />
      <ImageInputButton
        {...rest}
        name="coverMediaRef"
        ref={e => {
          ref(e);
          coverMediaRef.current = e;
        }}
        onChange={handleUpLoadMedia}
      />
    </CoverUpLoadBoxStyled>
  );
};

export default MediaUpLoadBox;

const ThumbnailBasicImage = styled.img`
  display: ${props => props.display};
  width: 72px;
  height: 72px;
  margin: 32px;
`;

const ThumbnailBoxStyled = styled.div``;

const ThumbnailBasicBox = ({ src, size, display }) => (
  <ThumbnailBoxStyled>
    <ThumbnailBasicImage src={src} display={display} />
  </ThumbnailBoxStyled>
);

const ImageInputButton = styled.input.attrs({
  type: 'file',
  accept: 'image/*',
})`
  display: none;
`;

const DragIcon = styled(Icon)`
  position: absolute;
  top: 0;
  left: 0;
`;
