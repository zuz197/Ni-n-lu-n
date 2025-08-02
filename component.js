import React from 'react';

function TodoForm() {
  return (
    <div style={{ marginBottom: '20px' }}>
      <input type="text" placeholder="Nhập công việc..." />
      <button>Thêm</button>
    </div>
  );
}

function Filter() {
  return (
    <div style={{ marginBottom: '20px' }}>
      <button>Tất cả</button>
      <button>Đang làm</button>
      <button>Hoàn thành</button>
    </div>
  );
}

function TodoItem() {
  return (
    <div style={{ marginBottom: '10px' }}>
      <input type="checkbox" />
      <span style={{ margin: '0 10px' }}>Học React</span>
      <button>Xóa</button>
    </div>
  );
}

function TodoList() {
  return (
    <div>
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}

function App() {
  return (
    <div style={{ width: '400px', margin: '40px auto', textAlign: 'center' }}>
      <h1>To-Do List App</h1>
      <TodoForm />
      <Filter />
      <TodoList />
    </div>
  );
}

export default App;
