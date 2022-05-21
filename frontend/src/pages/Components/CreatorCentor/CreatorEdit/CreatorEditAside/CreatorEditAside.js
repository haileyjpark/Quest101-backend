import React from 'react';

import { Button } from '../../share/Button';
import GuideAside from '../../share/GuideAside';

const CreatorEditAside = () => {
  const handleRequire = () => {
    window.confirm('클래스 신청을 하시겠습니까?') &&
      alert('클래스가 성공적으로 생성됐습니다.');
  };
  return (
    <GuideAside>
      <GuideAside.Title>상품 상태</GuideAside.Title>
      <GuideAside.SubTitle>현재 상태</GuideAside.SubTitle>
      <GuideAside.Description>
        클래스 영상을 업로드하고, 무엇을 배우게 되는 클래스인지 상세하게 내용을
        작성해주세요. 작성 완료 후 "검토 요청"을 눌러주시면, 담당 MD가 배정되어
        검토 후 결과를 알려드릴게요.
        <GuideAside.GoToInfo href="">
          원포인트 클래스 가이드
        </GuideAside.GoToInfo>
        를 참고하면 더 쉽게 작성할 수 있어요.
      </GuideAside.Description>
      <Button
        color="white"
        bgColor="orange"
        fullwidth
        type="button"
        onClick={handleRequire}
      >
        검토요청
      </Button>
    </GuideAside>
  );
};

export default CreatorEditAside;
