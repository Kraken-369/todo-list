const TodoItem = ({ completed, id, title, toggleTodo, deleteTodo }) => {
  return (
    <li>
      <label>
        <input
          checked={completed}
          onChange={e => toggleTodo(id, e.target.checked)}
          type="checkbox"
        />
        {title}
      </label>
      <button className="btn btn-danger" onClick={() => deleteTodo(id)}>Delete</button>
    </li>
  );
}

export default TodoItem;