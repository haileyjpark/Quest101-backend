import React from 'react';
import styled from 'styled-components';
import * as CreatorStyled from '../../../../../../../../styles/CreatorCentor/CreatorStyled';

const ClassLevelForm = ({ register, errors }) => {
  return (
    <Container>
      <Select {...register('classLevel')} name="classLevel">
        <option value="" hidden selected disabled>
          수강 대상을 선택해주세요.
        </option>
        <option value="입문">입문</option>
        <option value="초급">초급</option>
        <option value="중급">중급</option>
        <option value="준전문가">준전문가</option>
        <option value="전문가">전문가</option>
      </Select>
      <ErrorMessage>{errors?.classTitle?.message}</ErrorMessage>
    </Container>
  );
};

export default ClassLevelForm;

const ErrorMessage = styled(CreatorStyled.ErrorMessageStyled)``;

const Select = styled(CreatorStyled.SelectStyled)``;

const Container = styled(CreatorStyled.InputContainerStyled)``;
