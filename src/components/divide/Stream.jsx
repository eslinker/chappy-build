import React, {useEffect, useState} from 'react';
import axios from "axios";

function Stream() {
    const [activityData, setActivityData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const ActivityGet = await axios.get('model/activity.json')
                setActivityData(ActivityGet.data);
            } catch (e) {
                console.error('데이터 가져오는 것을 실패하였습니다.', e);
            }
        }
        fetchData();
    }, []);
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">학습활동</h5>
                <p className='today'>오늘</p>
                <div className='activity-title'>
                    <span className='date'>2023년 12월 19일</span>
                    <p className='dayOftheweek'>화요일</p>
                </div>
                <div className="activity">
                <div className="dark horizontal my-0"></div>
                    { activityData && activityData.map(data => {
                        let getColor = "#" + Math.round(Math.random() * 0xffffff).toString(16);
                        return (
                    <div className="activity-item d-flex">
                        <div className="activite-label"></div>
                        <i className='bi bi-circle-fill activity-badge align-self-start' style={{color: getColor}}></i>
                        <div className="activity-content">
                            <p className='actTitle'>{data.acttitle} <span className='padding-spacing'>{data.activity}</span></p>
                            <p>마감 {data.untilDate}</p>
                        </div>
                    </div>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    );
}

export default Stream;