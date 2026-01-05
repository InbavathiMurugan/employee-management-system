import React, { useEffect, useState } from 'react'
import api from './api'

function EmployeePage() {
  const [employees, setEmployees] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '' })
  const [editingId, setEditingId] = useState(null)

  // Load all employees when page loads
  useEffect(() => {
    fetchEmployees()
  }, [])

  async function fetchEmployees() {
    try {
      setLoading(true)
      setError('')
      const res = await api.get('/api/employees')
      setEmployees(res.data)
    } catch (err) {
      console.error(err)
      setError('Failed to load employees')
    } finally {
      setLoading(false)
    }
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function startCreate() {
    setEditingId(null)
    setForm({ firstName: '', lastName: '', email: '' })
  }

  function startEdit(emp) {
    setEditingId(emp.id)
    setForm({
      firstName: emp.firstName,
      lastName: emp.lastName,
      email: emp.email,
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      setError('')

      if (!form.firstName || !form.lastName || !form.email) {
        setError('All fields are required')
        return
      }

      if (editingId === null) {
        // CREATE
        await api.post('/api/employees', form)
      } else {
        // UPDATE
        await api.put(`/api/employees/${editingId}`, form)
      }

      await fetchEmployees()
      startCreate() // reset form
    } catch (err) {
      console.error(err)
      setError('Failed to save employee (check email uniqueness & backend)')
    }
  }

  async function handleDelete(id) {
    if (!window.confirm('Are you sure you want to delete this employee?')) return
    try {
      setError('')
      await api.delete(`/api/employees/${id}`)
      await fetchEmployees()
    } catch (err) {
      console.error(err)
      setError('Failed to delete employee')
    }
  }

  return (
    <div>
      {error && (
        <div style={{ color: 'red', marginBottom: '10px' }}>
          {error}
        </div>
      )}

      {/* Form */}
      <h2>{editingId === null ? 'Add Employee' : 'Edit Employee'}</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <div style={{ marginBottom: '10px' }}>
          <label>
            First Name:{' '}
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
            />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Last Name:{' '}
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
            />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Email:{' '}
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">
          {editingId === null ? 'Create' : 'Update'}
        </button>
        {editingId !== null && (
          <button type="button" onClick={startCreate} style={{ marginLeft: '10px' }}>
            Cancel
          </button>
        )}
      </form>

      {/* List */}
      <h2>Employees</h2>
      {loading ? (
        <p>Loading...</p>
      ) : employees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        <table
          border="1"
          cellPadding="8"
          cellSpacing="0"
          style={{ width: '100%', borderCollapse: 'collapse' }}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>First name</th>
              <th>Last name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(emp => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.firstName}</td>
                <td>{emp.lastName}</td>
                <td>{emp.email}</td>
                <td>
                  <button onClick={() => startEdit(emp)}>Edit</button>
                  <button
                    onClick={() => handleDelete(emp.id)}
                    style={{ marginLeft: '8px' }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default EmployeePage
