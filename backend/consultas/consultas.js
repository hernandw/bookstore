const pool = require('../config/db')



//CREATE

const createBook = async(autor, titulo, editorial, precio, cantidad)=>{
    try {
        const consulta = "INSERT INTO books values (DEFAULT,  $1, $2, $3, $4, $5)";
        const values = [autor, titulo, editorial, precio, cantidad];
        const { rows } = await pool.query(consulta, values);
    } catch (error) {
        console.log(error)
    }


}

//READ

const getBooks = async()=>{
    try {
        const consulta = "SELECT * FROM books";
        const { rows } = await pool.query(consulta);
        return rows
    } catch (error) {
        console.log(error)
    }
}


//UPDATE
const updateBook = async(autor, titulo, editorial, precio, cantidad, id)=>{
    try {
        const consulta = "UPDATE books SET autor = $1, titulo = $2, editorial = $3, precio = $4, cantidad = $5 WHERE id = $6";
        const value = [autor, titulo, editorial, precio, cantidad, id];
        const result = await pool.query(consulta, value);
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}


//DELETE
const deleteBook = async(id)=>{
    try {
        const consulta = "DELETE FROM books WHERE id = $1";
        const value = [id];
        const result = await pool.query(consulta, value);
        console.log('Libro Eliminado')
    } catch (error) {
        console.log(error)
    }
}



module.exports = {
    createBook,
    getBooks,
    updateBook,
    deleteBook
}