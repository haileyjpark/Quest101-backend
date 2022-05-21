import React from 'react';
import styled from 'styled-components';

const RefundPolicy = () => {
  return (
    <div>
      <MiddleLine />
      <RefundPolicyTitle>환불 정책</RefundPolicyTitle>
      <RefundPolicyText>
        환불 정책에 따라 구매일로부터 90일까지 환불 요청이 가능하며,
        <RefundDay> 7일 까지 </RefundDay>
        전액 환불이 가능합니다.
      </RefundPolicyText>
      <MiddleLine />
    </div>
  );
};

const RefundPolicyTitle = styled.h1`
  display: inline-block;
  font-weight: ${props => props.theme.weightBold};
  font-size: ${props => props.theme.fontLarge};
`;

const MiddleLine = styled.div`
  margin: 30px 0;
  border: 1px solid ${props => props.theme.lightGray};
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

export default RefundPolicy;
