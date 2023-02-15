import express from "express";
const app = express()
const PORT = process.env.PORT || 8800;

app.get('/', (req, res) => {

    try{
     res.send({
         status: 200,
         message: "api berhasil di jalankan",
         data: []
     })
    }catch(e){
     res.send({
         status: 500,
         message: "api gagal di jalankan"
     })
    }
 })
 
 app.get("*" , (req, res) => {
     res.send({
         status: 404,
         message: "Routing Not Found!"
     })
 })
 
 
 app.listen(PORT , () => {
     console.log("server terhubung...")
 })