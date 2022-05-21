import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API } from '../../config';
import HeartButton from './HeartButton/HeartButton';
import { HiHeart, HiOutlineHeart } from 'react-icons/hi';
import styled from 'styled-components';
import { Tooltip } from 'chart.js';

const ProductCardItem = ({ productCardInfo }) => {
  const [like, setLike] = useState(productCardInfo.is_like_True);
  const [price, setPrice] = useState(productCardInfo.is_like_True);
  const [src, setSrc] = useState('');
  const [period, setPeriod] = useState(0);
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (productCardInfo.thumbnail)
      setSrc(`http://${productCardInfo.thumbnail}`);
    else if (productCardInfo.like_thumbnail)
      setSrc(`http://${productCardInfo.like_thumbnail}`);
    else if (productCardInfo.running_thumbnail)
      setSrc(`http://${productCardInfo.running_thumbnail}`);

    if (productCardInfo.discount_price)
      setPrice(productCardInfo.discount_price);
    else if (productCardInfo.like_price) setPrice(productCardInfo.like_price);
    else if (productCardInfo.running_price)
      setPrice(productCardInfo.running_price);

    if (productCardInfo.discount_period)
      setPeriod(productCardInfo.discount_period);
    else if (productCardInfo.like_period)
      setPeriod(productCardInfo.like_period);
    else if (productCardInfo.running_period)
      setPeriod(productCardInfo.running_period);

    if (productCardInfo.course_name) setTitle(productCardInfo.course_name);
    else if (productCardInfo.like_name) setTitle(productCardInfo.like_name);
    else if (productCardInfo.running_name)
      setTitle(productCardInfo.running_name);
  }, []);

  const isLikeyOnNumber = like
    ? productCardInfo.course_like + 1
    : productCardInfo.course_like;

  const isLikeyOnHandler = () => {
    fetch(`${API.LIKE}`, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('kakao_token'),
      },
      body: JSON.stringify({
        course_id: productCardInfo.course_id,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'SUCCESS_LIKE') {
          setLike(prev => !prev);
        }
        if (res.message === 'DELETE_LIKE') {
          setLike(prev => !prev);
        }
      });
  };

  return (
    <Container key={productCardInfo.course_id}>
      <ThumbnailWrapper>
        <Link to={`/detail/${productCardInfo.course_id}`}>
          <Thumbnail src={src} />
        </Link>
        <LikeButtonWrapper>
          <label>
            <HeartButtonCheckbox onClick={isLikeyOnHandler} />
            <HeartButton
              icon={like ? <LikeIcon /> : <DisLikeIcon />}
              onClick={isLikeyOnHandler}
            />
          </label>
        </LikeButtonWrapper>
      </ThumbnailWrapper>
      <Link to={`/detail/${productCardInfo.course_id}`}>
        <Container>
          <UserName>{productCardInfo.user_name}</UserName>
          <CourseName>{title}</CourseName>
          <LikeCountWrapper>
            <LikeCountIcon />
            <LikeCount>{productCardInfo.course_like}</LikeCount>
          </LikeCountWrapper>
          <PriceWrapper>
            <RateDiscount>
              {productCardInfo.discount_rate
                ? `${productCardInfo.discount_rate}%`
                : ''}
            </RateDiscount>
            <Price>월 {Number(Math.round(price)).toLocaleString()}원</Price>
            <PaymentPeriod>&#40;{period}개월&#41;</PaymentPeriod>
          </PriceWrapper>
        </Container>
      </Link>
    </Container>
  );
};

export default ProductCardItem;

const Container = styled.div`
  width: 250px;
  color: ${props => props.theme.black};
  padding-right: 15px;
  margin-right: 15px;
`;

const LikeButtonWrapper = styled.button`
  position: absolute;
  top: 40px;
  right: 0px;
  z-index: 1;
`;

const LikeIcon = styled(HiHeart)`
  color: red;
  font-size: 24px;
`;

const DisLikeIcon = styled(HiOutlineHeart)`
  font-size: 24px;
  color: ${props => props.theme.white};
`;

const ThumbnailWrapper = styled.div`
  position: relative;
`;
const Thumbnail = styled.img`
  width: 250px;
  height: 200px;
  margin-top: 30px;
  border-radius: ${props => props.theme.borderRadius4};
  object-fit: cover;
`;
const UserName = styled.h5`
  font-size: ${props => props.theme.fontMicro};
  font-weight: ${props => props.theme.weightBold};
  margin: 5px 0;
`;
const CourseName = styled.h3`
  padding: 4px 0 8px 0;
  height: 40px;
  line-height: 18px;
  font-size: ${props => props.theme.fontRegular};
`;
const LikeCountWrapper = styled.div`
  border-bottom: 1px solid ${props => props.theme.lightGray};
  padding-bottom: 8px;
`;
const LikeCountIcon = styled(HiHeart)`
  color: ${props => props.theme.gray};
  font-size: 12px;
  margin-right: 2px;
`;
const LikeCount = styled.span`
  color: ${props => props.theme.gray};
  font-size: 12px;
`;
const PriceWrapper = styled.div`
  ${props => props.theme.flex('', 'center', '')}
  padding-top: 15px;
`;
const RateDiscount = styled.p`
  font-size: 13px;
  font-weight: ${props => props.theme.weightBold};
  color: ${props => props.theme.orange};
`;
const Price = styled.p`
  font-size: ${props => props.theme.fontRegular};
  font-weight: ${props => props.theme.weightBold};
  color: ${props => props.theme.black};
  padding: 0 5px;
`;
const PaymentPeriod = styled.p`
  font-size: ${props => props.theme.fontMicro};
  color: ${props => props.theme.gray};
`;

const HeartButtonCheckbox = styled.input.attrs({
  type: 'checkbox',
})`
  display: none;
`;
