const Book = require("../models/book");
//crud completo: Create - Read - Use - Delete
//! Create
    const postBook = async (req, res, next)=> {
        try {
        const newBook = new Book ({
            title: req.body.title,
            imgUrl: req.body.imgUrl,
            price: req.body.price,
            pages: req.body.pages,
            tematic: req.body.pages,
        });
        const bookSaved = await newBook.save();

        return res.status(201).json(bookSaved);
        } catch (error) {
            return res.status(400).json("Ha fallado la petición");}
    };
    //! Read
const getBooks = async (req, res, next)=> {
    try {
    const allBooks = await Book.find().populate("autor");
    return res.status(200).json(allBooks);
    } catch (error) {
        return res.status(400).json("Ha fallado la petición");
    }
};

    //!Update
    const updateBook = async (req,res,next) => {
        try {
            const {id} =req.params;
            const newBook = new Book(req.body);
            newBook._id = id;
            const Update = await Book.findByIdAndUpdate(id, newBook, {new:true,}
            );
            return res.status(200).json(Update);
        } catch (error) {
            return res.status(400).json("Error");
        }
    }

    //!DELETE
    const deleteBook = async (req,res,next) => {
        try {
            const {id} =req.params;
            const bookDeleted = await Book.findByIdAndDelete(id);
            return res.status(200).json(bookDeleted);
        } catch (error) {
            return res.status(400).json("Error");
        }
    }
    //!Busqueda por Precio menos o igual
    const getBooksByPrice = async (req,res,next) => {
        try {
            const {price} = req.params;
            const books = await Book.find({price:{$lte:price}});
            return res.status(200).json(books);
        } catch (error) {
            return res.status(400).json("Error");
        }
    }

     //!Busqueda por Pages - el primero con esas paginas
    const getBooksByPages = async (req,res,next) => {
        try {
            const {pages} = req.params;
            const books = await Book.findOne(pages);
            return res.status(200).json(books);
        } catch (error) {
            return res.status(400).json("Error");
        }
    }
// exporto la funcion
module.exports = { getBooks, postBook, updateBook, deleteBook, getBooksByPrice, getBooksByPages};