import React from 'react'
import {Link} from 'react-router-dom'

function Menuitem(props) {
    return (
        <>
            <div className="nav-item">
                <Link className="nav-link" to="/">
                    <i className={'bi ' + props.icon}></i>
                    <span>{props.title}</span>
                </Link>
            </div>
        </>
    )
}

export default Menuitem