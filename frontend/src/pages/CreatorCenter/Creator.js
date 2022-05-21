import React from 'react';
import Layout from '../../styles/CreatorCentor/Layout';
import CreatorAside from '../Components/CreatorCentor/Creator/CreatorAside/CreatorAside';
import CreatorSection from '../Components/CreatorCentor/Creator/CreatorSection/CreatorSection';

const Creator = props => {
  return (
    <Layout>
      <Layout.Contents>
        <Layout.Section>
          <CreatorSection />
        </Layout.Section>
        <Layout.Aside>
          <CreatorAside />
        </Layout.Aside>
      </Layout.Contents>
    </Layout>
  );
};

export default Creator;
