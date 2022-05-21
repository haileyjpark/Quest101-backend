import React from 'react';
import styled from 'styled-components';
import * as CreatorStyled from '../../../../../../../../styles/CreatorCentor/CreatorStyled';

const ClassCreatorNickNameForm = ({ register, errors, watch }) => {
  const InputLengh = watch()?.creatorNickName?.length;

  return (
    <Container>
      <Input
        {...register('creatorNickName', {
          maxLength: { value: 15, message: '⚠️ 최대 15자입니다.' },
        })}
        placeholder="크리에이터님의 고유한 닉네임을 설정해주세요."
      />
      <MessageWrapper>
        <ErrorMessage>{errors?.creatorNickName?.message}</ErrorMessage>
        <RequireMessage>
          {InputLengh ? InputLengh : 0}자 / 최대 15자
        </RequireMessage>
      </MessageWrapper>
    </Container>
  );
};

export default ClassCreatorNickNameForm;

const RequireMessage = styled(CreatorStyled.RequireMessageStyled)``;

const ErrorMessage = styled(CreatorStyled.ErrorMessageStyled)``;

const MessageWrapper = styled(CreatorStyled.MessageWrapperStyled)``;

const Input = styled(CreatorStyled.InputStyled)``;

const Container = styled(CreatorStyled.InputContainerStyled)``;
