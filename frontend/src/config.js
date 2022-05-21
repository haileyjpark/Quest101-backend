const BASE_URL = 'http://192.168.57.218:8000';

export const API = {
  LOGIN: `${BASE_URL}/users/kakaosignin`,
  CLASS_COURSES: `${BASE_URL}/creators`,
  COMMENT: `${BASE_URL}/products/comments`,
  MYPAGE: `${BASE_URL}/products/page`,
  DETAIL_PAGE: `${BASE_URL}/products/detail`,
  LIKE: `${BASE_URL}/products/like`,
  PRODUCTS: `${BASE_URL}/products`,
  LIST: `${BASE_URL}/products`,
};

const BASE_URL_JUNGHUN = 'http://192.168.57.231:8000';

export const API_JUNGHUN = {
  CLASS_COURSES: `${BASE_URL_JUNGHUN}/creators`,
};
