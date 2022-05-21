import React, { useState } from 'react';
import ClosedContents from './ClosedContents';
import OpendContents from './OpendContents';

import styled from 'styled-components';
import { FormLabelStyled } from '../../../../../styles/CreatorCentor/CreatorStyled';

const CollapsibleBox = ({ data, projectData }) => {
  const { label, openedPalceholder, closedPalceholder, contents } = data;

  const [isOpend, setIsOpend] = useState(false);

  const handleOpenContainer = e => {
    if (e.target.nodeName === 'BUTTON') return;
    setIsOpend(true);
  };

  const handleCloseContainer = e => {
    window.confirm(
      '저장하지 않은 변경사항이 있습니다. 정말로 닫으시겠습니까?'
    ) && setIsOpend(false);
  };

  return (
    <Container onClick={handleOpenContainer} isOpend={isOpend}>
      <Label>{label}</Label>
      {isOpend ? (
        <OpendContents
          openedPalceholder={openedPalceholder}
          contents={contents}
          handleCloseContainer={handleCloseContainer}
          projectData={projectData}
        />
      ) : (
        <ClosedContents closedPalceholder={closedPalceholder} />
      )}
    </Container>
  );
};

export default CollapsibleBox;

const Label = styled(FormLabelStyled)``;

const Container = styled.div`
  padding: 16px 24px;
  border-bottom: ${props => props.theme.borderGray};
  color: ${props => (!props.isOpend ? props.theme.gray : props.theme.darkGray)};
  font-size: ${props => props.theme.fontRegular};
  cursor: ${props => !props.isOpend && 'pointer'};

  &:hover {
    background-color: ${props => !props.isOpend && props.theme.lightGray};
  }

  &:nth-last-child(1) {
    border: none;
    border-radius: 0 0 12px 12px;
  }
`;
