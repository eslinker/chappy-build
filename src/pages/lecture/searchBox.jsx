import React from 'react';


const focusHandler = () => {
    const focusIcon = document.getElementById('searchIcon');

}
function SearchBox(props) {
    return (
        <div className='w-100 mt-4 search-block'>
            <i className="bi bi-search input-search" id='searchIcon'></i>
            <input type='text' placeholder='과목명 검색' className='w-100 search-box' onClick={focusHandler}/>
        </div>
    );

}

export default SearchBox;