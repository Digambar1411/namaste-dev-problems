import React, { useState, useRef, useCallback } from 'react';
import './sort.css';

const SortableList = () => {

  const inputRef = useRef(null);
  const [items, setItems] = useState([]);

  const addItem = () => {
    const text = inputRef.current.value.trim();
    if (!text) return
    setItems([...items, text]);
    inputRef.current.value = '';
  }

  const sortItems = useCallback((order) => {
    setItems((prev)=>{
      return [...prev].sort((a, b) => order === 'asc' ? a.localeCompare(b) : b.localeCompare(a))
  });
  }, []);

  return (
    <div className="sortable-list-container">
      <h3>Sortable List</h3>
      <input
        type="text"
        placeholder="Add a new item"
        ref={inputRef}
      />
      <button onClick={addItem}>Add Item</button>
      <div>
        <button onClick={()=>sortItems('asc')}>Sort Ascending</button>
        <button onClick={()=>sortItems('desc')}>Sort Descending</button>
      </div>
      <div className="list-items">
        {items.length > 0 &&
          items.map((item, index) => <div key={index} id={`item-${index}`} >{item}</div>)
        }
      </div>
    </div>
  );
};

export default SortableList;
