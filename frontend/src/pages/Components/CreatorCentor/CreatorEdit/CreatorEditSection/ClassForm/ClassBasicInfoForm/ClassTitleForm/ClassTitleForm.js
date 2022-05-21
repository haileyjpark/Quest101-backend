import React from 'react';
import styled from 'styled-components';
import * as CreatorStyled from '../../../../../../../../styles/CreatorCentor/CreatorStyled';

const ClassTitleForm = ({ register, errors, watch }) => {
  const InputLengh = watch()?.classTitle?.length;

  return (
    <Container>
      <Input
        {...register('classTitle', {
          maxLength: { value: 50, message: '⚠️ 최대 50자입니다.' },
        })}
        placeholder="클래스 제목"
      />
      <MessageWrapper>
        <ErrorMessage>{errors?.classTitle?.message}</ErrorMessage>
        <RequireMessage>
          {InputLengh ? InputLengh : 0}자 / 최대 50자
        </RequireMessage>
      </MessageWrapper>
    </Container>
  );
};

export default ClassTitleForm;

const RequireMessage = styled(CreatorStyled.RequireMessageStyled)``;

const ErrorMessage = styled(CreatorStyled.ErrorMessageStyled)``;

const MessageWrapper = styled(CreatorStyled.MessageWrapperStyled)``;

const Input = styled(CreatorStyled.InputStyled)``;

const Container = styled(CreatorStyled.InputContainerStyled)``;
