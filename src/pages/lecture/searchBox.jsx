import React, { useState } from 'react';

function SearchBox(props) {
  const [content, setContent] = useState('');
  const [visible, setVisible] = useState(true);

  const handleFocus = () => {
    setVisible(false);
  };
  const handleBlur = () => {
    if (content === '') setVisible(true);
  };
  const handleSetContent = (e) => {
    setContent(e.target.value);
  };

  return (
    <div className="w-100 mt-4 search-block">
      {visible && <i className="bi bi-search input-search" id="searchIcon"></i>}
      <input
        type="text"
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="과목명 검색"
        className="w-100 search-box px-4 py-3"
        onChange={(e) => {
          handleSetContent(e);
        }}
      />
    </div>
  );
}

export default SearchBox;
