import Home from '../../components/common/Home';
import LectureList from '../../components/common/LectureList';
import LectureListTitle from '../../components/common/LectureListTitle';
import SearchBox from './searchBox';

const data = [
  {
    previewImg: './assets/img/thumbnail/1.png',
    title: '입문자를 위한 파이썬 정보',
    period: ['23.01.25', '상시'],
    percent: 90,
    link: '#',
  },
  {
    previewImg: './assets/img/thumbnail/1.png',
    title: '입문자를 위한 파이썬 정보 II',
    period: ['23.01.25', '상시'],
    percent: 50,
    link: '#',
  },
  {
    previewImg: './assets/img/thumbnail/1.png',
    title: '입문자를 위한 파이썬 정보 III',
    period: ['23.01.25', '상시'],
    percent: 20,
    link: '#',
  },
];

export default function Termination() {
  return (
    <>
      <main id="main" className="main">
        <Home title="종료" main="MY CLASS" />
        <SearchBox />

        <div className="lecture-container ">
          <h3>과목 (종료)</h3>
          <ul className="p-0">
            <LectureListTitle type={'termination'} />
            {data.map(({ previewImg, title, period, percent, link }) => {
              return (
                <LectureList
                  key={title}
                  previewImg={previewImg}
                  title={title}
                  period={period}
                  percent={percent}
                  link={link}
                  type={'termination'}
                />
              );
            })}
          </ul>
        </div>
      </main>
    </>
  );
}
