

const Author = require('../models/Author');
const Book = require('../models/Book')

const createAuthor = async (req, res) => {
    try {
        const { name, bio } = req.body;

        const newAuthor = new Author({ name, bio });
        const savedAuthor = await newAuthor.save();

        res.status(201).json({
            success: true,
            message: "Author created successfully",
            data: savedAuthor
        });

    } catch (error) {
        console.error("Error creating author:", error);
        res.status(500).json({
            success: false,
            message: "An error occurred while creating the author."
        });
    }
};

const createBook = async (req, res) => {
    try {
        const { title, year, authorId } = req.body;

        // Check if the author exists
        const author = await Author.findById(authorId);
        if (!author) {
            return res.status(404).json({ success: false, message: "Author not found" });
        }

        const newBook = new Book({ title, year, author: authorId });
        const savedBook = await newBook.save();

        res.status(201).json({
            success: true,
            message: "Book created successfully",
            data: savedBook
        });

    } catch (error) {
        console.error("Error creating book:", error);
        res.status(500).json({
            success: false,
            message: "An error occurred while creating the book."
        });
    }
};


const getBookWithAuthor = async (req, res) => {
    try {
       

        // Find the book by ID and populate the author details
        const book = await Book.findById(req.params.id).populate('author');

        if (!book) {
            return res.status(404).json({ success: false, message: "Book not found" });
        }

        res.status(200).json({
            success: true,
            message: "Book retrieved successfully",
            data: book
        });

    } catch (error) {
        console.error("Error fetching book:", error);
        res.status(500).json({
            success: false,
            message: "An error occurred while fetching the book."
        });
    }
};

module.exports = { createAuthor , createBook , getBookWithAuthor}