import React, {useEffect, useState} from 'react';
import axios from "axios";

export default function SmallBoard() {
    const [boardData, setBoardData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const getBoardDate = await axios.get('/model/board.json')
            setBoardData(getBoardDate.data)
        }
        fetchData()
    }, []);
    return (
        <div className='col-md-6'>
            <div className="card">
                <div className="card-head">
                    <div className="card-title">학습 게시판</div>
                </div>
                <div className="card-body">
                    <p className='card-small'>신규순</p>
                        {
                            boardData && boardData.map(data => {
                                return (
                                    <table className='table table-borderless'>
                                        <tbody>
                                        <tr>
                                            <td className='courseName'>{data.title}</td>
                                        </tr>
                                        <tr>
                                            <td className='subText text-start'>
                                                {data.subTitle}
                                            </td>
                                            <td className='subDate text-end'>
                                                {data.writeDate}
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                )
                            })
                        }
                </div>
            </div>
        </div>
    );
}
