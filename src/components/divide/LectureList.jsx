import React, {useEffect, useState} from 'react';
import axios from "axios";

function LectureList() {
    const [lectureData, setLectureData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const lectureGet = await axios.get('model/lecture.json')
                setLectureData(lectureGet.data);
            } catch (e) {
                console.error('데이터 가져오는 것을 실패하였습니다.', e);
            }
        }
        fetchData();
    }, []);
    return (
        <div className='col-md-12'>
            <div className="card">
                <div className="card-head">
                    <div className='h5 card-title'>
                        수강과목
                        <span className='fw-bold lecCount'>4</span>
                    </div>
                    <div className="lecRec">
                        <i className='bi bi-arrow-right-circle-fill arrow align-middle'></i>
                    </div>
                </div>
                <div className="card-body">
                    <div className="small-box">
                        <p className='card-small'>과목명</p>
                    </div>
                    <div className="table table-borderless p-1 text-center">
                        <table className='w-100'>
                            {
                                lectureData && lectureData.map(data => {
                                    return (
                                        <tr className='small-box'>
                                            <td>
                                                <img src={data.imgUrl} className='small-pic' alt=""/>
                                            </td>
                                            <td className='text-start'>
                                                <span className='courseName'>{data.courseName}</span>
                                            </td>
                                            <td>

                                                <span className='smallTitle'>{data.smallTitle}</span>
                                            </td>
                                            <td>
                                                <button className='btn lecBtn'><i className='bi bi-plus-circle'></i>이어서
                                                    학습
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LectureList;