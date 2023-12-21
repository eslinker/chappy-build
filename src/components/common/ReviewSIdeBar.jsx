import { useRecoilState } from 'recoil';
import { activityState } from '../../recoil/atoms/activityState';
import { activityTitleSideBar } from '../../recoil/atoms/activityTitleSideBar';

export default function ReviewSideBar() {
  const [visibleSideBar, setVisibleSideBar] = useRecoilState(activityState);
  const [activeTitle] = useRecoilState(activityTitleSideBar);
  const handleCloseSideBar = () => {
    setVisibleSideBar(!visibleSideBar);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('평가 완료');
  };
  return (
    <div className="review-sidebar mb-5">
      <button onClick={handleCloseSideBar} className="sideBar-closeBtn">
        <img src="./assets/img/btn/sidebarClose.svg" alt="닫기버튼" />
      </button>
      <form id="review-sidebar-form" action="#" onSubmit={handleSubmit}>
        <h2>수업 평가하기</h2>
        <div class="mb-3">
          <label for="LectureTitle" class="form-label">
            과목
          </label>
          <input
            disabled
            type="text"
            class="form-control"
            id="LectureTitle"
            value={activeTitle}
            aria-describedby="emailHelp"
          />
        </div>

        <div class="mb-3">
          <label for="lectureScale" class="form-label">
            전체 평점
          </label>
          <select class="form-select" id="lectureScale" aria-label="Default select example">
            <option value="5">5점</option>
            <option value="4">4점</option>
            <option value="3">3점</option>
            <option value="2">2점</option>
            <option value="1">1점</option>
          </select>
        </div>

        <div class="mb-3">
          <label for="InquiryDetails" class="form-label">
            전체 평점
          </label>
          <textarea
            className="w-100"
            name="InquiryDetails"
            id="InquiryDetails"
            placeholder="강의평을 남겨주세요"
          ></textarea>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="reviewSide-checkBox" />
          <label class="form-check-label" for="reviewSide-checkBox">
            <span className="text-decoration-underline">마케팅 활용정보 제공</span>에 모든 내용을 확인했으며, 이에
            동의합니다.
          </label>
        </div>

        <button className="w-100" type="submit">
          보내기
        </button>
      </form>
    </div>
  );
}
