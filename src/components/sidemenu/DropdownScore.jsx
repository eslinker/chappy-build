import React from 'react'
import DropdownSubmenuItem from './DropdownSubmenuitem';
import {Link} from "react-router-dom";

function DropdownScore(props) {
    const submenu = {
        "menuItem": [
            {
                title: "진행중",
                path: "/lecture"
            },
            {
                title: "종료",
                path: "/score"
            },
            {
                title: "이수",
                path: "/score"
            },
            {
                title: "수강신청 중",
                path: "/score"
            }
        ]
    }
    return (

        <div className="nav-item">
            <Link className="nav-link collapsed" data-bs-target={'#'+props.id} data-bs-toggle="collapse" to="#">
                <i className={'bi ' + props.icon}></i><span>{props.title}</span><i className="bi bi-chevron-down ms-auto"></i>
            </Link>
            <ul id={props.id} className="nav-content list-unstyled collapse" data-bs-parent="#sidebar-nav">
                <DropdownSubmenuItem title = {submenu.menuItem[0].title} path={submenu.menuItem[0].path}/>
                <DropdownSubmenuItem title = {submenu.menuItem[1].title} path={submenu.menuItem[1].path}/>
                <DropdownSubmenuItem title = {submenu.menuItem[2].title} path={submenu.menuItem[1].path}/>
                <DropdownSubmenuItem title = {submenu.menuItem[3].title} path={submenu.menuItem[1].path}/>
            </ul>
        </div>
    )
}

export default DropdownScore;