import React from 'react'
import { useNavigate } from 'react-router'

export default function LectureList({previewImg,title,period,percent, link}) {
   
  const navigate = useNavigate();

  const goToLecture = (link)=>{
    navigate(`/${link}`);
  }

  return (
    <>
    <li className='row border-top mx-0' style={{height:'76px'}}>
      <div className='lecturePreview-box col-3 d-flex align-items-center' style={{color:'#333843'}}>
        <img className='lecturePreview-image' width={46} height={39} src={previewImg} alt='미리보기 이미지' />
        {/* <img className='lecturePreview-image' src='./assets/img/lecture_preview.jpg' alt='미리보기 이미지' /> */}
        <p className='lecturePreview-title m-0'>{title}</p>
      </div>

      <div className='lecturePreview-period col-2 d-flex align-items-center' style={{color:'#6B6B6B '}}>
        <span>{period[0]}</span>
        <span className='mx-1'>~</span>
        <span>{period[1]}</span>
      </div>

      <div className='lecturePreview-progress col-6 d-flex flex-column'>
        <div>
          <p className='m-0'>{percent}%</p>
        </div>
        <div>
          <progress className='w-50' value='90' max='100'></progress>
        </div>
      </div>

      <div className='col-1 d-flex justify-content-end align-items-center px-0'>
        <button onClick={goToLecture} className='lectureNavigate-btn border border-0 rounded-5'>강의실 가기</button>
      </div>

    </li>
    </>
  )
}

