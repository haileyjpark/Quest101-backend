import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import usePathValid from '../hooks/usePathValid';
import styled from 'styled-components';
import { MdKeyboardArrowDown } from 'react-icons/md';

const CreatorNav = () => {
  const { pathname } = useLocation();
  const [, isCreatorNavPathVaild] = usePathValid(pathname);
  return (
    isCreatorNavPathVaild && (
      <Nav>
        <Logos>
          <Link to="/">
            <LogoIcon src="/images/101-logo.svg" alt="메인 페이지 이동" />
          </Link>
          <Link to="/creator">
            <LogoIcon
              src="/images/101-creator-logo.svg"
              alt="크리에이터 페이지 이동"
            />
          </Link>
        </Logos>
        <Menus>
          <MenuItem>
            <Link to="/">소개</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/">크리에이터 가이드</Link>
          </MenuItem>
          <MenuItem>
            <ProfileMenuButton>
              <ProfileIcon src="/images/profile.svg" alt="프로필 이미지" />
              <ProfileMenuMoreIcon />
            </ProfileMenuButton>
          </MenuItem>
        </Menus>
      </Nav>
    )
  );
};

export default CreatorNav;

const Nav = styled.nav`
  ${props => props.theme.positionFixed};
  ${props => props.theme.flex('row', 'center', 'space-between')}
  width: 100%;
  padding: 14px 24px;
  border-bottom: ${props => props.theme.borderGray};
  background-color: ${props => props.theme.white};
`;

const Logos = styled.div`
  ${props => props.theme.flex()}
`;

const LogoIcon = styled.img`
  height: 32px;
  margin: 0 2px;
`;

const Menus = styled.ul`
  ${props => props.theme.flex()}
`;

const MenuItem = styled.li`
  margin-left: 16px;
`;

const ProfileIcon = styled(LogoIcon)``;

const ProfileMenuButton = styled.button`
  ${props => props.theme.flex()}
`;

const ProfileMenuMoreIcon = styled(MdKeyboardArrowDown)`
  width: 24px;
  height: 24px;
`;
