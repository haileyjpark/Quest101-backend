import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { kakaoLogin } from '../../service/kakaoAPI';

const Login = ({ isLogin, setIsLogin }) => {
  const navigate = useNavigate();

  const handleKakaoLogin = () => {
    kakaoLogin(navigate, setIsLogin);
  };

  return (
    <Main>
      <SectionContainer>
        <Header>
          <Link to="/">QUEST101</Link>
          <LanguageButton>🇰🇷 한국어</LanguageButton>
        </Header>
        <LoginForm>
          <LoginTitle>
            나를 키우는 현실 캐릭터
            <br /> 빌드업 퀘스트
          </LoginTitle>
          <KakaoLoginButton onClick={handleKakaoLogin}>
            <LoginButtonKakaoIcon />
            <LoginButtonText>카카오 로그인</LoginButtonText>
          </KakaoLoginButton>
        </LoginForm>
      </SectionContainer>
      <BackgroundImageContainer />
    </Main>
  );
};

export default Login;

const Main = styled.main`
  ${props => props.theme.flex('row', 'center', 'space-between')}
`;

const SectionContainer = styled.section`
  position: relative;
  ${props => props.theme.flex('column', 'center', 'space-between')}
  flex: 0.88 1 0%;
  height: 100vh;
`;

const BackgroundImageContainer = styled(SectionContainer)`
  flex: 1 1 0%;
  background-image: url('images/login-background.jpeg');
  background-size: cover;
`;

const Header = styled.h1`
  ${props => props.theme.flex('row', 'center', 'space-between')}
  position: absolute;
  right: 0;
  left: 0;
  max-width: 376px;
  margin: 0 auto;
  padding: 81px 24px 0;
  font-weight: ${props => props.theme.weightBold};
`;

const LanguageButton = styled.button.attrs({ type: 'button' })`
  display: inline-block;
`;

const LoginForm = styled.div`
  ${props => props.theme.flex('column', 'center', 'center')}
  flex: 1 1 0%;
  padding: 24px;
`;

const LoginTitle = styled.h2`
  min-width: 376px;
  margin-bottom: 40px;
  font-size: ${props => props.theme.fontExtraLarge};
  font-weight: ${props => props.theme.weightBold};
  line-height: 1.6;
`;

const KakaoLoginButton = styled.button.attrs({ type: 'button' })`
  ${props => props.theme.flex('row', 'center', 'center')}
  width: 100%;
  height: 48px;
  border-radius: 3px;
  background-color: #fee500;
  color: rgba(0, 0, 0, 0.85);

  &:hover {
    background-color: #fed830;
  }
`;

const LoginButtonKakaoIcon = styled.img.attrs({
  src: 'images/kakaotalk-symbol.png',
})`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

const LoginButtonText = styled.span`
  line-height: 48px;
  font-size: ${props => props.theme.fontSemiMedium};
  font-weight: ${props => props.theme.weightBold};
`;
