import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

export default function GlobalNav() {


    const [notifyData, setNotifyData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const notifyGet = await axios.get('model/notify.json')
                setNotifyData(notifyGet.data);
            } catch (e) {
                console.error('데이터 가져오는 것을 실패하였습니다.', e);
            }
        }

        fetchData();
    }, []);
     const notifyCount = notifyData.length;
    return (
        <header id="header" className="header fixed-top d-flex align-items-center">

            <div className="d-flex align-items-center justify-content-between">
                <Link to="/" className="logo d-flex justify-content-center">
                    <img src="/assets/img/1.svg" alt=""/>
                </Link>
                <i className="bi bi-list toggle-sidebar-btn d-block d-lg-none" onClick={() => {
                    document.body.classList.toggle('toggle-sidebar');
                }}></i>
            </div>
            <div className="d-flex menuItem">
                <span><Link to="">소개</Link></span>
                <span><Link to="">공지</Link></span>
                <span><Link to="">문의</Link></span>
                <span><Link to="">강의</Link></span>
            </div>

            <nav className="header-nav ms-auto">
                <ul className="d-flex align-items-center">
                    <li className="nav-item dropdown pe-3">
                        <Link className="nav-link nav-profile d-flex align-items-center pe-0" to="#"
                              data-bs-toggle="dropdown">
                            <img src="/assets/img/user.svg" alt="Profile" className="rounded-circle"/>
                            <span className="d-none d-md-block dropdown-toggle ps-2">이은지</span>
                        </Link>

                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                            <li className="dropdown-header">
                                <h6>이은지</h6>
                                <span>국제경영학부</span>
                            </li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>

                            <li>
                                <Link className="dropdown-item d-flex align-items-center" to="#">
                                    <i className="bi bi-person"></i>
                                    <span>내 프로필</span>
                                </Link>
                            </li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>

                            <li>
                                <Link className="dropdown-item d-flex align-items-center" to="#">
                                    <i className="bi bi-gear"></i>
                                    <span>계정 설정</span>
                                </Link>
                            </li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>

                            <li>
                                <Link className="dropdown-item d-flex align-items-center" to="#">
                                    <i className="bi bi-question-circle"></i>
                                    <span>FAQ</span>
                                </Link>
                            </li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>

                            <li>
                                <Link className="dropdown-item d-flex align-items-center" to="#">
                                    <i className="bi bi-box-arrow-right"></i>
                                    <span>로그아웃</span>
                                </Link>
                            </li>

                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link nav-icon" to="#" data-bs-toggle="dropdown">
                            <i className="bi bi-bell"></i>
                            <span className="badge bg-primary badge-number">{notifyCount}</span>
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                            <li className="dropdown-header">
                                새로운 알림 {notifyCount}건이 있습니다.
                                <Link to="#"><span
                                    className="badge rounded-pill bg-primary p-2 ms-2">View all</span></Link>
                            </li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>
                            {
                                notifyData && notifyData.map(data => {
                                    return (
                                        <>
                                            <li key={uuidv4()} className="notification-item pe-5">
                                                <i className="bi bi-bell-fill"></i>
                                                <div>
                                                    <h4>{data.enrollmentTitle}</h4>
                                                    <p>{data.assignmentTitle}</p>
                                                </div>
                                            </li>
                                            <li key={uuidv4()}>
                                                <div className="dropdown-divider"></div>
                                            </li>
                                        </>
                                    )
                                })
                            }
                            <li className="dropdown-footer">
                                <Link to="#">더보기</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
