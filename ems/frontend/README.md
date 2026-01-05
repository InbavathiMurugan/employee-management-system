
---

# 📄 2️⃣ Frontend README  
📍 File: `frontend/README.md`

```md
# Employee Management System – Frontend

## 📌 Project Overview
This is the frontend application for the **Employee Management System**, developed using **React + Vite**.  
It consumes the Spring Boot REST API and provides a user interface for managing employee data.

---

## 🛠️ Tech Stack
- React
- Vite
- JavaScript
- Axios
- React Router DOM
- HTML & CSS

---

## 📁 Project Structure

frontend/
├── src
│ ├── api.js
│ ├── App.jsx
│ ├── EmployeePage.jsx
│ ├── main.jsx
│
├── index.html
├── package.json
└── README.md


---

## 🗓️ Development Plan Alignment

### ✅ Week 3 – Frontend Development
- Created React project using Vite
- Installed Axios and React Router DOM
- Built React components:
  - Employee list
  - Employee create/update form
- Managed state using `useState`
- Fetched backend data using `useEffect`
- Defined frontend component hierarchy (TDD v3)

### ✅ Week 4 – Full Stack Integration & Testing
- Integrated frontend with Spring Boot backend APIs
- Implemented:
  - View employees
  - Create employee
  - Update employee
  - Delete employee
- Verified CORS configuration
- Prepared documentation and demo

---

## 🔗 Backend Integration
The frontend communicates with backend using Axios.

Base URL:
```js
http://localhost:8080/api/employees
How to Run Frontend
Step 1: Navigate to frontend folder
cd frontend

Step 2: Install dependencies
npm install

Step 3: Start development server
npm run dev


The application will run at:

http://localhost:5173