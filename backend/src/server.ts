import express from "express"
import route from "./route/route"


const app = express()
app.use(express.json())
app.use("/paigham/api/v1/", route)


app.listen(4000,()=>console.log("listening`"))