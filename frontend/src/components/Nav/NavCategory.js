import React from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  CATEGORY_DATA_LIST_1,
  CATEGORY_DATA_LIST_2,
  CATEGORY_DATA_LIST_3,
  CATEGORY_DATA_LIST_4,
  CATEGORY_DATA_LIST_5,
  CATEGORY_DATA_LIST_6,
} from './categoryData';

function NavCategory({ isLogin }) {
  const navigate = useNavigate();

  const navigateCategory = category => {
    navigate(`/category?category=${category}`);
  };

  const navigateSubCategory = (category, subcategory) => {
    navigate(`/category?category=${category}&sub_category=${subcategory}`);
  };

  const gotoCreator = () => {
    isLogin ? navigate('/creator') : alert('로그인이 필요합니다.');
  };
  return (
    <CategoryContainer>
      <CategoryWrapper>
        <Category onClick={() => navigateCategory('디지털 드로잉')}>
          디지털 아트
        </Category>
        <SubCategoryContainer>
          <SubCategoryWrapper>
            {CATEGORY_DATA_LIST_1.map(data => {
              return (
                <SubCategory
                  key={data.id}
                  onClick={() =>
                    navigateSubCategory('디지털 드로잉', data.value)
                  }
                >
                  {data.value}
                </SubCategory>
              );
            })}
          </SubCategoryWrapper>
        </SubCategoryContainer>
      </CategoryWrapper>

      <CategoryWrapper>
        <Category onClick={() => navigateCategory('공예')}>공예</Category>

        <SubCategoryContainer>
          <SubCategoryWrapper>
            {CATEGORY_DATA_LIST_2.map(data => {
              return (
                <SubCategory
                  key={data.id}
                  onClick={() => navigateSubCategory('공예', data.value)}
                >
                  {data.value}
                </SubCategory>
              );
            })}
          </SubCategoryWrapper>
        </SubCategoryContainer>
      </CategoryWrapper>

      <CategoryWrapper>
        <Category onClick={() => navigateCategory('운동')}>운동</Category>

        <SubCategoryContainer>
          <SubCategoryWrapper>
            {CATEGORY_DATA_LIST_3.map(data => {
              return (
                <SubCategory
                  key={data.id}
                  onClick={() => navigateSubCategory('운동', data.value)}
                >
                  {data.value}
                </SubCategory>
              );
            })}
          </SubCategoryWrapper>
        </SubCategoryContainer>
      </CategoryWrapper>

      <CategoryWrapper>
        <Category onClick={() => navigateCategory('재테크')}>재테크</Category>

        <SubCategoryContainer>
          <SubCategoryWrapper>
            {CATEGORY_DATA_LIST_4.map(data => {
              return (
                <SubCategory
                  key={data.id}
                  onClick={() => navigateSubCategory('재테크', data.value)}
                >
                  {data.value}
                </SubCategory>
              );
            })}
          </SubCategoryWrapper>
        </SubCategoryContainer>
      </CategoryWrapper>

      <CategoryWrapper>
        <Category onClick={() => navigateCategory('개발/데이터')}>
          개발/데이터
        </Category>
        <SubCategoryContainer>
          <SubCategoryWrapper>
            {CATEGORY_DATA_LIST_5.map(data => {
              return (
                <SubCategory
                  key={data.id}
                  onClick={() => navigateSubCategory('개발/데이터', data.value)}
                >
                  {data.value}
                </SubCategory>
              );
            })}
          </SubCategoryWrapper>
        </SubCategoryContainer>
      </CategoryWrapper>

      <CategoryWrapper>
        <Category onClick={() => navigateCategory('요리')}>요리</Category>
        <SubCategoryContainer>
          <SubCategoryWrapper>
            {CATEGORY_DATA_LIST_6.map(data => {
              return (
                <SubCategory
                  key={data.id}
                  onClick={() => navigateSubCategory('요리', data.value)}
                >
                  {data.value}
                </SubCategory>
              );
            })}
          </SubCategoryWrapper>
        </SubCategoryContainer>
      </CategoryWrapper>

      <GotoCreator type="button" onClick={gotoCreator}>
        <Creator>크리에이터 센터</Creator>
      </GotoCreator>
    </CategoryContainer>
  );
}

export default NavCategory;

const CategoryContainer = styled.ul`
  position: relative;
  ${props => props.theme.flex('row', 'center', 'flex-start')};
  width: 1100px;
  margin: 0 auto;
  color: black;
  text-decoration: none;
`;

const CategoryWrapper = styled.li`
  color: ${props => props.theme.black};
`;

const Category = styled.button`
  padding: 8px 0 20px 0;
  color: ${props => props.theme.black};
  margin-right: 50px;
  font-size: ${props => props.theme.fontSemiMedium};
  font-weight: ${props => props.theme.weightBold};
`;

const SubCategoryContainer = styled.ul`
  position: relative;
  display: none;
  color: red;
  ${CategoryWrapper}:hover & {
    display: block;
  }
`;

const SubCategoryWrapper = styled.div`
  position: absolute;
  top: 1px;
  left: -30px;
  width: 195px;
  padding: 20px 10px;
  background-color: ${props => props.theme.white};
  border-left: 1px solid ${props => props.theme.mediumGray};
  border-right: 1px solid ${props => props.theme.mediumGray};
  border-bottom: 1px solid ${props => props.theme.mediumGray};
  font-size: ${props => props.theme.fontRegular};
  z-index: 1;
`;

const SubCategory = styled.li`
  padding: 10px 0 10px 20px;
  color: ${props => props.theme.black};
  &:hover {
    background-color: ${props => props.theme.lightGray};
  }
`;

const Creator = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 8px 0 20px 0;
  color: ${props => props.theme.orange};
  font-size: ${props => props.theme.fontRegular};
  font-weight: ${props => props.theme.weightBold};
`;

const GotoCreator = styled.button`
  display: inherit;
  margin: 0 auto;
`;
