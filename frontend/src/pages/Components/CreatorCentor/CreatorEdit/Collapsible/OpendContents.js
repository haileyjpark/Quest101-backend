import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '../../share/Button';
import CoverGalleryForm from '../../../CreatorCentor/CreatorEdit/CreatorEditSection/ClassForm/ClassBasicInfoForm/CoverGalleryForm/CoverGalleryForm';
import ClassTitleForm from '../CreatorEditSection/ClassForm/ClassBasicInfoForm/ClassTitleForm/ClassTitleForm';
import ClassCreatorNickNameForm from '../../CreatorEdit/CreatorEditSection/ClassForm/ClassCreatorInfoForm/ClassCreatorNickNameForm/ClassCreatorNickNameForm';
import ClassCreatorPhoneForm from '../CreatorEditSection/ClassForm/ClassCreatorInfoForm/ClassCreatorPhoneForm/ClassCreatorPhoneForm';
import ClassCategoryForm from '../CreatorEditSection/ClassForm/ClassBasicInfoForm/ClassCategoryForm/ClassCategoryForm';
import ClassLevelForm from '../CreatorEditSection/ClassForm/ClassBasicInfoForm/ClassLevelForm/ClassLevelForm';
import ClassDetailInfoForm from '../CreatorEditSection/ClassForm/ClassDetailInfoForm/ClassDetailInfoForm';
import ClassCreatorDetailForm from '../CreatorEditSection/ClassForm/ClassCreatorInfoForm/ClassCreatorDetailForm/ClassCreatorDetailForm';
import ClassStatForm from '../CreatorEditSection/ClassForm/ClassBasicInfoForm/ClassStatForm.js/ClassStatForm';
import * as constData from './constData';

import styled, { keyframes } from 'styled-components';
import { DescriptionStyled } from '../../../../../styles/CreatorCentor/CreatorStyled';
import { API, API_JUNGHUN } from '../../../../../config';

