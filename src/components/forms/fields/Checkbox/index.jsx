import React from 'react';

const Checkbox = (props) => {
  const { onChange, value } = props;
  return (
    <label>
      <input type="checkbox" onChange={onChange} checked={value} />
    </label>
  );
};

export default Checkbox;
