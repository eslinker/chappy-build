import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { lecturePopupState } from '../../recoil/atoms/lecturePopupState';

export default function LectureDetailBtn({ id }) {
  const [lectureItemId, setLectureItemId] = useRecoilState(lecturePopupState);

  useEffect(() => {
    return () => setLectureItemId('');
  }, []);

  //TODO 이벤트 내용 추가
  const handleDetailBtn = (id) => {
    setLectureItemId(id);
  };
  const handleCancelBtn = (id) => {
    setLectureItemId(id);
  };

  return (
    <>
      <button onClick={() => handleDetailBtn(id)} className="lectureNavigate-btn lectureDetail">
        <img src="/assets/img/btn/exclamation.svg" alt="!모양 아이콘" />
        과목 상세보기
      </button>
      <button
        data-bs-toggle="modal"
        data-bs-target="#lectureModal"
        onClick={() => handleCancelBtn(id)}
        className="lectureNavigate-btn lectureCancel"
      >
        <img src="/assets/img/btn/close.svg" alt="X모양 아이콘" />
        수강신청취소
      </button>
    </>
  );
}
