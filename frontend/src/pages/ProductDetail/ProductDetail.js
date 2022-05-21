import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import QuestSubmitButton from './QuestSubmitButton/QuestSubmitButton';
import Status from './Status/Status';
import HeartButton from './HeartButton/HeartButton';
import styled from 'styled-components';
import { API } from '../../config';

import { HiHeart, HiOutlineHeart } from 'react-icons/hi';
import { RiSendPlane2Line } from 'react-icons/ri';
import { GiHeartPlus, GiBookCover, GiCharm } from 'react-icons/gi';
import { FaPaintBrush } from 'react-icons/fa';
import { GrShare } from 'react-icons/gr';
import CommentArrayContainer from './CommentArray/CommentArray';
import Login from '../Login/Login';

const ProductDetail = ({ isLogin }) => {
  const params = useParams();
  const [comment, setComment] = useState('');
  const [creatorInfo, setCreatorInfo] = useState({});
  const [heart, setHeartRed] = useState();
  const [commentArray, setCommentArray] = useState([
    {
      id: 0,
      name: '',
      content: '',
    },
  ]);

  useEffect(() => {
    isLogin
      ? fetch(`${API.DETAIL_PAGE}/${params.id}`, {
          headers: {
            Authorization: localStorage.getItem('kakao_token'),
          },
        })
          .then(res => res.json())
          .then(data => {
            setCreatorInfo(data.results);
            setHeartRed(data.results.is_like_True);
          })
      : fetch(`${API.DETAIL_PAGE}/${params.id}`)
          .then(res => res.json())
          .then(data => {
            setCreatorInfo(data.results);
            setHeartRed(data.results.is_like_True);
          });
  }, [params.id]);

  useEffect(() => {
    fetch(`${API.PRODUCTS}/${params.id}/comments`)
      .then(res => res.json())
      .then(data => {
        setCommentArray(data.result);
      });
  }, [params.id]);

  const commentAdditional = e => {
    const { value } = e.target;
    setComment(value);
  };

  const {
    course_id,
    course_level,
    course_like,
    course_name,
    counrse_stat,
    description,
    is_like_True,
    payment_period,
    price,
    discount_price,
    discount_rate,
    profile_image,
    sub_category,
    thumbnail_url,
    user_name,
  } = creatorInfo;

  const isLikeyOnNumber = heart ? course_like + 1 : course_like;

  const onSubmitUserComment = e => {
    if (comment === '') {
      return;
    }

    isLogin
      ? fetch(`${API.PRODUCTS}/${params.id}/comments`, {
          method: 'POST',
          headers: {
            Authorization: localStorage.getItem('kakao_token'),
          },
          body: JSON.stringify({
            content: comment,
          }),
        })
          .then(res => res.json())
          .then(res => {
            setCommentArray(res.message);
            setComment('');
          })
      : alert('로그인이 필요합니다.');
  };

  const onRemoveComment = id => {
    isLogin
      ? fetch(`${API.PRODUCTS}/${params.id}/comments`, {
          method: 'DELETE',
          headers: {
            Authorization: localStorage.getItem('kakao_token'),
          },
          body: JSON.stringify({
            comment_id: id,
          }),
        })
          .then(res => res.json())
          .then(res => {
            if (res.message === 'SUCCESS_DELETE') {
              setCommentArray(commentArray.filter(user => user.id !== id));
            }
            if (res.message === 'INVAILD_COMMENT') {
              alert('일치하지 않은 아이디입니다.');
            }
          })
      : alert('로그인이 필요합니다.');
  };

  const isLikeyOnHandler = () => {
    isLogin
      ? fetch(`${API.LIKE}`, {
          method: 'POST',
          headers: {
            Authorization: localStorage.getItem('kakao_token'),
          },
          body: JSON.stringify({
            course_id: params.id,
          }),
        })
          .then(res => res.json())
          .then(res => {
            if (res.message === 'SUCCESS_LIKE') {
              setHeartRed(prev => !prev);
            }
            if (res.message === 'DELETE_LIKE') {
              setHeartRed(prev => !prev);
            }
          })
      : alert('로그인이 필요합니다.');
  };

  const addToCart = () => {
    isLogin
      ? fetch(`${API.PRODUCTS}/${params.id}/order`, {
          method: 'POST',
          headers: {
            Authorization: localStorage.getItem('kakao_token'),
          },
        })
          .then(res => res.json())
          .then(res => {
            if (res.message === 'SUCCESS') {
              alert('결제가 완료되었습니다.');
            }
          })
      : alert('로그인이 필요합니다.');
  };

  return (
    <ProductDetailContanier>
      <TopImageWrap>
        <Image src={`http://${thumbnail_url}`} />
      </TopImageWrap>
      <FlexWrap>
        <FlexLeft>
          <DetailNavContainer>
            <NavListWrap>
              <List>크리에이터</List>
              <List>커뮤니티</List>
              <List>환불정책</List>
            </NavListWrap>
          </DetailNavContainer>

          <CreatorContainer>
            <CreatorWrap>
              <div>
                <CreatorName>크리에이터</CreatorName>
                {!!user_name && (
                  <CreatorName>
                    <CreatorNameBold>{user_name}</CreatorNameBold>
                    입니다.
                  </CreatorName>
                )}
              </div>
              <div>
                {profile_image && <CreatorProfile src={profile_image} />}
              </div>
            </CreatorWrap>
            <MiddleLine />
            {description && (
              <CreatorDescription>{description}</CreatorDescription>
            )}
            <MiddleLine />
          </CreatorContainer>

          <CommunityContainer>
            <CommunityTitle>커뮤니티</CommunityTitle>
            <CommentSum>{`${commentArray.length}개의 댓글`}</CommentSum>
          </CommunityContainer>
          <CommentArrayContainer
            commentArray={commentArray}
            onRemoveComment={onRemoveComment}
          />
          <CommentInputWrap onSubmit={onSubmitUserComment}>
            <CommentInput value={comment} onChange={commentAdditional} />
            <CommnetSubmit onClick={onSubmitUserComment} type="button" />
          </CommentInputWrap>

          <MiddleLine />
          <RefundPolicyTitle>환불 정책</RefundPolicyTitle>
          <RefundPolicyText>
            환불 정책에 따라 구매일로부터 90일까지 환불 요청이 가능하며,
            <RefundDay> 7일 까지 </RefundDay>
            전액 환불이 가능합니다.
          </RefundPolicyText>
          <MiddleLine />
        </FlexLeft>

        <RightApplicationContainer>
          {sub_category ? <Category>{sub_category}</Category> : null}
          {course_name ? <Title>{course_name}</Title> : null}
          {payment_period ? (
            <Installment>{payment_period}개월 할부</Installment>
          ) : null}
          <PriceContainer>
            <InstallmentPrice>할부 할인가</InstallmentPrice>
            <PriceWrap>
              {discount_rate ? <Percent>{discount_rate}%</Percent> : null}
              {price ? (
                <Price>월 {Math.round(price * 100) / 100}원</Price>
              ) : null}
            </PriceWrap>
          </PriceContainer>
          <GrayLine />
          <DiscountWrap>
            <TotalDiscount>총 할인액</TotalDiscount>
            {discount_price ? (
              <TotalDiscountPrice>
                -{Math.round(discount_price * 100) / 100}원
              </TotalDiscountPrice>
            ) : null}
          </DiscountWrap>
          <GrayLine />
          <StatusWrap>
            <Status
              status="체력"
              icon={<GiHeartPlus />}
              number={creatorInfo.health_stat}
            />
            <Status
              status="지능"
              icon={<GiBookCover />}
              number={creatorInfo.intellect_stat}
            />
          </StatusWrap>
          <StatusWrap>
            <Status
              status="매력"
              icon={<GiCharm />}
              number={creatorInfo.charm_stat}
            />
            <Status
              status="예술"
              icon={<FaPaintBrush />}
              number={creatorInfo.art_stat}
            />
          </StatusWrap>
          <GrayLine />
          <HeartButtonContainer>
            <label>
              <HeartButtonCheckbox onClick={isLikeyOnHandler} />
              <HeartButton
                number={isLikeyOnNumber ? isLikeyOnNumber : 0}
                icon={heart ? <Heart /> : <HeartOutline />}
                onClick={isLikeyOnHandler}
              />
            </label>
            <HeartButton text="공유하기" icon={<GrShare />} />
          </HeartButtonContainer>
          <QuestSubmitButton addToCart={addToCart} />
        </RightApplicationContainer>
      </FlexWrap>
    </ProductDetailContanier>
  );
};

