# MERN Stack with MongoDB Aggregation

## Overview
This project demonstrates the implementation of MongoDB Aggregation in a MERN (MongoDB, Express, React, Node.js) stack application. The system allows users to perform advanced data analysis operations on stored product information.

## Key Concepts

### 1. **MongoDB**
MongoDB is a NoSQL database that stores data in JSON-like documents. It is schema-flexible and widely used in modern web applications.

### 2. **Mongoose**
Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js, providing a structured schema and validation for MongoDB documents.

### 3. **Aggregation in MongoDB**
Aggregation is a framework that processes and transforms data in MongoDB collections. It allows for complex queries, filtering, and computation.

#### **Aggregation Stages**
- **$match**: Filters documents based on conditions (e.g., category = 'Electronics').
- **$group**: Groups documents by a specified field and performs aggregations (e.g., sum, average, min, max).
- **$project**: Reshapes the document structure, including computed fields.
- **$sort**: Sorts results based on a specified field.
- **$limit**: Restricts the number of documents returned.
- **$unwind**: Deconstructs an array field into multiple documents.

### 4. **Express.js**
Express.js is a minimal and flexible Node.js framework for building APIs and web applications. It simplifies routing, middleware, and request handling.

### 5. **Routes and Controllers**
- **Routes**: Define the API endpoints and map them to controller functions.
- **Controllers**: Handle the business logic and database interactions.

### 6. **Middleware**
Middleware functions process requests before reaching the final route handler, commonly used for authentication, logging, and error handling.

### 7. **RESTful API**
The project follows REST principles, enabling structured communication between frontend and backend services.

### 8. **Environment Variables**
Sensitive configurations (like database connection URIs) are stored in `.env` files to enhance security.

### 9. **Error Handling**
Try-catch blocks and error response handling ensure robust and stable API responses.

## Setup Instructions
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd <project-folder>
