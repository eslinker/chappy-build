import React from 'react';

function Alarm() {
    return (
        <div className="card">
            <div className="card-header p-4 pt-4">
                <div
                    className="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                    <i className="material-icons opacity-10">rocket_launch</i>
                </div>
                <div className="text-end pt-1">
                    <p className="text-sm mb-0 text-capitalize alarm-text">신규과제</p>
                    <h4 className="mb-0 text-black">4개</h4>
                </div>
            </div>
            <div className="dark horizontal my-0"></div>
            <div className="card-header p-4 pt-4">
                <div
                    className="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
                    <i className="material-icons opacity-10">emoji_events</i>
                </div>
                <div className="text-end pt-1">
                    <p className="text-sm mb-0 text-capitalize alarm-text">신규퀴즈</p>
                    <h4 className="mb-0 text-black">1개</h4>
                </div>
            </div>
            <div className="dark horizontal my-0"></div>
            <div className="card-header p-4 pt-4">
                <div
                    className="icon icon-lg icon-shape bg-gradient-faded-warning-vertical shadow-warning text-center border-radius-xl mt-n4 position-absolute">
                    <i className="material-icons text-dark">calendar_month</i>
                </div>
                <div className="text-end pt-1">
                    <p className="text-sm mb-0 text-capitalize alarm-text">이번주 출석현황</p>
                    <h4 className="mb-0 text-black">3일</h4>
                </div>
            </div>
            <div className="dark horizontal my-0"></div>
            <div className="card-header p-4 pt-4">
                <div
                    className="icon icon-lg icon-shape bg-gradient-faded-secondary-vertical shadow-secondary text-center border-radius-xl mt-n4 position-absolute">
                    <i className="material-icons text-dark">terminal</i>
                </div>
                <div className="text-end pt-1">
                    <p className="text-sm mb-0 text-capitalize alarm-text">오늘 코딩시간</p>
                    <h4 className="mb-0 text-black">95분</h4>
                </div>
            </div>
            <div className="dark horizontal my-0"></div>
        </div>
    );
}

export default Alarm;