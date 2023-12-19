import React from 'react';
import {Link} from "react-router-dom";

const Home = (props) => {
    return (
        <>
            <nav>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="#">채피 홈</Link></li>
                    <li className="breadcrumb-item active">{props.title}</li>
                </ol>
            </nav>
            <span className='text-uppercase dash-title'>{props.main}</span>
        </>
    );
};

export default Home;