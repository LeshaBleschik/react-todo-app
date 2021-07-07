import Todo from './Todo';

const TodoList = ({ todos, deleteTodo, completeTaskHandler }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          completeTaskHandler={completeTaskHandler}
        />
      ))}
    </ul>
  );
};

export default TodoList;
