import { useRecoilState, useRecoilValue } from 'recoil';
import { lectureState } from '../../recoil/atoms/lectureState';
import { lecturePopupState } from '../../recoil/atoms/lecturePopupState';

export default function LecturePopup() {
  const [data, setData] = useRecoilState(lectureState);
  const [lectureId] = useRecoilValue(lecturePopupState);

  const handleCencelBtn = () => {
    const filterData = data.filter((el) => lectureId !== el.id);
    setData(filterData);
    alert('취소 되었습니다.');
  };

  return (
    <>
      <div className="modal fade" id="lectureModal" tabindex="-1" aria-labelledby="수강취소 모달" aria-hidden="true">
        <div className="lecturePopup modal-dialog">
          <div className="lecturePopup modal-content">
            <div className="lecturePopup modal-header">
              <div className="lecturePopup-warning">
                <img src="./assets/img/warning.svg" alt="경고 표시" />
              </div>
              <h3>수강 신청 취소</h3>
            </div>
            <div className="modal-body">
              <p>
                선택하신 과목의 수강 신청을 취소하시겠습니까?
                <br />
                취소된 수강신청은 번복이 불가합니다.
                <br />
                <span className="emphasis">
                  *환불신청은 <strong>결제내역</strong>에서 진행해 주시기바랍니다.
                </span>
              </p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                취소
              </button>
              <button
                onClick={handleCencelBtn}
                data-bs-toggle="modal"
                data-bs-target="#lectureModal"
                type="button"
                className="btn btn-primary"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
