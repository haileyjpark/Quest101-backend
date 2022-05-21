import React from 'react';
import styled from 'styled-components';

import { STAT_DATA } from '../../../../Collapsible/CollapsibleData';

import * as CreatorStyled from '../../../../../../../../styles/CreatorCentor/CreatorStyled';

const ClassStatForm = ({ register }) => {
  return (
    <Container>
      <InputWrapper>
        {STAT_DATA.map(statItem => (
          <InputBox key={statItem.id}>
            <Label>
              {statItem.icon}
              {statItem.label}
            </Label>
            <Input
              type="number"
              min="0"
              {...register(statItem.registerName)}
              placeholder="0"
            />
          </InputBox>
        ))}
      </InputWrapper>
    </Container>
  );
};

export default ClassStatForm;

const Input = styled(CreatorStyled.InputStyled)`
  width: 100px;
`;

const Label = styled.label`
  ${props => props.theme.flex('row', 'center', '')};
  margin-right: 12px;
`;

const InputBox = styled.div`
  ${props => props.theme.flex('row', 'center', '')};

  &:hover ${Label} {
    color: ${props => props.theme.orange};
  }
`;

const InputWrapper = styled.div`
  ${props => props.theme.flex('row', '', 'space-between')};
  margin-top: 12px;
`;

const Container = styled(CreatorStyled.InputContainerStyled)``;
