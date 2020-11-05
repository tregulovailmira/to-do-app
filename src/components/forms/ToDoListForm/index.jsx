import React from 'react';
import { useField, Form, FormikProps, Formik, useFormik } from 'formik';
import Input from '../fields/Input';

const ToDoListForm = (props) => {
  const initialValues = {
    toDo: '',
  };

  const submitHandler = (values, formikBag) => {
    const { onSubmit } = props;
    onSubmit(values.toDo);
    formikBag.resetForm();
  };

  return (
    <Formik onSubmit={submitHandler} initialValues={initialValues}>
      <Form>
        <Input
          placeholder="Write here..."
          name="toDo"
          label="toDo"
        />
        <button type="submit">Add</button>
      </Form>
    </Formik>
  );
};

export default ToDoListForm;