const OpendContents = ({
  openedPalceholder,
  contents,
  handleCloseContainer,
  projectData,
}) => {
  const {
    id,
    name,
    thumbnail_image_url,
    detail_media,
    description,
    sub_category,
    category,
    healthStat,
    intellectStat,
    charmStat,
    artStat,
    status,
    level,
    user_name,
    user_profile_image,
    user_phone_number,
    user_description,
    social_account,
  } = projectData;

  const [coverMediaImages, setCoverMediaImages] = useState([]);
  const [coverImage, setCoverImage] = useState([]);

  const handleSubmitToBack = (data, e) => {
    if (contents === 'CoverGalleryForm') {
      const imageDatas = new FormData();
      imageDatas.append('thumbnail_image_url', coverImage);
      for (let i = 0; i < coverMediaImages.length; i++) {
        imageDatas.append('detail_image_url', coverMediaImages[i]);
      }

      fetch(`${API_JUNGHUN.CLASS_COURSES}/${id}`, {
        method: 'POST',
        headers: {
          Authorization: localStorage.getItem('kakao_token'),
        },
        body: imageDatas,
      })
        .then(res => res.json())
        .then(result => {
          if (result.message === 'SUCCESS') alert('저장되었습니다.');
        })
        .catch(error => alert('데이터 저장에 실패했습니다.'));

      return;
    } else {
      const formData = new FormData();

      if (contents === 'ClassCategoryForm') {
        formData.append('category', data.classCategory);
        formData.append('sub_category', data.classSubCategory);
      }

      if (contents === 'ClassStatForm') {
        formData.append('health_stat', data.classHealthStat);
        formData.append('intellect_stat', data.classIntellectStat);
        formData.append('charm_stat', data.classCharmStat);
        formData.append('art_stat', data.classArtStat);
      }

      const mappingKey = {
        ClassTitleForm: 'course_name',
        ClassCreatorNickNameForm: 'user_name',
        ClassCreatorPhoneForm: 'user_phone_number',
        ClassLevelForm: 'level',
        ClassDetailInfoForm: 'course_description',
        ClassCreatorDetailForm: 'user_description',
      };

      const mappingValue = {
        ClassTitleForm: data.classTitle,
        ClassCreatorNickNameForm: data.creatorNickName,
        ClassCreatorPhoneForm: data.creatorPhone,
        ClassLevelForm: data.classLevel,
        ClassDetailInfoForm: data.classDetail,
        ClassCreatorDetailForm: data.creatorDetail,
      };

      formData.append(mappingKey[contents], mappingValue[contents]);
      formData.append('class_id', id);

      fetch(`${API_JUNGHUN.CLASS_COURSES}`, {
        method: 'POST',
        headers: {
          Authorization: localStorage.getItem('kakao_token'),
        },
        body: formData,
      })
        .then(res => res.json())
        .then(result => {
          if (result.message === 'SUCCESS') alert('저장되었습니다.');
        })
        .catch(error => alert('데이터 저장에 실패했습니다.'));
    }
  };

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      classTitle: name,
      creatorNickName: user_name,
      creatorPhone: user_phone_number,
      classCategory: category,
      classSubCategory: sub_category,
      classLevel: level,
      classHealthStat: healthStat,
      classIntellectStat: intellectStat,
      classCharmStat: charmStat,
      classArtStat: artStat,
      classDetail: description,
      creatorDetail: user_description,
    },
  });

  return (
    <Form onSubmit={handleSubmit(handleSubmitToBack)}>
      <DescriptionStyled>{openedPalceholder}</DescriptionStyled>
      {(contents => {
        switch (contents) {
          case constData.COVER_GALLERY_FORM:
            return (
              <CoverGalleryForm
                coverImage={thumbnail_image_url}
                detail_media={detail_media}
                register={register}
                setCoverMediaImages={setCoverMediaImages}
                setCoverImage={setCoverImage}
              />
            );
          case constData.CLASS_TITLE_FORM:
            return (
              <ClassTitleForm
                register={register}
                errors={errors}
                watch={watch}
              />
            );
          case constData.CLASS_CREATOR_NICKNAME_FORM:
            return (
              <ClassCreatorNickNameForm
                register={register}
                errors={errors}
                watch={watch}
              />
            );
          case constData.CLASS_CREATOR_PHONE_FORM:
            return (
              <ClassCreatorPhoneForm
                register={register}
                errors={errors}
                watch={watch}
              />
            );
          case constData.CLASS_CATEGORY_FORM:
            return (
              <ClassCategoryForm
                register={register}
                errors={errors}
                watch={watch}
              />
            );
          case constData.CLASS_LEVEL_FORM:
            return <ClassLevelForm register={register} errors={errors} />;
          case constData.CLASS_STAT_FORM:
            return <ClassStatForm register={register} />;
          case constData.CLASS_DETAIL_INFO_FORM:
            return <ClassDetailInfoForm register={register} />;
          case constData.CLASS_CREATOR_DETAIL_FORM:
            return <ClassCreatorDetailForm register={register} />;
          default:
            return;
        }
      })(contents)}
      <Buttons>
        <Button
          color="gray"
          bgColor="white"
          onClick={handleCloseContainer}
          type="button"
        >
          취소하기
        </Button>
        <Button color="white" bgColor="orange" type="submit">
          저장하기
        </Button>
      </Buttons>
    </Form>
  );
};

export default OpendContents;

const openAnimation = keyframes`
  0% {
    opacity:0;
    transform: translateY(0);
  }

  50% {
    transform: translateY(16px);
  }

  100% {
    opacity:1;
    transform: translateY(0);
  }
`;

const Buttons = styled.div`
  margin-top: 24px;
  border-radius: 4px;
  text-align: right;
`;

const Form = styled.form`
  width: 100%;
  animation: ${openAnimation} 150ms cubic-bezier(1, -0.01, 0.58, 1);
`;
