import React, { useContext } from 'react';
import { ListGroupItem } from 'reactstrap';

import { StoreContext } from '../context/StoreContext';
import { types } from '../context/reducers';

export default function ToDo(prop) {
  const { dispatch } = useContext(StoreContext);

  const handleClick = (e) => {
    dispatch({ type: types.REMOVE_TODO, payload: prop.index });
  };
  return <ListGroupItem onClick={handleClick}>{prop.item}</ListGroupItem>;
}
