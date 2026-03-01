import { useState } from "react";
import DisplayProduct from "./components/DisplayProduct"
import Header from "./components/Header"
import { db } from "./data/db"



export default function App() {

  const [data, setData] = useState(db);

  return (
    <>
      <Header />
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {
            data.map((product) => (
              <DisplayProduct
                key={product.id}
                product={product}
              />
            ))
          }
        </div>
      </main>


      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
      </footer>
    </>
  )
}

