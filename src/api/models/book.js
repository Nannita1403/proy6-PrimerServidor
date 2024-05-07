const mongoose = require("mongoose");
const { title } = require("process");

const bookSchema = new mongoose.Schema(
{
    imgUrl: {type: String, require: true},
    price: {type: Number, require: true},
    title: {type: String, require:true},
    pages: {type: Number, require:true},
    tematic: {type:String, require: true},
    //? Aca lo que logro es poder relacionar las dos colecciones (books y autor)
    autor: {type: mongoose.Types.ObjectId, require:false, ref: "autors"},
},
{
    timestamps: true,
    collection: "books", //informativo puedo no ponerlo
}
);
    const Book= mongoose.model("books", bookSchema, "books");
    module.exports= Book;