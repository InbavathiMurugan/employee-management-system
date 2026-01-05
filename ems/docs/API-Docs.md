# API Documentation
## Employee Management System

## 1. Overview
This document describes the REST APIs provided by the Employee Management System backend.
All APIs are developed using Spring Boot and follow REST principles.

## 2. Swagger / OpenAPI Documentation
### Swagger UI URL
http://localhost:8080/swagger-ui.html


Swagger UI provides:
- List of all available endpoints
- Request/Response schema
- Interactive API testing

## 3. API Endpoints
### 3.1 Create Employee

URL: /api/employees
Method: POST
Request Body:
    {
        "firstName": "John",
        "lastName": "Doe",
        "email": "john.doe@example.com"
    }

Response:

    {
        "id": 1,
        "firstName": "John",
        "lastName": "Doe",
        "email": "john.doe@example.com"
    }

### 3.2 Get All Employees

URL: /api/employees
Method: GET
Response:

    [
    {
        "id": 1,
        "firstName": "John",
        "lastName": "Doe",
        "email": "john.doe@example.com"
    }
    ]

### 3.3 Get Employee by ID

URL: /api/employees/{id}
Method: GET
Response:

    {
        "id": 1,
        "firstName": "John",
        "lastName": "Doe",
        "email": "john.doe@example.com"
    }

### 3.4 Update Employee

URL: /api/employees/{id}
Method: PUT
Request Body:

    {
        "firstName": "Johnny",
        "lastName": "Doe",
        "email": "johnny.doe@example.com"
    }

Response:

    {
        "id": 1,
        "firstName": "Johnny",
        "lastName": "Doe",
        "email": "johnny.doe@example.com"
    }

### 3.5 Delete Employee

URL: /api/employees/{id}
Method: DELETE
Response: 204 No Content

## 4. Testing

All APIs are tested using:
    Postman
    Swagger UI

## 5. Error Handling

404 Not Found: Employee ID does not exist
400 Bad Request: Invalid request body
