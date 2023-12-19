import React from 'react'
import {Link} from 'react-router-dom'

function MenuitemSub(props) {
    return (
        <>
            <div className="nav-item">
                <Link className="nav-link collapsed" to={props.link}>
                    <i className={'bi ' + props.icon}></i>
                    <span>{props.title}</span>
                </Link>
            </div>
        </>
    )
}

export default MenuitemSub