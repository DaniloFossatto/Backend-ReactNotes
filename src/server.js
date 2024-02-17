require("express-async-errors")
const express = require('express')
const AppError = require("./utils/AppError")
const migrationsRun = require("./database/sqlite/migrations")
const app = express()
const PORT = 3333
const routes = require("./routes/index.routes")


app.use(express.json())
app.use(routes)
migrationsRun()

app.use((error, req, res, next)=>{
 if(error instanceof AppError){
    return res.status(error.statusCode).json({
        status: "error",
        message: error.message
    })}

    return res.status(500).json({
        status: "error",
        message: error.message
    })
 
})
app.listen(PORT, ()=> console.log(`Server is running on Port ${PORT}`))
