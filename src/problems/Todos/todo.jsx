import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from 'uuid';
import './todo.css';

function TodoList() {
  const inputRef = useRef(null);
  const [error, setError] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    const value = inputRef.current.value.trim();
    if(!value) alert('Please enter a valid todo name');
    if(value){
      const todoItem = { id: uuidv4(), text: value, completed: false }
      setTodos([...todos, todoItem]);
      inputRef.current.value='';
    }
  }

  const markAsCompleted = (id) => {
    const selectedTodo = todos.find(todo => todo.id === id);
    selectedTodo.completed = !selectedTodo.completed;
    setTodos([...todos]);
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="todo-app">
      <h2>Todo List</h2>
      <div className="todo-header">
        <input
          placeholder='Enter todo'
          ref={inputRef}
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <div className='todo-container'>
        {todos.length > 0 && todos.map(todo =>
          <div className="todo-item" key={todo.id}>
            <input
              type='checkbox'
              checked={todo.completed}
              onChange={() => markAsCompleted(todo.id)}
            />
            <span className={`${todo.completed ? 'strike' : ''}`}>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        )}
      </div>

    </div>
  );
}

export default TodoList;