import { useRecoilState } from 'recoil';
import Home from '../../components/common/Home';
import LectureList from '../../components/common/LectureList';
import LectureListTitle from '../../components/common/LectureListTitle';
import LecturePopup from '../../components/common/LecturePopup';
import SearchBox from './searchBox';
import { lectureState } from '../../recoil/atoms/lectureState';

export default function Termination() {
  const [data, setData] = useRecoilState(lectureState);
  return (
    <>
      <main id="main" className="main">
        <Home title="수강신청중" main="MY CLASS" />
        <SearchBox />

        <div className="lecture-container ">
          <h3>과목 (수강신청중)</h3>
          <ul className="p-0">
            <LectureListTitle type={'registering'} />
            {data.map(({ id, previewImg, title, period, percent, link, pendingName }) => {
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
                  type={'registering'}
                  pendingName={pendingName}
                />
              );
            })}
          </ul>
        </div>
        <LecturePopup />
      </main>
    </>
  );
}
