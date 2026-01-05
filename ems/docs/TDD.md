📘 TECHNICAL DESIGN DOCUMENT (TDD)

TDD(v1)-Backend Data Model & API Contracts

1️⃣ Employee Database Model

Entity Name: Employee

Field Name	Data Type	Constraints
id	        Long	    Primary Key, Auto-generated
firstName	String	    Not Null
lastName	String	    Not Null
email	    String	    Unique, Not Null

JPA Mapping

    *Annotated using @Entity
    *Table name: employees
    *Managed using Hibernate ORM

2️⃣ API Endpoint Contracts

➤ Create Employee

Endpoint: POST /api/employees

Request Body:

{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@gmail.com"
}


Required Fields: firstName, lastName, email
Response: Created employee object

➤ Get All Employees

Endpoint: GET /api/employees
Response: List of employees

➤ Get Employee by ID

Endpoint: GET /api/employees/{id}

➤ Update Employee

Endpoint: PUT /api/employees/{id}

➤ Delete Employee

Endpoint: DELETE /api/employees/{id}


TDD(v2)- [Backend Architecture & Data Flow]

1️⃣ Backend Layered Architecture

Controller Layer
     ↓
Service Layer
     ↓
Repository Layer
     ↓
Database (H2 / MySQL)

2️⃣ Layer Responsibilities

Controller Layer

    Handles HTTP requests
    Maps REST endpoints
    Uses @RestController

Service Layer

    Contains business logic
    Uses @Service
    Acts as a bridge between Controller and Repository

Repository Layer

    Extends JpaRepository
    Performs database CRUD operations

3️⃣ Backend Data Flow Example (Create Employee)

    1.Client sends POST request
    2.Controller receives request
    3.Service processes logic
    4.Repository saves data
    5.Response returned to client

4️⃣ CORS Handling

    Implemented using WebMvcConfigurer
    Allows frontend requests from localhost:3000 / 5173



TDD(v3)- Frontend Design & State Management

1️⃣ Frontend Component Hierarchy

App
 ├── Header
 ├── EmployeeListComponent
 │      └── EmployeeRowComponent
 ├── EmployeeFormComponent
 └── Footer

2️⃣ React State Design

EmployeeListComponent
State Variables

employees : Array
loading   : boolean
error     : string


EmployeeFormComponent
State Variables

firstName : string
lastName  : string
email     : string

EmployeeRowComponent

No local state
Receives employee data via props

3️⃣ Frontend–Backend Data Flow

    1.useEffect() triggers API call
    2.Axios fetches data from backend
    3.State updated using useState()
    4.UI re-renders automatically
