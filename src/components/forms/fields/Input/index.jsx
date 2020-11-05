import React from 'react';
import { useField } from 'formik';

const Input = (props) => {
  const [field] = useField(props);

  return (
    <>
      <label>
        <input {...field} {...props} />
      </label>
    </>
  );
};

export default Input;
