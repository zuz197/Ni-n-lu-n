import React, { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // Load từ Local Storage khi app khởi động
  useEffect(() => {
    const data = localStorage.getItem('todos');
    if (data) {
      setTodos(JSON.parse(data));
    }
  }, []);

  // Lưu vào Local Storage mỗi khi todos thay đổi
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (input.trim() === '') return;
    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false
    };
    setTodos([...todos, newTodo]);
    setInput('');
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleToggle = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div style={{ width: '400px', margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>To-Do List</h1>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Nhập công việc..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ flex: 1, padding: '8px' }}
        />
        <button onClick={handleAddTodo}>Thêm</button>
      </div>

      <div>
        {todos.length === 0 && <p>Chưa có công việc nào.</p>}
        {todos.map((todo) => (
          <div
            key={todo.id}
            style={{
              marginBottom: '10px',
              textDecoration: todo.completed ? 'line-through' : 'none'
            }}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggle(todo.id)}
            />
            <span style={{ margin: '0 10px' }}>{todo.text}</span>
            <button onClick={() => handleDelete(todo.id)}>Xóa</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
