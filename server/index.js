import http from "http"
import bodyparser from "body-parser"
import cors from "cors"
import express from "express"


import scrapRouter from "./router/scrapedRoute.js"


const PORT=5001
const server=express()

server.use(cors());
server.use(bodyparser.json());
server.get('/',(req,res)=>{
    res.send(" response")
})
server.use('/scraper',scrapRouter)



server.listen(PORT,()=>{
    console.log(`server is running ${PORT}`)
})


















