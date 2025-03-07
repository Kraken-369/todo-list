import React, { useState } from 'react';

const TodoForm = ({ onSubmit }) => {
  const [newItem, setNewItem] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem.trim() === '') return;
    onSubmit(newItem);
    setNewItem('');
  }

  return (
    <form action="" className="new-item-form" onSubmit={handleSubmit}>
      <div className='form-row'>
        <label htmlFor="item">New Item</label>
        <input
          id="item"
          onChange={e => setNewItem(e.target.value)}
          type="text"
          value={newItem}
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}

export default TodoForm;