import { useEffect, useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './css/style.css';

const App = () => {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem('ITEMS');
    
    if (localValue) {
      return JSON.parse(localValue);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(todos))
  }, [todos])

  const addTodo = title => {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(), 
          title,
          completed: false 
        }
      ]
    });
  }
  const toogleTodo = (id, completed) => {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed
          }
        }
        return todo;
      })
    });
  }
  const deleteTodo = (id) => {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id);
    });
  }

  return (
    <>
      <TodoForm onSubmit={addTodo} />
      <TodoList
        todos={todos}
        toggleTodo={toogleTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
}

export default App;