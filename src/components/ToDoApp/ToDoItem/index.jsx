import React from 'react';
import DeleteButton from '../../forms/fields/DeleteButton';
import Checkbox from '../../forms/fields/Checkbox';
import styles from './ToDoItem.module.css';
import Classnames from 'classnames';

const ToDoItem = (props) => {
  const {
    toDoItem: { id, toDo, isDone },
    removeToDoItem,
    toggleToDo,
  } = props;

  const toDoItemClasses = Classnames(styles.toDoItemContainer, {
    [styles.isDone]: isDone,
  });
  return (
    <li className={toDoItemClasses}>
      <Checkbox value={isDone} onChange={() => toggleToDo(id)}>
        {toDo}
      </Checkbox>

      <DeleteButton deleteItems={removeToDoItem} itemID={id} />
    </li>
  );
};

export default ToDoItem;
