const mongoose = require("mongoose");
const { title } = require("process");

const autorSchema = new mongoose.Schema(
{
    imgUrl: {type: String, require: true},
    name: {type: String, require:true},
    surname: {type: String, require:true},
    books:[{ type: mongoose.Types.ObjectId, ref: "books", required: false}],
    otherBooks: {type:String, require: false}
},
{
    timestamps: true,
    collection: "autors", //informativo puedo no ponerlo
}
);
    const Autor= mongoose.model("autors", autorSchema, "autors");
    module.exports= Autor;