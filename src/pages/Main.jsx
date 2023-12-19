import React from 'react'
import Home from "../components/common/Home";
import LectureList from "../components/divide/LectureList";
import SmallBoard from "../components/common/SmallBoard";
import StudyBoardMain from "../components/common/StudyBoardMain";
import QnaConfirm from "../components/common/qnaConfirm";
import Stream from "../components/divide/Stream";
import Alarm from "../components/divide/Alarm";

export default function Main() {
    return (
        <>
            <main id='main' className='main'>
                <Home title="대시보드 홈" main="MY DASHBOARD"/>
                <section className='section dashboard py-4'>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row">
                                <LectureList/>
                                <SmallBoard/>
                                <StudyBoardMain/>
                                <QnaConfirm/>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <Alarm/>
                            <Stream/>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
