const mongoose = require("mongoose");
const { title } = require("process");

const bookSchema = new mongoose.Schema(
{
    imgUrl: {type: String, require: true},
    price: {type: Number, require: true},
    title: {type: String, require:true},
    autor: {type: mongoose.Types.ObjectId, require:false, ref: "autors"},
    categorie: {
        type:String, 
        require: false, 
        enum:[
            "Novela Contemporanea",
            "Infantil",
            "Novela Historica",
            "Novela Literaria",
            "Autoayuda",
            "Salud"
        ],
    },
},
{
    timestamps: true,
    collection: "books", //informativo puedo no ponerlo
}
);
    const Book= mongoose.model("books", bookSchema, "books");
    module.exports= Book;