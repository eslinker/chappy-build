import React from 'react';
import LectureBtn from './LectureBtn';
import LectureDetailBtn from './lectureDetailBtn';

export default function LectureList({ previewImg, title, period, percent, pending, link, type, pendingName }) {
  return (
    <>
      <li className="row border-top mx-0" style={{ height: '76px' }}>
        <div className="lecturePreview-box col-3 d-flex align-items-center" style={{ color: '#333843' }}>
          <img className="lecturePreview-image" width={46} height={39} src={previewImg} alt="미리보기 이미지" />
          <p className="lecturePreview-title m-0">{title}</p>
        </div>

        <div className="lecturePreview-period col-2 d-flex align-items-center" style={{ color: '#6B6B6B ' }}>
          <span>{period[0]}</span>
          <span className="mx-1">~</span>
          <span>{period[1]}</span>
        </div>

        <div
          className={`lecturePreview-progress  d-flex flex-column ${
            type === 'termination' || type === 'complete' ? 'invisible' : ''
          } ${pending ? 'col-3' : 'col-5'}`}
        >
          {pending ? (
            <div className="lecturePending">
              <p>{pendingName === 'course' ? '수강 대기중' : '결제 대기중'}</p>
            </div>
          ) : (
            <>
              <div>
                <p className="m-0">{percent}%</p>
              </div>
              <div>
                <progress className="w-50" value={percent} max="100"></progress>
              </div>
            </>
          )}
        </div>

        <div className={`${pending ? 'col-4' : 'col-2'} d-flex justify-content-end align-items-center pr-3`}>
          {type === 'registering' ? <LectureDetailBtn /> : <LectureBtn type={type} link={link} />}
        </div>
      </li>
    </>
  );
}
