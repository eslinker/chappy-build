// TODO 전체 버튼 손보기
import { useRecoilState } from 'recoil';
import Home from '../../components/common/Home';
import LectureList from '../../components/common/LectureList';
import LectureListTitle from '../../components/common/LectureListTitle';
import { lectureState } from '../../recoil/atoms/lectureState';
import ReviewSideBar from '../../components/common/ReviewSIdeBar';
import { useEffect, useState } from 'react';
import { activityState } from '../../recoil/atoms/activityState';

export default function Activity() {
  const [viewList, setViewList] = useState([]);
  const [activeButton, setActiveBtn] = useState(0);
  const [visibleSideBar, setVisibleSideBar] = useRecoilState(activityState);
  const [lectureData] = useRecoilState(lectureState);

  const lectureIssuanceCompleted = lectureData.filter((item) => item.pendingIssuance === true);
  const lectureIssuanceWaiting = lectureData.filter((item) => item.pendingIssuance !== true);

  const handleAllViewData = () => {
    setViewList(lectureData);
    setActiveBtn(0);
  };
  const handleFilterCompletedDate = () => {
    setViewList(lectureIssuanceCompleted);
    setActiveBtn(1);
  };
  const handleFilterWaitingDate = () => {
    setViewList(lectureIssuanceWaiting);
    setActiveBtn(2);
  };

  useEffect(() => {
    setViewList(lectureData);
    return () => setVisibleSideBar(false);
  }, []);

  return (
    <>
      <main id="main" className="main">
        <Home title="이수중" main="CERTIFICATION " />

        <div className="activityListContainer">
          <div className="list-group activityListItem">
            <button
              onClick={handleAllViewData}
              type="button"
              className={`list-group-item list-group-item-action ${activeButton === 0 && 'activity-active'}`}
            >
              <span>
                전체 (<span>{lectureData.length}</span>)
              </span>
            </button>
            <button
              onClick={handleFilterCompletedDate}
              type="button"
              className={`list-group-item list-group-item-action ${activeButton === 1 && 'activity-active'}`}
            >
              <span>
                발급완료(<span>{lectureIssuanceCompleted.length}</span>)
              </span>
            </button>
            <button
              onClick={handleFilterWaitingDate}
              type="button"
              className={`list-group-item list-group-item-action ${activeButton === 2 && 'activity-active'}`}
            >
              <span>
                발급대기(<span>{lectureIssuanceWaiting.length}</span>)
              </span>
            </button>
          </div>
        </div>

        <div className="lecture-container ">
          <h3>과목</h3>
          <ul className="p-0">
            <LectureListTitle type={'activity'} />
            {viewList.map(({ id, previewImg, title, period, percent, link, pendingName, pendingIssuance }) => {
              return (
                <LectureList
                  key={id}
                  id={id}
                  previewImg={previewImg}
                  title={title}
                  period={period}
                  percent={percent}
                  link={link}
                  pending={true}
                  type={'activity'}
                  pendingName={pendingName}
                  pendingIssuance={pendingIssuance}
                />
              );
            })}
          </ul>
        </div>
      </main>
      {visibleSideBar && <ReviewSideBar />}
    </>
  );
}
