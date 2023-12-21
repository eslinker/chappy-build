import { atom } from 'recoil';

export const lectureState = atom({
  key: 'lectureData',
  default: [
    {
      id: '0',
      previewImg: './assets/img/thumbnail/1.png',
      title: '입문자를 위한 파이썬 정보',
      period: ['23.01.25', '상시'],
      percent: 90,
      link: '#',
    },
    {
      id: '1',
      previewImg: './assets/img/thumbnail/1.png',
      title: '입문자를 위한 파이썬 정보 II',
      period: ['23.01.25', '상시'],
      percent: 50,
      link: '#',
      pendingName: 'course',
    },
    {
      id: '2',
      previewImg: './assets/img/thumbnail/1.png',
      title: '입문자를 위한 파이썬 정보 III',
      period: ['23.01.25', '상시'],
      percent: 20,
      link: '#',
      pending: true,
      pendingName: 'payment',
    },
  ],
});
