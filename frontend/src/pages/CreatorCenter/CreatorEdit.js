import React from 'react';
import Layout from '../../styles/CreatorCentor/Layout';

import CreatorEditSection from '../Components/CreatorCentor/CreatorEdit/CreatorEditSection/CreatorEditSection';
import CreatorEditAside from '../Components/CreatorCentor/CreatorEdit/CreatorEditAside/CreatorEditAside';
import CreatorEditHeader from '../Components/CreatorCentor/CreatorEdit/CreatorEditHeader/CreatorEditHeader';

const Creator = props => {
  return (
    <Layout>
      <Layout.Header>
        <CreatorEditHeader />
      </Layout.Header>
      <Layout.Contents>
        <Layout.Section>
          <CreatorEditSection />
        </Layout.Section>
        <Layout.Aside>
          <CreatorEditAside />
        </Layout.Aside>
      </Layout.Contents>
    </Layout>
  );
};

export default Creator;
