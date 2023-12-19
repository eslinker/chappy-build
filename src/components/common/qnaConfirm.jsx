import React, {useEffect, useState} from 'react';
import axios from "axios";
import {v4 as uuidv4} from 'uuid';

export default function QnaConfirm() {
    const [qnaData, setQnaData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const getQnaData = await axios.get('model/qna.json')
                setQnaData(getQnaData.data)
            } catch (e) {
                console.error('데이터 가져오는 것을 실패하였습니다.', e);
            }
        }
        fetchData()
    }, []);
    return (
        <div className='col-md-12'>
            <div className="card">
                <div className="card-head">
                    <div className='h5 card-title small-box w-100'>
                        학습 Q&A - 받은 메세지함
                    </div>
                </div>
                <div className="card-body">
                    <span className='card-small'>신규순</span>
                    <div className="table table-borderless p-4">
                        <table className='table w-100'>
                            <thead className="small-box">
                            <tr>
                                <th className='small-th p-3'>보낸이</th>
                                <th className='small-th p-3'>제목</th>
                                <th className='small-th p-3'>일자</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                qnaData && qnaData.map(data => {
                                    return (
                                        <tr className='small-box' key={uuidv4()}>
                                            <td className='board-spacing p-3'>
                                                {data.sender}
                                            </td>
                                            <td className='board-spacing p-3'>
                                                RE: {data.qTitle}
                                            </td>
                                            <td className='board-spacing-sub p-3'>
                                                {data.receiveDate}
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

