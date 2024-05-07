const mongoose = require("mongoose");
const { title } = require("process");

const autorSchema = new mongoose.Schema(
{
    imgUrl: {type: String, require: true},
    name: {type: String, require:true},
    surname: {type: Number, require:true},
    otherBooks: {type:String, require: false}
},
{
    timestamps: true,
    collection: "autors", //informativo puedo no ponerlo
}
);
    const Autor= mongoose.model("autors", autorSchema, "autors");
    module.exports= Autor;