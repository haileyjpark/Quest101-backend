import React from 'react';
import Chart from './UserChart/UserChart';
import Status from './Status/Status';
import styled from 'styled-components';

import { GiHeartPlus, GiBookCover, GiCharm } from 'react-icons/gi';
import { FaPaintBrush } from 'react-icons/fa';

const UserRank = ({ stats }) => {
  return (
    <UserRankContainer>
      <RankTitle>내 등급</RankTitle>
      <RankWrap>
        <Rank>Lv. 입문</Rank>
        <Chart stats={stats?.stat} />
        <StatusText>Status</StatusText>
        <StatusWrap>
          <Status status="체력" icon={<GiHeartPlus />} />
          <Status status="지능" icon={<GiBookCover />} />
          <Status status="매력" icon={<GiCharm />} />
          <Status status="예술" icon={<FaPaintBrush />} />
        </StatusWrap>
      </RankWrap>
    </UserRankContainer>
  );
};

const UserRankContainer = styled.div`
  width: 340px;
`;

const RankTitle = styled.p`
  font-size: ${props => props.theme.fontMedium};
  font-weight: ${props => props.theme.weightBold};
`;

const RankWrap = styled.div`
  height: 238px;
  margin: 38px 0;
  padding: 0 25px;
  border-radius: ${props => props.theme.borderRadius4};
  background-color: #00af31;
`;

const Rank = styled.p`
  padding: 25px 0 20px 0;
  color: ${props => props.theme.white};
  font-size: ${props => props.theme.fontMedium};
  font-weight: ${props => props.theme.weightBold};
`;

const StatusText = styled.p`
  display: inline-block;
  position: relative;
  top: -3px;
  color: ${props => props.theme.white};
  font-weight: ${props => props.theme.fontMedium};
  opacity: 0.5;
`;

const StatusWrap = styled.div`
  position: relative;
  top: -25px;
  width: 150px;
  ${props => props.theme.flex('row', 'center', 'flex-start')};
  margin: 0 0px 0 67px;
`;

export default UserRank;
