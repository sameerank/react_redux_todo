import React from 'react';

const FilterButton = (props) => {
  return (
    <div>
      <a href="#" onClick={props.toggleFilter}>{props.filter}</a>
    </div>
  );
}

export default FilterButton;
