const Autor = require("../models/autor");
//crud completo: Create - Read - Use - Delete
//! Create
    const postAutor = async (req, res, next)=> {
        try {
        const newAutor = new Autor ({
            imgUrl: req.body.imgUrl,
            name: req.body.name,
            otherBooks: req.body.otherBooks,
        });
        const autorSaved = await newAutor.save();
        return res.status(201).json(autorSaved);
        } catch (error) {
            return res.status(400).json("Ha fallado la petición");}
    };
    //! Read
const getAutors = async (req, res, next)=> {
    try {
    const allAutors = await Autor.find().populate("books");
    return res.status(200).json(allAutors);
    } catch (error) {
        return res.status(400).json("Ha fallado la petición");
    }
};
//!Busqueda por Autor -
const getAutorbyId = async (req,res,next) => {
    try {    
    const { id } = req.params;
        const autor = await Autor.findById(id).populate("books");
        return res.status(200).json(autor);
    } catch (error) {
        return res.status(400).json("Error");
    }
}
    //!Update
    const updateAutor = async (req,res,next) => {
        try {
            const {id} =req.params;
            const oldAutor = await Autor.findById(id); //Hago un get del autor antes de modifciarlo
            const newAutor = new Autor(req.body);
            newAutor._id = id;
            newAutor.books = [...oldAutor.books, ...req.body.books] //aca hago un array nuevo y sumo los juegos viejos y los nuevos
            const Update = await Autor.findByIdAndUpdate(id, newAutor, {new:true,}
            );
            return res.status(200).json(Update);
        } catch (error) {
            return res.status(400).json("Error");
        }
    }
// exporto la funcion
module.exports = { getAutors, postAutor, updateAutor, getAutorbyId};