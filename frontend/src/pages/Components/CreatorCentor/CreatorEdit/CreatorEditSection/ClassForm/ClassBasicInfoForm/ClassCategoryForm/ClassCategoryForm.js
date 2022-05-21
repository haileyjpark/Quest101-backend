import React from 'react';
import styled from 'styled-components';
import * as CreatorStyled from '../../../../../../../../styles/CreatorCentor/CreatorStyled';

const ClassCategoryForm = ({ register, errors, watch }) => {
  const selectCategory = watch().classCategory;

  return (
    <Container>
      <Label for="classCategory">카테고리</Label>
      <Select {...register('classCategory')} name="classCategory">
        <option value="" hidden selected disabled>
          1차 카테고리를 선택해주세요.
        </option>
        <option value="디지털 드로잉">디지털 드로잉</option>
        <option value="공예">공예</option>
        <option value="운동">운동</option>
        <option value="개발/데이터">개발/데이터</option>
        <option value="재테크">재테크</option>
        <option value="요리">요리</option>
      </Select>
      <Label for="classCategory">서브 카테고리</Label>
      {(selectCategory => {
        switch (selectCategory) {
          case '디지털 드로잉':
            return (
              <Select {...register('classSubCategory')} name="classSubCategory">
                <option value="" hidden selected disabled>
                  2차 카테고리를 선택해주세요.
                </option>
                <option value="캐릭터 드로잉">캐릭터 드로잉</option>
                <option value="일러스트">일러스트</option>
                <option value="컨셉아트">컨셉아트</option>
                <option value="웹툰">웹툰</option>
                <option value="캘리그라피">캘리그라피</option>
              </Select>
            );
          case '재테크':
            return (
              <Select {...register('classSubCategory')} name="classSubCategory">
                <option value="" hidden selected disabled>
                  2차 카테고리를 선택해주세요.
                </option>
                <option value="주식">주식</option>
                <option value="부동산">부동산</option>
              </Select>
            );
          case '공예':
            return (
              <Select {...register('classSubCategory')} name="classSubCategory">
                <option value="" hidden selected disabled>
                  2차 카테고리를 선택해주세요.
                </option>
                <option value="대바늘 뜨개">대바늘 뜨개</option>
                <option value="도자기 공예">도자기 공예</option>
                <option value="실 공예">실 공예</option>
                <option value="라탄 공예">라탄 공예</option>
                <option value="가죽 공예">가죽 공예</option>
              </Select>
            );
          case '운동':
            return (
              <Select {...register('classSubCategory')} name="classSubCategory">
                <option value="" hidden selected disabled>
                  2차 카테고리를 선택해주세요.
                </option>
                <option value="요가">요가</option>
                <option value="필라테스">필라테스</option>
                <option value="피트니스">피트니스</option>
                <option value="러닝">러닝</option>
                <option value="발레">발레</option>
                <option value="라이딩">라이딩</option>
              </Select>
            );
          case '개발/데이터':
            return (
              <Select {...register('classSubCategory')} name="classSubCategory">
                <option value="" hidden selected disabled>
                  2차 카테고리를 선택해주세요.
                </option>
                <option value="git">git</option>
                <option value="파이썬">파이썬</option>
                <option value="django">django</option>
                <option value="Node.js">Node.js</option>
                <option value="javascript">javascript</option>
              </Select>
            );
          case '요리':
            return (
              <Select {...register('classSubCategory')} name="classSubCategory">
                <option value="" hidden selected disabled>
                  2차 카테고리를 선택해주세요.
                </option>
                <option value="한식">한식</option>
                <option value="양식">양식</option>
                <option value="일식">일식</option>
                <option value="중식">중식</option>
                <option value="베이킹">베이킹</option>
              </Select>
            );
          default:
            return;
        }
      })(selectCategory)}
      <ErrorMessage>{errors?.classTitle?.message}</ErrorMessage>
    </Container>
  );
};

export default ClassCategoryForm;

const ErrorMessage = styled(CreatorStyled.ErrorMessageStyled)``;

const Select = styled(CreatorStyled.SelectStyled)``;

const Label = styled.label`
  padding-bottom: 12px;
  margin-top: 16px;
`;

const Container = styled(CreatorStyled.InputContainerStyled)``;
