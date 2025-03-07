import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <>
    <h1 className="header">{todos.length === 0 ? 'No todos' : 'Todo List'}</h1>
    <ul className="list">
      {todos.map(todo => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        )
      })}
    </ul>
    </>
  );
}

export default TodoList;