// nos taigo express (todo lo que tiene que ver como un servidor y utilizar cualquier metodo)

const { getBooks, postBook, deleteBook, updateBook, getBooksByPrice, getBooksByPages } = require("../controllers/book");

//al ponerle .routes( y creo una terminal)
const bookRoutes = require ("express").Router();

//?aca puedo ver un Crud completo:// puedo hacer todos con / pero como la ruta con dif metodos
bookRoutes.get("/", getBooks); //creo la ruta opara el controlador que acabo de crear
bookRoutes.get("/getByPrice/:price", getBooksByPrice); //voy a buscar por precio
bookRoutes.get("getByPages/:pages", getBooksByPages);
bookRoutes.post("/", postBook);
bookRoutes.put("/:id", updateBook);
bookRoutes.delete("/:id",deleteBook); //:id es por que envio: parametro de la ruta


module.exports = bookRoutes;