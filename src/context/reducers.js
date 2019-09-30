const initialState = {
  todos: []
};

const types = {
  ADD_TODO: 'ADD_TODO:',
  REMOVE_TODO: 'REMOVE_TODO'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case types.REMOVE_TODO:
      var arr = state.todos;
      arr.splice(action.payload, 1);
      return {
        ...state,
        todos: arr
      };
    default:
      throw new Error('Unexpected action');
  }
};
export { initialState, types, reducer };
