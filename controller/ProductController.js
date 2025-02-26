const Product = require('../models/Product');
const  { sampleProducts } = require('../config/sampleProducts');

const insertSampleProducts = async (req, res) => {
    try {
        const result = await Product.insertMany(sampleProducts);

        return res.status(201).json({
            success: true,
            message: "Sample products inserted successfully!",
            ProductCount: `Inserted ${result.length} sample products`,
            data:result

        });

    } catch (error) {
        console.error(" Error inserting sample products:", error);
        
        return res.status(500).json({
            success: false,
            message: "An error occurred while inserting sample products."
        });
    }
};

module.exports = {insertSampleProducts};
