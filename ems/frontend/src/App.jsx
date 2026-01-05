// frontend/src/App.jsx
import React from 'react'
import EmployeePage from './EmployeePage.jsx'

function App() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
      <h1>Employee Management System</h1>
      <EmployeePage />
    </div>
  )
}

export default App
