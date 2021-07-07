import { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './index.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  const uniqueLocalStorageKey = 'react-todo-key';

  useEffect(() => {
    const localStorageData = JSON.parse(
      localStorage.getItem(uniqueLocalStorageKey)
    );
    if (localStorageData) {
      setTodos(localStorageData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(uniqueLocalStorageKey, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completeTaskHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        if (id === todo.id) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }
        return todo;
      })
    );
  };

  return (
    <div className='app'>
      <div>
        <header>
          <h1>React Todo App</h1>
          <h3 className='task-info'>List of tasks: {todos.length}</h3>
        </header>
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          completeTaskHandler={completeTaskHandler}
        />
      </div>
    </div>
  );
};

export default App;
