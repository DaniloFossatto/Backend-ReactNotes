const {Router} = require("express")
const NotesController = require("../controllers/NotesController.js")


const ensurAuthenticated = require("../middlewares/ensurAuthenticated.js")




const notesRoutes = Router()
const notesController = new NotesController()
 
notesRoutes.use(ensurAuthenticated)

notesRoutes.post("/", notesController.create)
notesRoutes.get("/:id", notesController.show)
notesRoutes.delete("/:id", notesController.delete)
notesRoutes.get("/", notesController.index)

module.exports = notesRoutes 