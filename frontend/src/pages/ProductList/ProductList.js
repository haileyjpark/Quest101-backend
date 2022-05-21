import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProductCardList from '../../components/ProductCard/ProductCardList';
import SimpleSlider from './SimpleSlider';
import { API } from '../../config';
import styled from 'styled-components';

const QUERY_STRING = ['?stat=체력', '?stat=지능', '?stat=매력', '?stat=예술'];

const ProductList = ({ isLogin, setIsLogin }) => {
  const [productCardList, setProductCardList] = useState({});
  const [stat, setStat] = useState('');
  const navigate = useNavigate();

  const [statBtn, setStatBtn] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
  });

  const hadleChangeBtnColor = buttonNum => {
    setStatBtn(prev => ({ [buttonNum]: !prev[buttonNum] }));
  };

  const handleDataChange = query => {
    setStat(query);
  };

  useEffect(() => {
    isLogin
      ? fetch(`${API.LIST}${stat}`, {
          headers: { Authorization: localStorage.getItem('kakao_token') },
        })
          .then(res => res.json())
          .then(res => setProductCardList(res.results))
      : fetch(`${API.LIST}${stat}`)
          .then(res => res.json())
          .then(res => setProductCardList(res.results));
  }, [stat]);

  const gotoCreator = () => {
    isLogin ? navigate('/creator') : alert('로그인이 필요합니다.');
  };

  return (
    <div>
      {productCardList.length > 0 && (
        <>
          <SimpleSlider />
          <GotoCreator type="button" onClick={gotoCreator}>
            <BeltBanner>
              <BeltBannerText>퀘스트 101 </BeltBannerText>
              <BeltBannerTextBold>크리에이터 시작하기 !</BeltBannerTextBold>
              <BeltBannerText>&gt;</BeltBannerText>
              <BeltBannerImage />
            </BeltBanner>
          </GotoCreator>
          <ButtonContainer>
            <Button
              type="button"
              selected={statBtn.first}
              onClick={() => {
                hadleChangeBtnColor('first');
                handleDataChange(QUERY_STRING[0]);
              }}
            >
              체력
            </Button>
            <Button
              type="button"
              selected={statBtn.second}
              onClick={() => {
                hadleChangeBtnColor('second');
                handleDataChange(QUERY_STRING[1]);
              }}
            >
              지능
            </Button>
            <Button
              type="button"
              selected={statBtn.third}
              onClick={() => {
                hadleChangeBtnColor('third');
                handleDataChange(QUERY_STRING[2]);
              }}
            >
              매력
            </Button>
            <Button
              type="button"
              selected={statBtn.fourth}
              onClick={() => {
                hadleChangeBtnColor('fourth');
                handleDataChange(QUERY_STRING[3]);
              }}
            >
              예술
            </Button>
          </ButtonContainer>
          <ProductContainer>
            <ProductCardList productCardList={productCardList} />
          </ProductContainer>
        </>
      )}
    </div>
  );
};

export default ProductList;

const BeltBanner = styled.div`
  position: relative;
  ${props => props.theme.flex('', 'center', '')}
  width: 1100px;
  height: 100px;
  margin: 30px auto;
  padding-left: 30px;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.orange};
  box-sizing: border-box;
  font-size: ${props => props.theme.fontMedium};
`;

const BeltBannerText = styled.p`
  font-weight: ${props => props.theme.weightRegular};
`;

const BeltBannerTextBold = styled.p`
  padding: 0 8px;
  font-weight: ${props => props.theme.weightBold};
`;

const BeltBannerImage = styled.img.attrs({
  src: 'https://i.ibb.co/TL315MN/375xauto-2.png',
})`
  position: absolute;
  width: 192px;
  right: 50px;
  bottom: 0;
`;

const ButtonContainer = styled.div`
  width: 1100px;
  margin: 0px auto;
  padding: 10px 0;
`;

const Button = styled.button`
  margin-right: 20px;
  padding: 10px 30px;
  color: ${props => (props.selected ? props.theme.orange : props.theme.black)};
  border: 1px solid
    ${props => (props.selected ? props.theme.orange : props.theme.mediumGray)};
  border-radius: 2px;
  font-size: 14px;
  font-weight: ${props => props.theme.weightSemiBold};
`;

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
  width: 1100px;
  margin: 0 auto;
  padding-bottom: 100px;
  list-style: none;
`;

const GotoCreator = styled.button`
  display: inherit;
  margin: 0 auto;
`;
