import React, { useEffect, useState } from 'react';
import UserRank from './UserRank/UserRank';
import SliderContainer from './SliderContainer/SliderContainer';

import styled from 'styled-components';
import { SiMessenger } from 'react-icons/si';
import { API } from '../../config';

const MyPage = () => {
  const [status, setStatus] = useState({});
  const [productCardList, setProductCardList] = useState([]);
  const [purchaseList, setPurchaseList] = useState([]);

  useEffect(() => {
    fetch('/data/productData.json')
      .then(res => res.json())
      .then(data => {
        setProductCardList(data.results);
        setPurchaseList(data.purchaseList);
      });
  }, []);

  useEffect(() => {
    fetch(API.MYPAGE, {
      headers: {
        Authorization: localStorage.getItem('kakao_token'),
      },
    })
      .then(res => res.json())
      .then(data => setStatus(data.result));
  }, []);

  const name = status?.user_stat?.name;
  const { like_course, running_course, user_stat } = status;

  return (
    <MyPageContainer>
      <UserWrap>
        <UserWrapFlex>
          <UserName>{name}</UserName>
          <UserMessageIcon />
        </UserWrapFlex>
      </UserWrap>
      <DisplayFlex>
        <UserRank stats={user_stat} />
        <UserHistoryWrap>
          <UserWishListContainer>
            <WishListTitle>찜한 상품</WishListTitle>
            <SliderContainer productCardList={like_course} />
          </UserWishListContainer>
          <PurchaseListContainer>
            <PurchaseListTitle>구매 목록</PurchaseListTitle>
            <SliderContainer productCardList={running_course} />
          </PurchaseListContainer>
        </UserHistoryWrap>
      </DisplayFlex>
    </MyPageContainer>
  );
};

const MyPageContainer = styled.div`
  width: 1100px;
  margin: ${props => props.theme.marginCenter};
`;

const UserWrap = styled.div`
  margin: 75px 0 50px 0;
`;

const UserWrapFlex = styled.div`
  ${props => props.theme.flex('row', 'center', 'flex-start')};
`;

const UserName = styled.p`
  font-size: 30px;
  font-weight: ${props => props.theme.weightBold};
`;

const UserMessageIcon = styled(SiMessenger)`
  margin-left: 5px;
  color: ${props => props.theme.orange};
`;

const UserEmail = styled.p`
  margin-top: 8px;
  color: ${props => props.theme.gray};
  font-size: ${props => props.theme.fontRegular};
`;

const DisplayFlex = styled.div`
  ${props => props.theme.flex('row', 'flex-start', 'space-between')}
`;

const UserHistoryWrap = styled.div`
  margin: 0px 0px 70px 70px;
`;

const UserWishListContainer = styled.div`
  width: 750px;
`;

const WishListTitle = styled.p`
  font-size: ${props => props.theme.fontMedium};
  font-weight: ${props => props.theme.weightBold};
`;

const PurchaseListContainer = styled.div`
  width: 750px;
  margin-top: 50px;
`;

const PurchaseListTitle = styled.p`
  font-size: ${props => props.theme.fontMedium};
  font-weight: ${props => props.theme.weightBold};
`;

export default MyPage;
