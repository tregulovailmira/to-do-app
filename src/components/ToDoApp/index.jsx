import React, { useState } from 'react';
import useToDoList from '../hooks/ToDoList';
import ToDoItem from './ToDoItem';
import ToDoListForm from '../forms/ToDoListForm';
import styles from './ToDoApp.module.css';

const ToDoApp = () => {
  const [toDoList, addToDoItem, removeToDoItem, toggleToDo] = useToDoList();

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
