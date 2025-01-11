import React, { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue.trim()]);
      setInputValue('');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Item List Manager</h1>
      <input
        type="text"
        placeholder="Enter item"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{
          padding: '8px',
          marginRight: '10px',
          fontSize: '14px',
          width: '200px',
        }}
      />
      <button
        onClick={handleAddItem}
        style={{
          padding: '8px 12px',
          fontSize: '14px',
          cursor: 'pointer',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
        }}
      >
        Add Item
      </button>
      <ul style={{ marginTop: '20px', listStyleType: 'none', padding: 0 }}>
        {items.map((item, index) => (
          <li
            key={index}
            style={{
              padding: '5px 0',
              borderBottom: '1px solid #ddd',
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;