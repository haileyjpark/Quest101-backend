import React from 'react';
import styled from 'styled-components';
import * as CreatorStyled from '../../../../../../../../styles/CreatorCentor/CreatorStyled';

const ClassCreatorDetailForm = ({ register }) => {
  return (
    <Container>
      <Input {...register('creatorDetail')} placeholder="작가님 소개" />
    </Container>
  );
};

export default ClassCreatorDetailForm;

const Input = styled(CreatorStyled.TextAreaStyled)``;

const Container = styled(CreatorStyled.InputContainerStyled)``;
