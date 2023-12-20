import React from 'react'
import LectureBtn from './LectureBtn'

export default function LectureList({previewImg,title,period,percent, link}) {
  return (
    <>
    <li className='row border-top mx-0' style={{height:'76px'}}>
      <div className='lecturePreview-box col-3 d-flex align-items-center' style={{color:'#333843'}}>
        <img className='lecturePreview-image' width={46} height={39} src={previewImg} alt='미리보기 이미지' />
        <p className='lecturePreview-title m-0'>{title}</p>
      </div>

      <div className='lecturePreview-period col-2 d-flex align-items-center' style={{color:'#6B6B6B '}}>
        <span>{period[0]}</span>
        <span className='mx-1'>~</span>
        <span>{period[1]}</span>
      </div>

      <div className='lecturePreview-progress col-5 d-flex flex-column'>
        <div>
          <p className='m-0'>{percent}%</p>
        </div>
        <div>
          <progress className='w-50' value={percent} max='100'></progress>
        </div>
      </div>

      <div className='col-2 d-flex justify-content-end align-items-center pr-3'>
        <LectureBtn type={'review'}/>
      </div>

    </li>
    </>
  )
}

