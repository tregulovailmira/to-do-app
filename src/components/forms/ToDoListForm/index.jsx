import React from 'react';
import { Form, Formik } from 'formik';
import Input from '../fields/Input';
import Button from '../fields/Button';
import styles from './ToDoListForm.module.css';
import Classnames from 'classnames';

const ToDoListForm = (props) => {
  const { stylesClasses: { container } = {} } = props;
  const formClasses = Classnames(container, styles.formContainer);

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
      <Form className={formClasses}>
        <Input
          placeholder="Write here..."
          name="toDo"
          label="toDo"
          stylesClasses={{ container: styles.inputMargin }}
        />
        <Button type="submit">ADD</Button>
      </Form>
    </Formik>
  );
};

export default ToDoListForm;
