const {Router} = require("express")
const UsersController = require("../controllers/UsersController.js")
const ensurAuthenticated = require("../middlewares/ensurAuthenticated.js")





const userRoutes = Router()
const userController = new UsersController()

userRoutes.post("/", userController.create)
userRoutes.put("/",ensurAuthenticated, userController.update)

module.exports = userRoutes