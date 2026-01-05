# Employee Management System (Full-Stack Application)
## Project Overview

An intermediate, full-stack application. Interns will build their own Spring Boot  backend API and connect it to a React frontend.The application will feature full CRUD (Create,  Read, Update, Delete) functionality for employee records.

## Tech Stack
### Backend
    Spring Boot
    Spring Web
    Spring Data JPA
    Hibernate
    MySQL / H2 Database
    Lombok
    Maven
    Swagger (springdoc-openapi)

### Frontend
    React (Vite)
    Axios
    React Router DOM
    HTML, CSS, JavaScript

## Project Structure 
EMPLOYEE-MANAGEMENT-SYSTEM/
│
├── ems/
│   │
│   ├── backend/                     # Spring Boot Backend
│   │   ├── src/main/java/com/yourorg/ems/
│   │   │   ├── controller/          # REST APIs (EmployeeController)
│   │   │   ├── service/             # Business logic (EmployeeService)
│   │   │   ├── repository/          # JPA Repository (EmployeeRepository)
│   │   │   ├── entity/              # Entity classes (Employee)
│   │   │   └── config/              # CORS configuration
│   │   ├── src/main/resources/
│   │   │   └── application.yml      # Database configuration
│   │   ├── pom.xml                  # Maven dependencies
│   │   └── BackendApplication.java  # Spring Boot main class
│   │
│   ├── frontend/                    # React + Vite Frontend
│   │   ├── src/
│   │   │   ├── api.js               # Axios backend connection
│   │   │   ├── App.jsx              # Root component
│   │   │   ├── EmployeePage.jsx     # Employee CRUD UI
│   │   │   └── main.jsx             # React entry point
│   │   ├── index.html
│   │   └── package.json
│   │
│   ├── docs/                        # Project Documentation
│   │   ├── SRS.md                   # Software Requirements Specification
│   │   ├── TDD.md                   # Test & Design Document (v1–v3)
│   │   └── API-Docs.md              # Swagger & API documentation
│   │
│   └── README.md                    # Project overview & setup

## Features

    1.Add new employees
    2.View all employees
    3.Update employee details
    4.Delete employee records
    5.RESTful API design
    6.CORS handled at backend
    7.Swagger API documentation

## Documentation

This project follows documentation-driven development.

Document	Description
SRS	        Software Requirements Specification
TDD	        Technical Design Document
API Docs	Swagger-based REST API documentation

All documents are available inside the docs/ folder.

## Backend Setup (Spring Boot)
### Prerequisites
    Java 17+
    Maven
    MySQL (optional if using H2)

### Steps to Run
    cd backend
    mvn clean install
    mvn spring-boot:run

    Backend URL
        http://localhost:8080

    Swagger UI
        http://localhost:8080/swagger-ui.html

## Frontend Setup (React)
### Prerequisites

    Node.js (v18+)
    npm

### Steps to Run
    cd frontend
    npm install
    npm run dev

    Frontend URL
        http://localhost:5173

### API Endpoints
Method	    Endpoint	            Description
GET	        /api/employees	        Get all employees
GET     	/api/employees/{id}	    Get employee by ID
POST	    /api/employees	        Add new employee
PUT	        /api/employees/{id}	    Update employee
DELETE	    /api/employees/{id}	    Delete employee

## CORS Configuration

CORS is handled at the backend using WebMvcConfigurer to allow requests from the React frontend.
