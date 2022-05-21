import React, { useRef, useState } from 'react';

import styled from 'styled-components';
import HelperBox from '../../../../../share/Helper';

export const CoverUpLoadBoxStyled = styled.div`
  flex: 1;
  position: relative;
  height: 260px;
  border: ${props => props.theme.borderGray};
  border-radius: ${props => props.theme.borderRadius4};
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
`;

const CoverImageUpLoadBox = ({ coverImage, register, setCoverImage }) => {
  const [thumbImage, setThumbImage] = useState(
    coverImage
      ? coverImage.match(/haileysbucket+/)
        ? `http://${coverImage}`
        : coverImage
      : '/images/photo-edit-cover.svg'
  );

  const coverImageRef = useRef(null);
  const { ref, ...rest } = register('coverImageRef');

  const handleUpLoadMedia = e => {
    if (!!coverImageRef.current.value) {
      const srcURL = URL.createObjectURL(e.target.files[0]);
      const src = e.target.files[0];
      const type = e.target.files[0].type;
      setThumbImage(srcURL);
      setCoverImage(prev => e.target.files[0]);
    }
  };

  return (
    <Container>
      <CoverUpLoadBoxStyled
        onClick={() => {
          coverImageRef.current.click();
        }}
        bgImage={thumbImage}
        display={thumbImage ? 'none' : 'inline-block'}
      >
        <ImageInputButton
          name="coverImageRef"
          {...rest}
          ref={e => {
            ref(e);
            coverImageRef.current = e;
          }}
          onChange={handleUpLoadMedia}
        />
      </CoverUpLoadBoxStyled>
      <HelperBox />
    </Container>
  );
};

export default CoverImageUpLoadBox;

const ImageInputButton = styled.input.attrs({
  type: 'file',
  accept: 'image/*',
})`
  display: none;
  height: 100px;
`;

const Container = styled.div`
  ${props => props.theme.flex('row', 'flex-start', 'space-between')};
`;