const ProductDetailContanier = styled.div`
  width: 1100px;
  margin: ${props => props.theme.marginCenter};
`;

const TopImageWrap = styled.div`
  width: 100%;
  margin: ${props => props.theme.marginCenter};
`;

const Image = styled.div`
  height: 740px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
`;

const FlexWrap = styled.div`
  ${props => props.theme.flex('row', 'flex-start', 'space-between')}
  padding-top: 25px;
`;

const FlexLeft = styled.div`
  width: 730px;
`;

const DetailNavContainer = styled.div`
  width: 730px;
`;

const CreatorContainer = styled.div`
  width: 730px;
`;

const CreatorWrap = styled.div`
  ${props => props.theme.flex('row', 'flex-start', 'space-between')};
  margin-top: 30px;
`;

const CreatorName = styled.h3`
  font-size: ${props => props.theme.fontLarge};
  line-height: 30px;
`;

const CreatorNameBold = styled.span`
  font-weight: ${props => props.theme.weightBold};
`;

const CreatorProfile = styled.img.attrs({
  alt: '프로필',
})`
  width: 64px;
  height: 64px;
  border-radius: 32px;
`;

const MiddleLine = styled.div`
  margin: 20px 0;
  border: 1px solid ${props => props.theme.lightGray};
`;

