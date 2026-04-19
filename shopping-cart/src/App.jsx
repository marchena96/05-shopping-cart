import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'

function App() {
  const [cart, setCart] = useState([])

  function addToCart(item) {
    // Validar si el elemento existe en el carrito
    const itemExists = cart.findIndex((product) => product.id === item.id)

    if (itemExists >= 0) {
      const updatedCart = [...cart]
      updatedCart[itemExists].quantity++
      setCart(updatedCart)
    } else {
      item.quantity = 1
      setCart([...cart, item])
    }
  }

  return (
    <BrowserRouter>
      <Header cart={cart} />
      
      <Routes>
        <Route 
          path="/" 
          element={
            <Home 
              cart={cart} 
              setCart={setCart} 
              addToCart={addToCart}
            />
          } 
        />
        <Route 
          path="/producto/:id" 
          element={
            <ProductDetail 
              cart={cart}
              addToCart={addToCart}
            />
          } 
        />
      </Routes>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
      </footer>
    </BrowserRouter>
  )
}

export default App
