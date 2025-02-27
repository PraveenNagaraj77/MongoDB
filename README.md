Product Analytics API (MERN Stack with MongoDB Aggregation)

Overview

This project is a backend API built using the MERN stack (MongoDB, Express, React, Node.js) with a focus on MongoDB Aggregation Pipelines for data analysis. It provides insights into product data, including revenue, price distribution, and category-based statistics.

Key Concepts Used

1. MongoDB Aggregation Pipeline

MongoDB Aggregation is a powerful framework that processes data in multiple stages to transform and analyze documents. This project extensively uses aggregation to compute insights like total revenue, average price, price distribution, and product categorization.

Aggregation Stages Used

$match → Filters documents based on conditions (e.g., category, price range, stock availability).

$group → Groups documents by a specified field (e.g., category) and performs calculations like sum, average, min, and max.

$project → Reshapes the data output, removing unnecessary fields and adding computed values.

$sum → Computes the total value for a given field (e.g., total revenue).

$avg → Calculates the average value for a specified field (e.g., average price of products).

$max & $min → Finds the highest and lowest values in a dataset.

$subtract → Performs mathematical operations, such as calculating the price range.

2. MVC Architecture

The project follows the Model-View-Controller (MVC) architecture to separate concerns:

Model (Mongoose Schema): Defines the structure of product data.

Controller: Handles business logic, including data aggregation and response handling.

Routes: Manages API endpoints and directs requests to the appropriate controllers.

3. Mongoose (MongoDB ODM)

Mongoose is used as the Object Data Modeling (ODM) library for MongoDB. It simplifies database interactions by providing schema validation, query building, and model relationships.

4. RESTful API Design

The API follows REST principles, ensuring:

Stateless Communication → Each request is independent and carries necessary data.

Resource-Based URIs → Endpoints are designed to represent resources (e.g., /products/stats).

JSON Responses → Data is structured in JSON format for easy consumption.

5. Environment Variables

Sensitive information, such as database connection strings, is stored in an .env file. This enhances security and flexibility in deployment.

6. Express Middleware

Middleware functions are used to:

Parse JSON requests (express.json())

Handle errors gracefully

Route API requests to controllers

7. Sample Data Insertion

The API includes an endpoint to insert sample product data using insertMany(). This is useful for testing aggregation queries without manually adding data.

Use Cases

E-commerce Analytics → Analyze product sales, pricing trends, and category performance.

Inventory Insights → Identify high-value and frequently out-of-stock products.

Revenue & Pricing Trends → Understand how pricing strategies impact total revenue.

Getting Started

1. Install Dependencies

npm install

2. Set Up Environment Variables

Create a .env file and add your MongoDB connection string:

MONGO_URI=your_mongodb_connection_string
PORT=5000

3. Run the Server

npm start

4. API Endpoints

Method

Endpoint

Description

POST

/products/add

Inserts sample product data

GET

/products/stats

Fetches product statistics

GET

/products/analysis

Performs product price analysis

Conclusion

This project demonstrates how MongoDB's Aggregation Pipeline can be leveraged for powerful data analysis in a MERN stack application. By structuring data efficiently and utilizing aggregation techniques, businesses can derive valuable insights for decision-making.
