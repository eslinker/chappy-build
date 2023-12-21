import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useRecoilState } from 'recoil';
import { activityState } from '../../recoil/atoms/activityState';
import { activityTitleSideBar } from '../../recoil/atoms/activityTitleSideBar';

export default function LectureBtn({ type, link, pendingIssuance, title }) {
  const [visibleSideBar, setVisibleSideBar] = useRecoilState(activityState);
  const [activeTitle, setActiveTitle] = useRecoilState(activityTitleSideBar);

  const [info, setInfo] = useState({
    style: '',
    content: '',
    image: '',
    handleOnClick: () => {},
  });

  const { style, content, image, handleOnClick } = info;
  const navigate = useNavigate();
  useEffect(() => {
    if (type === 'lecture')
      setInfo({
        style: 'lectureNavigate-btn lectureBtn',
        content: '강의실가기',
        image: '/assets/img/btn/post.svg',
        handleOnClick: (link) => {
          alert('강의실가기');
          // navigate(`/#`);
        },
      });
    if (type === 'termination')
      setInfo({
        style: 'lectureNavigate-btn lectureBtn',
        content: '복습하기',
        image: '/assets/img/btn/post.svg',
        handleOnClick: () => {
          alert('복습 하기');
        },
      });

    if (type === 'complete')
      setInfo({
        style: 'lectureNavigate-btn lectureBtn',
        content: '이수완료',
        image: '/assets/img/btn/medal.svg',
        handleOnClick: () => {
          alert('이수 완료');
        },
      });

    if (type === 'activity' && pendingIssuance)
      setInfo({
        style: 'lectureNavigate-btn write-reviewBtn',
        content: '후기작성',
        image: '/assets/img/btn/speechbubble.svg',
        handleOnClick: (title) => {
          setActiveTitle(title);
          setVisibleSideBar(!visibleSideBar);
        },
      });

    if (type === 'activity' && !pendingIssuance)
      setInfo({
        style: 'lectureNavigate-btn lectureBtn',
        content: '다운로드',
        image: '/assets/img/btn/download.svg',
        handleOnClick: () => {
          alert('다운로드');
        },
      });
    if (type === 'download') setInfo('');
  }, [type, navigate]);

  return (
    <button onClick={() => handleOnClick(title)} className={style}>
      <img className="" width={15} height={15} src={image} alt="버튼 이미지" />
      {content}
    </button>
  );
}
