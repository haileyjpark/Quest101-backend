import * as constData from './constData';
import { GiHeartPlus, GiBookCover, GiCharm } from 'react-icons/gi';
import { FaPaintBrush } from 'react-icons/fa';
import { Icon } from '../../share/Icon';
import { API } from '../../../../../config';

export const CLASS_FORM_DATA = [
  {
    id: 1,
    title: '클래스 기본 정보',
    data: [
      {
        id: 1,
        label: '커버 이미지',
        closedPalceholder: '커버 이미지와 갤러리 이미지를 입력해주세요.',
        openedPalceholder:
          '커버로 사용할 이미지를 추가해주세요. 크리에이터님과 작품을 잘 대표하는 사진일수록 좋아요.',
        contents: constData.COVER_GALLERY_FORM,
        api: API.CLASS_COVER_IMAGE_UPLOAD,
        sendData: '',
      },
      {
        id: 2,
        label: '클래스 제목',
        closedPalceholder: '클래스를 대표할 수 있는 제목을 추가해주세요.',
        openedPalceholder: '클래스를 대표할 수 있는 제목을 추가해주세요.',
        contents: constData.CLASS_TITLE_FORM,
        api: API.CLASS_TITLE_UPLOAD,
        sendData: 'classTitle',
      },
      {
        id: 3,
        label: '카테고리',
        closedPalceholder: '(원포인트)',
        openedPalceholder: '분야를 선택해주세요.',
        contents: constData.CLASS_CATEGORY_FORM,
        api: API.CLASS_CATEGORY_UPLOAD,
        sendData: 'classCategory',
      },
      {
        id: 4,
        label: '클래스 난이도',
        closedPalceholder: '어느 역량의 수강생을 위한 클래스인지 선택해주세요.',
        openedPalceholder: '어느 역량의 수강생을 위한 클래스인지 선택해주세요.',
        contents: constData.CLASS_LEVEL_FORM,
        api: API.CLASS_LEVEL_UPLOAD,
        sendData: 'classLevel',
      },
      {
        id: 5,
        label: '클래스 스탯',
        closedPalceholder: '강의 수료 후 얻게 되는 능력치를 설정해주세요.',
        openedPalceholder: '강의 수료 후 얻게 되는 능력치를 설정해주세요.',
        contents: constData.CLASS_STAT_FORM,
        api: API.CLASS_STAT_UPLOAD,
        sendData: 'classTitle',
      },
    ],
  },
  {
    id: 2,
    title: '클래스 상세 정보',
    data: [
      {
        id: 1,
        label: '클래스 소개',
        closedPalceholder: '',
        openedPalceholder: '클래스에 대한 소개를 작성해주세요!',
        contents: constData.CLASS_DETAIL_INFO_FORM,
        api: API.CLASS_INPO_UPLOAD,
        sendData: 'classDetail',
      },
    ],
  },
  {
    id: 3,
    title: '크리에이터 기본 정보',
    data: [
      {
        id: 1,
        label: '크리에이터 닉네임',
        closedPalceholder: '사용하시는 닉네임을 입력해주세요.',
        openedPalceholder: '',
        contents: constData.CLASS_CREATOR_NICKNAME_FORM,
        api: API.CREATOR_NICKNAME_UPLOAD,
        sendData: 'creatorNickName',
      },
      {
        id: 2,
        label: '크리에이터 소개',
        closedPalceholder: '',
        openedPalceholder:
          '인사말, 작가님을 대표하는 사진과 함께 어떻게 가르칠 클래스를 배우시게 됐는지, 왜 관심을 두게 되셨는지 등등 클래스에 얽힌 작가님의 이야기를 해주세요!',
        contents: constData.CLASS_CREATOR_DETAIL_FORM,
        api: API.CREATOR_INFO_UPLOAD,
        sendData: 'creatorDetail',
      },
      {
        id: 3,
        label: '연락처',
        closedPalceholder: '',
        openedPalceholder: '연락 가능한 연락처를 입력해주세요. (-제외)',
        contents: constData.CLASS_CREATOR_PHONE_FORM,
        api: API.CREATOR_PHONE_UPLOAD,
        sendData: 'creatorPhone',
      },
    ],
  },
];

export const STAT_DATA = [
  {
    id: 1,
    label: '체력',
    registerName: 'classHealthStat',
    icon: <Icon iconName={GiHeartPlus} size={18} margin="0 8px 0 0" />,
  },
  {
    id: 2,
    label: '지능',
    registerName: 'classIntellectStat',
    icon: <Icon iconName={GiBookCover} size={18} margin="0 8px 0 0" />,
  },
  {
    id: 3,
    label: '매력',
    registerName: 'classCharmStat',
    icon: <Icon iconName={GiCharm} size={18} margin="0 8px 0 0" />,
  },
  {
    id: 4,
    label: '예술',
    registerName: 'classArtStat',
    icon: <Icon iconName={FaPaintBrush} size={18} margin="0 8px 0 0" />,
  },
];
