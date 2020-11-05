import React, { useState, useEffect } from 'react';
import { generateID } from '../../helper';
import ToDoItem from './ToDoItem';
import ToDoListForm from '../forms/ToDoListForm';

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
    return toDoList.map((toDoItem) => {
      return (
        <ToDoItem
          key={toDoItem.id}
          toDoItem={toDoItem}
          removeToDoItem={removeToDoItem}
          toggleToDo={toggleToDo}
        />
      );
    });
  };

  return (
    <>
      <ToDoListForm onSubmit={addToDoItem} />
      <ul>{renderToDoList()}</ul>
    </>
  );
};

export default ToDoApp;
