require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const productRoutes = require('./routes/ProductRoutes')

// Connect to database
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch((e) => console.log("MongoDB Connection Error:", e));

// Middleware
app.use(express.json());

// routes
app.use('/products',productRoutes)

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
