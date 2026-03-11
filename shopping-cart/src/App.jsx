import Header from "./components/Header" // Import Header from components
import { Product } from "./components/Product"
import { useState } from "react"
import { db } from "./data/db"

function App() {
  const [data, setData] = useState(db);
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    // Validate if the element exits
    const itemExists = cart.findIndex((product) => product.id === item.id)

    if (itemExists >= 0) {
      const updatedCart = [...cart];
      updatedCart[itemExists].quantity++;
      setCart(updatedCart);
    } else {
      item.quantity = 1;
      setCart([...cart, item]);
    }

  }

  return (
    <>
      <Header
        cart={cart}
      />
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {
            // item: Por cada item dentro de ese arreglo (data), React generará un componente <Product />
            data.map((item) => (
              <Product
                key={item.id}
                product={item}
                setCart={setCart}
                addToCart={addToCart}

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

export default App
