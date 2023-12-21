import { useEffect, useState } from 'react';

export default function LectureListTitle({ type }) {
  const [title, setTitle] = useState({
    subject: '',
    period: '',
    progress: '',
    other: '',
  });

  useEffect(() => {
    if (type === 'lecture') {
      setTitle({
        subject: '과목',
        period: '기간',
        progress: '학습 진행률',
        other: '',
      });
    }
    if (type === 'termination') {
      setTitle({
        subject: '과목',
        period: '기간',
        progress: '',
        other: '',
      });
    }
    if (type === 'complete') {
      setTitle({
        subject: '과목',
        period: '기간',
        progress: '',
        other: '',
      });
    }
    if (type === 'registering') {
      setTitle({
        subject: '과목',
        period: '기간',
        progress: '접수상황',
        other: '',
      });
    }
    if (type === 'activity') {
      setTitle({
        subject: '과목',
        period: '기간',
        progress: '상태',
        other: '이수증',
      });
    }
  }, [type]);

  const { subject, period, progress, other } = title;

  return (
    <li className="lectureListTitle row mx-0">
      <div className="col-3">
        <span style={{ paddingLeft: '32px' }}>{subject}</span>
      </div>
      <div className="col-2">{period}</div>
      <div className="col-5">{progress}</div>
      <div className="col-2">{other}</div>
    </li>
  );
}
