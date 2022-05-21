import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
  max-width: 1200px;
  min-height: 920px;
  margin: 0 auto;
  padding: 100px 40px;
`;
const Header = styled.header``;
const Contents = styled.section`
  ${props => props.theme.flex('row', 'flex-start', 'center')}
`;
const Section = styled.section`
  flex: 7;
`;
const Aside = styled.aside`
  flex: 3;
  margin-left: 20px;
`;

const Layout = ({ children }) => <Main>{children}</Main>;
Layout.Header = Header;
Layout.Contents = Contents;
Layout.Section = Section;
Layout.Aside = Aside;

export default Layout;
