const { getAutors, postAutor, updateAutor } = require("../controllers/autor");

//al ponerle .routes( y creo una terminal)
const autorRoutes = require ("express").Router();

//?aca puedo ver un Crud completo:// puedo hacer todos con / pero como la ruta con dif metodos
autorRoutes.get("/", getAutors); //creo la ruta opara el controlador que acabo de crear
autorRoutes.post("/", postAutor);
autorRoutes.put("/:id", updateAutor);

module.exports = autorRoutes;