const CreatorDescription = styled.p`
  margin: 30px 0;
  font-size: ${props => props.theme.fontSemiMedium};
  line-height: 24px;
`;

const CommunityContainer = styled.div`
  margin-top: 30px;
`;
const CommunityTitle = styled.h1`
  display: inline-block;
  font-weight: ${props => props.theme.weightBold};
  font-size: ${props => props.theme.fontLarge};
`;

const CommentSum = styled.span`
  margin-left: 10px;
  color: ${props => props.theme.gray};
  font-size: ${props => props.theme.fontRegular};
`;

const NavListWrap = styled.ul`
  display: flex;
  border-bottom: ${props => props.theme.borderGray};
`;

const List = styled.li`
  padding: 14px 0px 14px;
  margin-right: 24px;
  color: ${props => props.theme.gray};
  font-size: ${props => props.theme.fontRegular};
`;

const CommentInputWrap = styled.form`
  ${props => props.theme.flex(('row', 'center', 'space-between'))};
  margin: 15px 0 30px 0;
  border: ${props => props.theme.borderGray};
  border-radius: 30px;
  background-color: ${props => props.theme.white};
`;

const CommentInput = styled.input.attrs({
  type: `text`,
  placeholder: `댓글을 입력해주세요.`,
})`
  width: 100%;
  padding: 15px;
  margin-left: 20px;
  font-size: ${props => props.theme.fontRegular};
`;

const CommnetSubmit = styled(RiSendPlane2Line)`
  margin-right: 20px;
  color: ${props => props.theme.mediumGray};
  font-size: 23px;
  cursor: pointer;
`;

const RefundPolicyTitle = styled.h1`
  display: inline-block;
  font-weight: ${props => props.theme.weightBold};
  font-size: ${props => props.theme.fontLarge};
`;

const RefundPolicyText = styled.p`
  margin-top: 20px;
  padding: 25px 0 25px 20px;
  background-color: ${props => props.theme.lightGray};
  font-size: ${props => props.theme.fontRegular};
`;

const RefundDay = styled.span`
  color: ${props => props.theme.orange};
`;

const RightApplicationContainer = styled.div`
  width: 285px;
  padding: 24px;
  border-radius: 3px;
  box-shadow: rgb(41 42 43 / 16%) 0px 2px 6px;
`;

const Category = styled.p`
  margin-bottom: 5px;
  font-size: ${props => props.theme.fontRegular};
  line-height: 20px;
`;

const Title = styled.h1`
  margin-bottom: 10px;
  font-size: ${props => props.theme.fontMedium};
  font-weight: ${props => props.theme.weightBold};
  line-height: 25px;
`;

const Installment = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 15px 0 10px 0;
  color: ${props => props.theme.gray};
  font-size: ${props => props.theme.fontMicro};
`;

const PriceContainer = styled.div`
  ${props => props.theme.flex('row', 'center', 'space-between')};
`;

const InstallmentPrice = styled.p`
  font-size: ${props => props.theme.fontRegular};
`;

const PriceWrap = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Percent = styled.p`
  margin-right: 5px;
  font-size: ${props => props.theme.fontSemiMedium};
`;

const Price = styled.p`
  font-weight: ${props => props.theme.weightBold};
  font-size: ${props => props.theme.fontMedium};
  letter-spacing: -0.5px;
`;

const GrayLine = styled.div`
  margin: 20px 0;
  border: 1px solid ${props => props.theme.lightGray};
`;

const DiscountWrap = styled.div`
  ${props => props.theme.flex('row', 'center', 'space-between')};
`;

const TotalDiscount = styled.p`
  color: ${props => props.theme.red};
  font-size: ${props => props.theme.fontRegular};
`;

const TotalDiscountPrice = styled.h1`
  color: ${props => props.theme.red};
  font-size: ${props => props.theme.fontMedium};
  font-weight: 900;
  letter-spacing: -0.5px;
`;

const StatusWrap = styled.div`
  display: flex;
  margin: 20px 0;
`;

const HeartButtonContainer = styled.div`
  ${props => props.theme.flex('row', 'center', 'space-between')};
  width: 90%;
  margin: 20px auto;
`;

const Heart = styled(HiHeart)`
  color: red;
  font-size: 22px;
`;

const HeartOutline = styled(HiOutlineHeart)`
  font-size: 20px;
`;

const HeartButtonCheckbox = styled.input.attrs({
  type: 'checkbox',
})`
  display: none;
`;

export default ProductDetail;
