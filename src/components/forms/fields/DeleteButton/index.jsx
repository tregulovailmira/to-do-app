import React from 'react';
import Icon from '@mdi/react';
import { mdiDelete } from '@mdi/js';

const DeleteButton = (props) => {
  const handleDelete = (e) => {
    const { deleteItems, itemID } = props;
    e.stopPropagation();
    deleteItems(itemID);
  };
  return <Icon path={mdiDelete} size={1} onClick={handleDelete} />;
};

export default DeleteButton;
