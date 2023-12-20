import React from 'react';
import { Link } from 'react-router-dom';

function DropdownSubmenuItem(props) {
  return (
    <div>
      <Link to={props.path}>
        <span>{props.title}</span>
      </Link>
    </div>
  );
}

export default DropdownSubmenuItem;
