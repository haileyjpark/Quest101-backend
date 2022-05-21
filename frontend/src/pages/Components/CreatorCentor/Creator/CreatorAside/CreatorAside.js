import React from 'react';

import GuideAside from '../../share/GuideAside';

const CreatorAside = props => (
  <GuideAside>
    <GuideAside.Title>맞춤 가이드</GuideAside.Title>
    <GuideAside.SubTitle>원포인트 클래스가 뭐예요?</GuideAside.SubTitle>
    <GuideAside.Description>
      짧은 영상 한 개만으로도 클래스를 만들 수 있어요. 오픈 과정에 대한 자세한
      설명을 확인해보세요!
      <GuideAside.GoToInfo href="">자세히 보기</GuideAside.GoToInfo>
    </GuideAside.Description>
  </GuideAside>
);

export default CreatorAside;
