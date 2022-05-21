import React from 'react';
import { useLocation } from 'react-router-dom';

import { FOOTER_DATA_LIST_1, FOOTER_DATA_LIST_2 } from './footerData';
import usePathValid from '../hooks/usePathValid';
import { kakaoBreakConnection } from '../../service/kakaoAPI';
import styled from 'styled-components';

const Footer = ({ isLogin, setIsLogin }) => {
  const { pathname } = useLocation();

  const [isNavPathVaild] = usePathValid(pathname);

  const handleKakaoDisconnect = () => {
    kakaoBreakConnection(setIsLogin);
  };

  return (
    isNavPathVaild && (
      <FooterContainer>
        <FooterWrapper>
          <div>
            <MainLogo>QUEST101</MainLogo>
            <Description>
              퀘스트101은 클래스를 통해 자신을 키우는
              <br /> 현실 캐릭터 빌드업 서비스 사이트입니다.
            </Description>
            <DescriptionStore>🇰🇷 한국어/ 한국 스토어</DescriptionStore>
          </div>
          <div>
            <Title>퀘스트101</Title>
            <ul>
              {FOOTER_DATA_LIST_1.map(data => {
                return <List key={data.id}>{data.value}</List>;
              })}
            </ul>
          </div>

          <div>
            <Title>크리에이터</Title>
            <ul>
              {FOOTER_DATA_LIST_2.map(data => {
                return <List key={data.id}>{data.value}</List>;
              })}
            </ul>
          </div>

          <div>
            <Title>고객센터</Title>
            <Button>문의하기</Button>
            <P>오전 10시 ~ 오후 6시 (주말, 공휴일 제외)</P>
            <Button onClick={handleKakaoDisconnect}>카카오 계정연결해제</Button>
          </div>
        </FooterWrapper>
      </FooterContainer>
    )
  );
};

export default Footer;

const FooterContainer = styled.footer`
  bottom: 0;
  padding: 40px;
  border-top: 1px solid ${props => props.theme.mediumGray};
`;

const FooterWrapper = styled.div`
  ${props => props.theme.flex('row', 'start', 'space-between')};
  width: 1100px;
  margin: 0 auto;
  padding: 20px 0;
  color: ${props => props.theme.black};
`;

const MainLogo = styled.h2`
  font-size: ${props => props.theme.fontLarge};
  font-weight: ${props => props.theme.weightBold};
`;

const Description = styled.p`
  color: ${props => props.theme.gray};
  font-size: ${props => props.theme.fontRegular};
  line-height: 20px;
  padding: 20px 0;
`;

const DescriptionStore = styled.button`
  font-size: ${props => props.theme.fontRegular};
`;

const Title = styled.h6`
  font-size: ${props => props.theme.fontMedium};
  font-weight: ${props => props.theme.weightBold};
`;

const List = styled.li`
  padding-top: 25px;
  font-size: ${props => props.theme.fontRegular};
  cursor: pointer;
`;

const Button = styled.button`
  width: 260px;
  height: 40px;
  margin: 10px 0;
  background-color: ${props => props.theme.lightGray};
  border-radius: 3px;
  font-weight: ${props => props.theme.weightBold};
  font-size: ${props => props.theme.fontRegular};
`;

const P = styled.p`
  ${props => props.theme.flex('row', 'center', 'center')};
  padding: 4px 0 18px;
  color: ${props => props.theme.gray};
  font-size: ${props => props.theme.fontRegular};
`;
