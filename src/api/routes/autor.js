const { getAutors, postAutor, updateAutor, getAutorbyId } = require("../controllers/autor");

//al ponerle .routes( y creo una terminal)
const autorRoutes = require ("express").Router();

//?aca puedo ver un Crud completo:// puedo hacer todos con / pero como la ruta con dif metodos
autorRoutes.get("/", getAutors);
autorRoutes.get("/:id", getAutorbyId) //creo la ruta opara el controlador que acabo de crear
autorRoutes.post("/", postAutor);
autorRoutes.put("/:id", updateAutor);

module.exports = autorRoutes;