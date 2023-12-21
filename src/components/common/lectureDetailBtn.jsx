export default function LectureDetailBtn() {
  //TODO 이벤트 내용 추가
  const handleDetailBtn = () => {};
  const handleCancelBtn = () => {};

  return (
    <>
      <button onClick={handleDetailBtn} className="lectureNavigate-btn lectureDetail">
        <img src="/assets/img/btn/exclamation.svg" alt="" />
        과목 상세보기
      </button>
      <button onClick={handleCancelBtn} className="lectureNavigate-btn lectureCancel">
        <img src="/assets/img/btn/close.svg" alt="" />
        수강신청취소
      </button>
    </>
  );
}
