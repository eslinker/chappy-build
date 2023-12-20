import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

export default function LectureBtn({ type }) {
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
          navigate(`/#`);
        },
      });
    if (type === 'termination')
      setInfo({
        style: 'lectureNavigate-btn lectureBtn',
        content: '복습하기',
        image: '/assets/img/btn/post.svg',
        handleOnClick: (link) => {
          navigate(`/#`);
        },
      });

    if (type === 'complete')
      setInfo({
        style: 'lectureNavigate-btn lectureBtn',
        content: '이수완료',
        image: '/assets/img/btn/medal.svg',
        handleOnClick: (link) => {
          navigate(`/#`);
        },
      });

    if (type === 'details') setInfo('');
    if (type === 'cancellation') setInfo('');
    if (type === 'writeReview') setInfo('');
    if (type === 'download') setInfo('');
  }, [type, navigate]);

  return (
    <button onClick={handleOnClick} className={style}>
      <img className="" width={15} height={15} src={image} alt="버튼 이미지" />
      {content}
    </button>
  );
}
