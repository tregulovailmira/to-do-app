import { useState } from 'react';
import { generateID } from '../../../helper';

const useToDoList = () => {
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

  return [toDoList, addToDoItem, removeToDoItem, toggleToDo];
};

export default useToDoList;
