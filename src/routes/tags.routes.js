const {Router} = require("express")
const TagsController = require("../controllers/TagsController.js")

const ensurAuthenticated = require("../middlewares/ensurAuthenticated.js")





const tagsRoutes = Router()
const tagsController = new TagsController()


tagsRoutes.get("/",ensurAuthenticated, tagsController.index)

module.exports = tagsRoutes 