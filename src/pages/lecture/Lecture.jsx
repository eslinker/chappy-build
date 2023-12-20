import React from 'react';
import Home from "../../components/common/Home";
import SearchBox from "./searchBox";
import LectureList from '../../components/common/LectureList';


const data = {
    previewImg:'./assets/img/thumbnail/1.png',
    title: '입문자를 위한 파이썬 정보',
    period: ['20.10.10', '상시'],
    percent: 90,
    link : '#'
}

function Lecture() {


    const {previewImg, title, period, percent, link} = data

    return (
       <>
           <main id='main' className='main'>
               <Home title="진행 중" main='MY CLASS' />
               <SearchBox />

               {/* img, title, period, percent, */}
                <LectureList previewImg={previewImg} title={title} period={period} percent={percent} link={link}/>
           </main>
       </>
    );
}

export default Lecture;