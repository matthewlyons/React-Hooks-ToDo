import React, { useState, useContext } from 'react';
import { Input } from 'reactstrap';
import { StoreContext } from '../context/StoreContext';
import { types } from '../context/reducers';

export default function FormInput() {
  const { dispatch } = useContext(StoreContext);
  const [input, setInput] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: types.ADD_TODO, payload: input });
    setInput('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Add To Do'
      />
    </form>
  );
}
