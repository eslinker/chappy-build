import React from 'react';
import Home from "../../components/common/Home";
import SearchBox from "./searchBox";

function Lecture() {
    return (
       <>
           <main id='main' className='main'>
               <Home title="진행 중" main='MY CLASS' />
               <SearchBox />
           </main>
       </>
    );
}

export default Lecture;