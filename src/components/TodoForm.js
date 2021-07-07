import { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    id: '',
    text: '',
    isCompleted: false,
  });

  const onChangeHandler = (e) => {
    setTodo({ ...todo, text: e.target.value });
  };

  const onSubmitHandler = (e) => {
    if (todo.text !== '') {
      addTodo({ ...todo, id: Math.floor(Math.random() * 100000) });
      setTodo({ ...todo, text: '' });
    }
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type='text'
        onChange={onChangeHandler}
        name='text'
        value={todo.text}
        placeholder='Add new todo'
        autoComplete='off'
        className='user-input'
      />
      <button type='submit' className='submit-button'>
        Submit
      </button>
    </form>
  );
};

export default TodoForm;
