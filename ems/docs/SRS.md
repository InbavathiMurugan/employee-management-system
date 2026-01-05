# Software Requirements Specification (SRS)
## Employee Management System (EMS)

---

## 1. Introduction

### 1.1 Purpose
The purpose of this document is to define the functional and non-functional requirements of the Employee Management System (EMS).  
The system provides CRUD (Create, Read, Update, Delete) operations for managing employee records.

### 1.2 Scope
The Employee Management System is a full-stack web application consisting of:
- A Spring Boot backend REST API
- A React frontend user interface
- A MySQL database for persistence

The system allows users to manage employee details such as first name, last name, and email.

### 1.3 Intended Audience
- Interns / Developers
- Project Evaluators
- Faculty / Mentors

---

## 2. Overall Description

### 2.1 System Overview
EMS is a client-server application:
- Backend: Spring Boot REST API
- Frontend: React (Vite)
- Database: MySQL
- Communication: HTTP (JSON)

### 2.2 User Classes
- Admin User: Can perform all CRUD operations
- Normal User: Can view employee data

---

## 3. Functional Requirements

### FR-1: Create Employee
The system shall allow the user to create a new employee by providing:
- First Name
- Last Name
- Email (unique)

### FR-2: View All Employees
The system shall allow the user to retrieve and view a list of all employees.

### FR-3: View Employee by ID
The system shall allow the user to retrieve details of a specific employee using employee ID.

### FR-4: Update Employee
The system shall allow the user to update an existing employee’s details.

### FR-5: Delete Employee
The system shall allow the user to delete an employee using employee ID.

---

## 4. Non-Functional Requirements

- The system shall respond within 2 seconds for API requests.
- The system shall support RESTful API standards.
- The system shall handle CORS securely.
- The system shall ensure email uniqueness for employees.
- The system shall be easy to deploy and maintain.

---

## 5. Constraints

- Backend must be developed using Spring Boot.
- Frontend must be developed using React.
- Database must be MySQL or H2.
- API testing must be done using Postman.
