import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

const SimpleSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 0,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <BannerContainerFisrt>
          <BannerWrapper>
            <BannerFragment src="https://images.unsplash.com/photo-1550063873-ab792950096b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
            <div>
              <BannerInner>
                <BannerTitle>
                  나에게 맞는 클래스 고르기!
                  <br />
                  당신의 선택은?
                </BannerTitle>
                <BannerDescription>
                  클래스101이 추천하는 강의 고르고
                  <br />
                  할인된 가격으로 수강하자!
                </BannerDescription>
              </BannerInner>
            </div>
          </BannerWrapper>
        </BannerContainerFisrt>
      </div>

      <div>
        <BannerContainerSecond>
          <BannerWrapper>
            <BannerFragment src="https://images.unsplash.com/photo-1592091077268-001e76b9d3a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80" />
            <div>
              <BannerInner>
                <BannerTitle>
                  연말 선물은
                  <br /> 이제 '취미'로 하세요
                </BannerTitle>
                <BannerDescription>
                  1만원대 ~ 9만원대 부담 없는 가격으로
                  <br />
                  사랑하는 사람에게 배움을 선물하세요
                </BannerDescription>
              </BannerInner>
            </div>
          </BannerWrapper>
        </BannerContainerSecond>
      </div>
      <div>
        <BannerContainerThird>
          <BannerWrapper>
            <BannerFragment src="https://images.unsplash.com/photo-1608272003912-cfe78f13fc68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80" />
            <div>
              <BannerInner>
                <BannerTitle>
                  매일의 습관을 만드는
                  <br /> 위코드 루틴 런칭
                </BannerTitle>
                <BannerDescription>
                  지금 위코드 구독하면 <br />
                  루틴 콘텐츠 무제한 이용!
                </BannerDescription>
              </BannerInner>
            </div>
          </BannerWrapper>
        </BannerContainerThird>
      </div>
    </Slider>
  );
};

const BannerContainerFisrt = styled.div`
  position: relative;
  height: 400px;
  background: #212121;
  margin-bottom: 80px;
`;

const BannerContainerSecond = styled.div`
  position: relative;
  height: 400px;
  background: #ffa726;
  margin-bottom: 80px;
`;

const BannerContainerThird = styled.div`
  position: relative;
  height: 400px;
  background: #2196f3;
  margin-bottom: 80px;
`;

const BannerWrapper = styled.div`
  position: relative;
  left: 500px;
  width: 1100px;
  margin: 0 auto;
`;

const BannerInner = styled.div`
  position: relative;
  left: 160px;
  top: 70px;
  font-weight: bold;
`;

const BannerTitle = styled.p`
  color: #fff;
  font-size: 34px;
  margin-bottom: 20px;
  line-height: 44px;
`;

const BannerDescription = styled.p`
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
`;

const BannerFragment = styled.img`
  position: absolute;
  left: -500px;
  top: 35px;
  width: 620px;
  height: 400px;
  background: gray;
  object-fit: cover;
  border-radius: ${props => props.theme.borderRadius4};
`;

export default SimpleSlider;
