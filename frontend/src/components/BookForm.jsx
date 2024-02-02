import { useState } from "react";

const BookForm = () => {
  const [autor, setAutor] = useState("");
  const [titulo, setTitulo] = useState("");
  const [editorial, setEditorial] = useState("");
  const [precio, setPrecio] = useState("");
  const [cantidad, setCantidad] = useState("");

const handleSubmit = async(e)=>{
    e.preventDefault()
    try {
        const body = { autor, titulo, editorial, precio, cantidad }
        fetch('http://localhost:3000/book', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)

        })
        setAutor('')
        setTitulo('')
        setEditorial('')
        setPrecio('')
        setCantidad('')
    } catch (error) {
        console.log(error)
    }
}
    

  return (
    <div className="container">
      <h1 className="text-center mt-5">Agregar Libro</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Autor
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
                      placeholder="Ej. Mario Vargas LLosa"
                      value={autor}
            onChange={(e) => setAutor(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput2" className="form-label">
            Titulo
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput2"
                      placeholder="Ej. Cien años de soledad"
                      value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput3" className="form-label">
            Editorial
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput3"
                      placeholder="Ej. Siglo XXI"
                      value={editorial}
            onChange={(e) => setEditorial(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput4" className="form-label">
            Precio
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput4"
                      placeholder="Ej. 10"
                      value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput5" className="form-label">
            Cantidad
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput5"
                      placeholder="Ej. 10"
                      value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
          />
        </div>

        <button className="btn btn-primary">Agregar Libro</button>
      </form>
    </div>
  );
};

export default BookForm;
