import React, { useRef, useState } from 'react';
import ProductCardList from '../../../components/ProductCard/ProductCardList';
import styled from 'styled-components';

import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from 'react-icons/md';

const SliderContainer = ({ productCardList }) => {
  const IMAGE_TRANSLATE_X = 262;
  const [index, setIndex] = useState(0);

  const slideRef = useRef(null);

  const NextSlide = () => {
    if (productCardList.length - 3 === index) {
      return;
    } else {
      slideRef.current.style.transform = `translateX(-${
        IMAGE_TRANSLATE_X * (index + 1)
      }px)`;
      setIndex(prev => prev + 1);
    }
  };

  const PrevSlide = () => {
    if (index === 0) {
      return;
    } else {
      slideRef.current.style.transform = `translateX(-${
        IMAGE_TRANSLATE_X * (index - 1)
      }px)`;
      setIndex(prev => prev - 1);
    }
  };

  return (
    <Container>
      <ArrowPosition>
        <ArrowFlex>
          <Left onClick={PrevSlide} />
          <Right onClick={NextSlide} />
        </ArrowFlex>
      </ArrowPosition>
      <Inner ref={slideRef}>
        <Card productCardList={productCardList} />
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  transition: transform 0.6s;
  overflow: hidden;
`;

const ArrowPosition = styled.div`
  position: relative;
  margin-bottom: 10px;
  z-index: 10;
`;

const Inner = styled.div`
  ${props => props.theme.flex('row', 'center', 'flex-start')};
  border-radius: ${props => props.theme.borderRadius4};
  transition: 0.6s;
`;

const ArrowFlex = styled.div`
  position: absolute;
  right: 0;
  ${props => props.theme.flex('row', 'center', 'flex-end')};
  color: ${props => props.theme.gray};
  font-size: 30px;
`;

const Right = styled(MdOutlineKeyboardArrowRight)`
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.black};
    transition: 0.5s;
  }
`;

const Left = styled(MdOutlineKeyboardArrowLeft)`
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.black};
    transition: 0.5s;
  }
`;

const Card = styled(ProductCardList)`
  display: flex;
  margin-right: 100px;
`;

export default SliderContainer;
