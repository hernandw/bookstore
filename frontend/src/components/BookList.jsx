import { useEffect, useState } from "react"

const urlBase = "http://localhost:3000/books"
const BookList = () => {
    const [allLibros, setAllLibros] = useState([])



const getData = async()=>{

    const res = await fetch(urlBase)
    const data = await res.json()
    setAllLibros(data)
}

useEffect(() => {
    getData()
}, [allLibros])

  return (
    <div>
          <h1 className="text-center mt-5">Lista de Libros</h1>
          
          {
            allLibros.map((libro)=>{
                return(
                    <div className="card mb-3" key={libro.id}>
                        <div className="card-body">
                            <h5 className="card-title">{libro.autor}</h5>
                            <p className="card-text">{libro.titulo}</p>
                            <p className="card-text">{libro.editorial}</p>
                            <p className="card-text">{libro.precio}</p>
                            <p className="card-text">{libro.cantidad}</p>
                        </div>
                    </div>
                )
            })
          }
    </div>
  )
}

export default BookList
