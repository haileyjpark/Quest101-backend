import React from 'react';
import styled from 'styled-components';
import * as CreatorStyled from '../../../../../../../styles/CreatorCentor/CreatorStyled';

const ClassDetailInfoForm = ({ register }) => (
  <Container>
    <Input {...register('classDetail')} placeholder="클래스 소개" />
  </Container>
);

export default ClassDetailInfoForm;

const Input = styled(CreatorStyled.TextAreaStyled)``;

const Container = styled(CreatorStyled.InputContainerStyled)``;
