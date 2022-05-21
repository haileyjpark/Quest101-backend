import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ProductCardList from '../../components/ProductCard/ProductCardList';
import { API } from '../../config';
import styled from 'styled-components';

const QUERY_STRING = ['&stat=체력', '&stat=지능', '&stat=매력', '&stat=예술'];

const ProductListCategory = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [productCardList, setProductCardList] = useState({});

  const [statBtn, setStatBtn] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
  });

  const hadleChangeBtnColor = buttonNum => {
    setStatBtn(prev => ({ [buttonNum]: !prev[buttonNum] }));
  };

  useEffect(() => {
    fetch(`${API.LIST}${location.search}`)
      .then(res => res.json())
      .then(res => setProductCardList(res.results));
  }, [location.search]);

  return (
    <div>
      {productCardList.length > 0 && (
        <>
          <Link to="/creator">
            <BeltBanner>
              <BeltBannerText>퀘스트 101 </BeltBannerText>
              <BeltBannerTextBold>크리에이터 시작하기 !</BeltBannerTextBold>
              <BeltBannerText>&gt;</BeltBannerText>
              <BeltBannerImage />
            </BeltBanner>
          </Link>
          <ButtonContainer>
            <Button
              type="button"
              selected={statBtn.first}
              onClick={() => {
                hadleChangeBtnColor('first');
                navigate(location.search + QUERY_STRING[0]);
              }}
            >
              체력
            </Button>
            <Button
              type="button"
              selected={statBtn.second}
              onClick={() => {
                hadleChangeBtnColor('second');
                navigate(location.search + QUERY_STRING[1]);
              }}
            >
              지능
            </Button>
            <Button
              type="button"
              selected={statBtn.third}
              onClick={() => {
                hadleChangeBtnColor('third');
                navigate(location.search + QUERY_STRING[2]);
              }}
            >
              매력
            </Button>
            <Button
              type="button"
              selected={statBtn.fourth}
              onClick={() => {
                hadleChangeBtnColor('fourth');
                navigate(location.search + QUERY_STRING[3]);
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

export default ProductListCategory;

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
