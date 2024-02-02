const express = require('express')
const router = express.Router()

const { createBook, getBooks, updateBook, deleteBook } = require('../consultas/consultas')

router.post("/book", async (req, res) => {
    const { autor, titulo, editorial, precio, cantidad } = req.body
    const consuta = await createBook(autor, titulo, editorial, precio, cantidad)
    res.send('Libro agregado')
});


router.get("/books", async (req, res) => {
    const books = await getBooks()
    res.json(books)
})

router.put("/book/:id", async (req, res) => {
    const id = req.params.id
    const { autor, titulo, editorial, precio, cantidad } = req.body
    await updateBook(autor, titulo, editorial, precio, cantidad, id)
    res.send('Libro actualizado')
    
})

router.delete("/book/:id", async (req, res) => {
    const { id } = req.params
    await deleteBook(id)
    res.send('Libro eliminado con exito')
})

module.exports = router