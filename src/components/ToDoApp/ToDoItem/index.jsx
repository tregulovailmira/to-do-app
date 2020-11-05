import React, { useState } from 'react';
import DeleteButton from '../../forms/fields/DeleteButton';
import Checkbox from '../../forms/fields/Checkbox';

const ToDoItem = (props) => {
  const {
    toDoItem: { id, toDo, isDone },
    removeToDoItem,
    toggleToDo,
  } = props;
  return (
    <li>
      <Checkbox value={isDone} onChange={() => toggleToDo(id)} />
      {toDo}
      <DeleteButton deleteItems={removeToDoItem} itemID={id} />
    </li>
  );
};

export default ToDoItem;
