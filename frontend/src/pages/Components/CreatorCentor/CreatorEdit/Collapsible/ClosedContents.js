import React from 'react';

import styled from 'styled-components';

import { Icon } from '../../share/Icon';
import { FaPen } from 'react-icons/fa';

const ClosedContents = ({ closedPalceholder }) => {
  return (
    <Container>
      <PlaceHolder>{closedPalceholder}</PlaceHolder>
      <EditButton type="button">
        <Icon iconName={FaPen} size={18} />
      </EditButton>
    </Container>
  );
};

export default ClosedContents;

const EditButton = styled.button`
  padding: 12px;
  border-radius: 4px;
  background-color: ${props => props.theme.lightGray};

  &:hover {
    background-color: ${props => props.theme.gray};
  }
`;

const PlaceHolder = styled.p`
  font-size: ${props => props.theme.fontSemiMedium};
  line-height: 1.6;
`;

const Container = styled.div`
  ${props => props.theme.flex('row', 'center', 'space-between')}
`;
