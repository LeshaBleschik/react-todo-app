import { CgCloseO } from 'react-icons/cg';

const Todo = ({ todo, deleteTodo, completeTaskHandler }) => {
  const deleteHandler = () => {
    deleteTodo(todo.id);
  };

  const ckeckBoxHandler = () => {
    completeTaskHandler(todo.id);
  };

  return (
    <div className={todo.isCompleted ? 'completed' : ''}>
      <li className='list-item'>
        <span>{todo.text}</span>
        <div className='input-button-container'>
          <input
            type='checkbox'
            onClick={ckeckBoxHandler}
            readOnly
            checked={todo.isCompleted}
          />
          <span className='delete-btn' onClick={deleteHandler}>
            <CgCloseO />
          </span>
        </div>
      </li>
    </div>
  );
};

export default Todo;
