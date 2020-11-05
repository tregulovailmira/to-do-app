import React, { useState } from 'react';
import { generateID } from '../../helper';
import ToDoItem from './ToDoItem';
import ToDoListForm from '../forms/ToDoListForm';
import styles from './ToDoApp.module.css';

const ToDoApp = () => {
  const [toDoList, setToDoList] = useState([]);

  const addToDoItem = (toDo) => {
    const toDoItem = {
      id: generateID(),
      toDo,
      isDone: false,
    };
    setToDoList([...toDoList, toDoItem]);
  };

  const removeToDoItem = (itemID) => {
    setToDoList(toDoList.filter(({ id }) => id !== itemID));
  };

  const toggleToDo = (itemID) => {
    setToDoList(
      toDoList.map((toDoItem) =>
        itemID !== toDoItem.id
          ? toDoItem
          : { ...toDoItem, isDone: !toDoItem.isDone }
      )
    );
  };

  const renderToDoList = () => {
    return (
      Boolean(toDoList.length) && (
        <ul className={styles.toDoList}>
          {toDoList.map((toDoItem) => (
            <ToDoItem
              key={toDoItem.id}
              toDoItem={toDoItem}
              removeToDoItem={removeToDoItem}
              toggleToDo={toggleToDo}
            />
          ))}
        </ul>
      )
    );
  };

  return (
    <article className={styles.toDoAppContainer}>
      <ToDoListForm onSubmit={addToDoItem} />
      {renderToDoList()}
    </article>
  );
};

export default ToDoApp;
