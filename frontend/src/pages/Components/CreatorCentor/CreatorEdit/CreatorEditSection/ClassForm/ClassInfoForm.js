import React from 'react';

import CollapsibleBox from '../../Collapsible/CollapsibleBox';

import styled from 'styled-components';
import * as CreatorStyled from '../../../../../../styles/CreatorCentor/CreatorStyled';

const ClassInfoForm = ({ collapsibleData, projectData }) => (
  <Container>
    <Title>{collapsibleData.title}</Title>
    {collapsibleData.data.map(data => {
      return (
        <CollapsibleBox key={data.id} data={data} projectData={projectData} />
      );
    })}
  </Container>
);

export default ClassInfoForm;

const Title = styled(CreatorStyled.SubTitleStyled)`
  margin: 26px 0px 10px 24px;
`;

const Container = styled(CreatorStyled.ContainerBoxStyled)`
  ${props => props.theme.flex('column', '', '')}
`;
