import React from 'react';

function App() {
  return (
    <div style={{ width: '400px', margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>To-Do List</h1>

      {/* form cv */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Nhập công việc..."
          style={{ flex: 1, padding: '8px' }}
        />
        <button>Thêm</button>
      </div>

      {/* nút lọc */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <button style={{ marginRight: '10px' }}>Tất cả</button>
        <button style={{ marginRight: '10px' }}>Đang làm</button>
        <button>Hoàn thành</button>
      </div>

      {/* Danh sách công việc mẫu */}
      <div>
        <div style={{ marginBottom: '10px' }}>
          <input type="checkbox" />
          <span style={{ margin: '0 10px' }}>✅ Học React</span>
          <button>Xóa</button>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input type="checkbox" />
          <span style={{ margin: '0 10px' }}>📘 Làm báo cáo niên luận</span>
          <button>Xóa</button>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input type="checkbox" />
          <span style={{ margin: '0 10px' }}>📝 Vẽ phác thảo UI</span>
          <button>Xóa</button>
        </div>
      </div>
    </div>
  );
}

export default App;
