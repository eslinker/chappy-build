import React from 'react'
// eslint-disable-next-line no-unused-vars
import subMenuItem from './DropdownSubmenuitem';
import {Link} from "react-router-dom";

function DropdownScore(props) {
    const menuPath = {
        "menuItem": [
            {
                title: "공지사항",
                path: "/notice"
            },
            {
                title: "FAQ",
                path: "/faq"
            },
            {
                title: "자료실",
                path: "/datalist"
            },
            {
                title: "매뉴얼",
                path: "/menual"
            }
        ]
    }

    return (

        <div className="nav-item">
            <Link className="nav-link collapsed" data-bs-target={'#'+props.id} data-bs-toggle="collapse" to="#">
                <i className={'bi ' + props.icon}></i><span>{props.title}</span><i className="bi bi-chevron-down ms-auto"></i>
            </Link>
            <ul id={props.id} className="nav-content collapse " data-bs-parent="#sidebar-nav">
                <subMenuItem title = {menuPath.menuItem[0].title} path={menuPath.menuItem[0].path}/>
                <subMenuItem title = {menuPath.menuItem[1].title} path={menuPath.menuItem[1].path}/>
                <subMenuItem title = {menuPath.menuItem[2].title} path={menuPath.menuItem[2].path}/>
                <subMenuItem title = {menuPath.menuItem[3].title} path={menuPath.menuItem[3].path}/>
            </ul>
        </div>
    )
}

export default DropdownScore;