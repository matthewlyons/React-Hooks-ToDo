import React, { useContext } from 'react';
import { ListGroup } from 'reactstrap';
import ToDo from './ToDo';

import { StoreContext } from '../context/StoreContext';

export default function List() {
  const { state } = useContext(StoreContext);
  return (
    <ListGroup>
      {state.todos.map((item, index) => (
        <ToDo key={index} item={item} index={index} />
      ))}
    </ListGroup>
  );
}
