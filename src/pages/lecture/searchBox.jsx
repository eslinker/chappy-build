import React from 'react';

function SearchBox(props) {
    return (
        <div className='w-100 mt-4 search-block'>
            <i className="bi bi-search input-search"></i>
            <input type='text' placeholder='과목명 검색' className='w-100 search-box'/>
        </div>
    );

}

export default SearchBox;