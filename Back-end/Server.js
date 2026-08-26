import express from 'express'
import mongoose from 'mongoose'
import { books } from './Models/Book.js'
import cors from 'cors'
const app= express()
const port = 3000
let conn = await mongoose.connect('mongodb+srv://shubham420786201_db_user:MIZj97FhK5lHz41i@cluster0.mtzr456.mongodb.net/')

app.use(cors())
app.use(express.json())


app.get('/books',async(req,res)=>{
const book = await books.find()
res.json(book)
})

app.post('/books',async(req,res)=>{
    const newbook ={
        title:req.body.title,
        author:req.body.author,
        publishYear:req.body.publishYear
    }
    const book = await books.create(newbook)

    res.send(book)
})

app.get('/books/:id',async(req,res)=>{
const{id} = req.params

    const book = await books.findById(id)
res.json(book)
})

app.put('/books/:id',async(req,res)=>{
const{id} = req.params

    const book = await books.findByIdAndUpdate(id,req.body)
res.send(book)
})


app.delete('/books/:id',async(req,res)=>{
const{id} = req.params

    const book = await books.findByIdAndDelete(id)
res.send("Book deleted successfully")
})






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


