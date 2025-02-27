const Product = require('../models/Product');
const  { sampleProducts } = require('../config/sampleProducts');


const getProductAnalysis = async (req, res) => {
    try {
        console.log("✅ Received GET request at /products/analysis");

        const result = await Product.aggregate([
            {
                $match: {
                    category: 'Electronics'
                }
            },
            {
                $group: {
                    _id: null, // Group all Electronics products together
                    totalRevenue: { $sum: "$price" }, // Sum of all prices
                    averagePrice: { $avg: "$price" }, // Average price
                    maxProductPrice: { $max: "$price" }, // Max price
                    minProductPrice: { $min: "$price" } // Min price
                }
            },
            {
                $project: {
                    _id: 0,
                    totalRevenue: 1,
                    averagePrice: 1,
                    maxProductPrice: 1,
                    minProductPrice: 1,
                    priceRange: {
                        $subtract: ["$maxProductPrice", "$minProductPrice"] // Fixed spelling
                    }
                }
            }
        ]);

        res.status(200).json({
            success: true,
            data: result
        });

    } catch (error) {
        console.error("❌ Error in getProductAnalysis:", error);

        return res.status(500).json({
            success: false,
            message: "An error occurred while fetching product analysis."
        });
    }
};




const getProductStats = async (req,res) => {
    try {
        const result = await Product.aggregate([
            {
                $match:{
                    inStock : true,
                    price: {
                        $gte:10000,
                    }
                }
            },
            // Stage 2 group our documents
            {
                $group:{
                    _id:"$category",
                    avgPrice : {
                        $avg:"$price"
                    },
                    count:{
                        $sum:1,
                    }
                }
            }
        ])


        res.status(200).json({
            success:true,
            data:result
        })

    } catch (e) {
        console.log(e);
        return res.status(500).json({
            success: false,
            message: "An error occurred ."
        });
    }
}

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

module.exports = {insertSampleProducts , getProductStats , getProductAnalysis };
